# QIWI Payout API Tests (Playwright) 💸🧪

Набор автотестов для проверки QIWI Payout API.  
Используется **Postman коллекция**, запускается через **Newman** или **Playwright Test**.

---

## Установка ▶️

git clone https://github.com/Lorgar40k/qiwi-api-tests
cd qiwi-tests
npm install

Перед запуском необходимо выставить переменные окружения!
export QIWI_API_KEY="your_api_key_here"        # 🔑 API ключ
export QIWI_AGENT_ID="your_agent_id"           # 🏷️ ID агента
export QIWI_POINT_ID="your_point_id"           # 📍 ID точки


Структура проекта
qiwi-tests/
│── tests/                 # Тесты Playwright
│── postman_collection.json # Коллекция Postman
│── package.json            # Зависимости
│── README.md               # Документация
