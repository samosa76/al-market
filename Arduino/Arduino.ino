#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <WiFiClientSecure.h>
#include <SPI.h>
#include <MFRC522.h>

/*
  Project #1 Irwansyah Done Senin/12 Bulan Januari	
  Hardware: Wemos LOLIN D1 R1 ESP8266 + MFRC522 RFID Module
  Baud Rate: 115200
*/

// ==================== WiFi CONFIGURATION ================
const char* ssid = "IRWANSYAH, WULAN";
const char* password = "IRWANSYAH";
// Gunakan IP lokal Backend
const char* serverURL = "http://192.168.100.119:8000";

// ==================== MFRC522 PINS ====================
#define RST_PIN D3   // RST pin = D3 (GPIO0)
#define SS_PIN  D4   // SDA/CS pin = D4 (GPIO2)

// ==================== RELAY/MOTOR CONTROL PINS ====================
#define RELAY_PIN D8  // Relay control pin = D8 (GPIO15)
// Sesuaikan dengan pin Anda jika berbeda

// ==================== MFRC522 INSTANCE ====================
MFRC522 rfid(SS_PIN, RST_PIN);
MFRC522::MIFARE_Key key;

// ==================== KONFIGURASI ====================
const int BAUD_RATE = 115200;
const int RFID_DEBOUNCE_TIME = 2000; // Debounce untuk mencegah pembacaan duplikat
const unsigned long MACHINE_ON_DURATION = 5000; // Mesin nyala selama 5 detik

// String untuk menyimpan UID terakhir yang dibaca
String lastUID = "";
unsigned long lastCardTime = 0;
unsigned long lastDebugTime = 0;
unsigned long machineOnStartTime = 0; // Waktu mesin dinyalakan
bool machineActivated = false; // Flag mesin sedang aktif

// ==================== FORWARD DECLARATIONS ====================
void connectToWiFi();
void checkUIDWithAPI(String uid);
void readRFIDCard();
void initMFRC522();
void setupRelayPin();
void activateMachine();
void updateMachineState();

// ==================== MFRC522 INITIALIZATION ====================
void initMFRC522() {
  // Initialize SPI with slower frequency for reliability
  SPI.begin();
  SPI.setFrequency(1000000);  // 1MHz (slower = more reliable)
  delay(100);
  
  // Initialize MFRC522
  rfid.PCD_Init();
  delay(100);
}

// ==================== WiFi FUNCTIONS ====================
void connectToWiFi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  
  int attempts = 0;
  while (WiFi.status() != WL_CONNECTED && attempts < 20) {
    delay(500);
    attempts++;
  }
}

// ==================== SETUP ====================
void setup() {
  Serial.begin(BAUD_RATE);
  delay(1000);
  
  // Initialize Relay Pin
  setupRelayPin();
  delay(500);
  
  // Initialize MFRC522
  initMFRC522();
  delay(500);
  
  // Connect WiFi
  connectToWiFi();
}

// ==================== LOOP ====================
void loop() {
  // Terus membaca dari RFID reader
  readRFIDCard();
  
  // Update mesin state (check apakah perlu dimatikan)
  updateMachineState();
  
  delay(200);
}

// ==================== RFID READING FUNCTION ====================
void readRFIDCard() {
  // Look for new cards
  if (!rfid.PICC_IsNewCardPresent())
    return;

  // Try to read the card
  if (!rfid.PICC_ReadCardSerial())
    return;

  // Convert UID to HEX string
  String uid = "";
  for (byte i = 0; i < rfid.uid.size; i++) {
    uid += String(rfid.uid.uidByte[i] < 0x10 ? "0" : "");
    uid += String(rfid.uid.uidByte[i], HEX);
  }
  uid.toUpperCase();

  // Debounce check
  unsigned long currentTime = millis();
  
  if (uid != lastUID || (currentTime - lastCardTime) > RFID_DEBOUNCE_TIME) {
    lastUID = uid;
    lastCardTime = currentTime;
    
    // Send to API
    checkUIDWithAPI(uid);
  }

  // Stop reading
  rfid.PICC_HaltA();
  rfid.PCD_StopCrypto1();
}

// ==================== API CALL FUNCTION ====================
void checkUIDWithAPI(String uid) {
  if (WiFi.status() != WL_CONNECTED) {
    return;
  }
  
  // Print only the UID
  Serial.println(uid);
  
  HTTPClient http;
  
  // Remove trailing slash from serverURL if exists
  String baseURL = String(serverURL);
  if (baseURL.endsWith("/")) {
    baseURL = baseURL.substring(0, baseURL.length() - 1);
  }
  
  String url = baseURL + "/api/checkuid?uid=" + uid;
  
  // For HTTPS ngrok, use WiFiClientSecure
  if (url.startsWith("https://")) {
    static WiFiClientSecure client;
    client.setInsecure(); // Bypass SSL verification for ngrok
    http.begin(client, url);
  } else {
    // For HTTP local network, use regular WiFiClient
    WiFiClient client;
    http.begin(client, url);
  }
  
  int httpCode = http.GET();
  
  if (httpCode == 200) {
    // ACTIVATE MACHINE ketika kartu valid
    activateMachine();
    
  } else if (httpCode == 403) {
    // Machine is OFF
    
  } else if (httpCode == 404) {
    // UID not found
  } else {
    // Error
  }
  
  http.end();
}

// ==================== RELAY SETUP ====================
void setupRelayPin() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW); // Relay OFF by default
}

// ==================== ACTIVATE MACHINE (NYALAKAN RELAY) ====================
void activateMachine() {
  digitalWrite(RELAY_PIN, HIGH); // Relay ON
  machineActivated = true;
  machineOnStartTime = millis();
}

// ==================== UPDATE MACHINE STATE ====================
void updateMachineState() {
  // Jika mesin sedang aktif, check apakah sudah waktunya mematikan
  if (machineActivated) {
    unsigned long currentTime = millis();
    unsigned long machineOnTime = currentTime - machineOnStartTime;
    
    // Jika sudah lewat waktu yang ditentukan, matikan mesin
    if (machineOnTime >= MACHINE_ON_DURATION) {
      digitalWrite(RELAY_PIN, LOW); // Relay OFF
      machineActivated = false;
    }
  }
}
