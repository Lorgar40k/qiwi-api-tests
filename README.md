# QIWI Payout API Tests (Playwright) 💸🧪

Набор автотестов для проверки **QIWI Payout API**.  
Используется **Postman коллекция**, запускается через **Newman** или **Playwright Test**.

---

## Установка ▶️

```bash
git clone https://github.com/Lorgar40k/qiwi-api-tests
cd qiwi-tests
npm install
```

---

## Переменные окружения 🌐

Перед запуском необходимо выставить переменные окружения:

```bash
export QIWI_API_KEY="your_api_key_here"        # 🔑 API ключ
export QIWI_AGENT_ID="your_agent_id"           # 🏷️ ID агента
export QIWI_POINT_ID="your_point_id"           # 📍 ID точки
```

(Windows PowerShell):

```powershell
$env:QIWI_API_KEY="your_api_key_here"
$env:QIWI_AGENT_ID="your_agent_id"
$env:QIWI_POINT_ID="your_point_id"
```

---

## Запуск тестов ▶️

### Через Playwright Test 🚀

```bash
npx playwright test
```

### Через Newman (Postman CLI) 📝

```bash
npx newman run ./postman_collection.json \
  --env-var QIWI_API_KEY=$QIWI_API_KEY \
  --env-var QIWI_AGENT_ID=$QIWI_AGENT_ID \
  --env-var QIWI_POINT_ID=$QIWI_POINT_ID
```

---

## Структура проекта 📂

```
qiwi-tests/
│── tests/                  # 🧪 Тесты Playwright
│── postman_collection.json  # 📝 Коллекция Postman
│── package.json             # 📦 Зависимости
│── README.md                # 📖 Документация
```
