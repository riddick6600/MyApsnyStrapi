# ЗАДАЧА

Спроектировать сущность Hotel/Hotels в Strapi 5 с поддержкой множественных интеграций и собственной базы данных.

# ВАЖНЫЕ ФАЙЛЫ

## Техническая документация

websitedoc.pdf

Strapi(В разработке)
schema.json - текущая базовая структура Hotel в Strapi (пример)

## TravelLine:

swagger.json - API документация TravelLine
properties.short.json - основные данные отелей из TravelLine API
cancellation-rules.json - правила отмены бронирования TravelLine
extra-stay-rules.json - правила проживания TravelLine
room-amenity-categories.json - категории удобств в номерах
room-type-categories.json - типы номеров

- TravelLine API интеграция
- Собственная база отелей
- - Поля повторяют по названиям поля для отелей из TravelLine
- Потенциальные будущие API партнеры

# СТРУКТУРА ДАННЫХ HOTEL

## Основные поля (Strapi)

```javascript
{
  id: "UUID",
  name: "string, required",
  slug: "string, unique",
  description: "text",
  stars: "number (0-5)",
  published: "boolean",
  status: "enum (active, draft, archived)",
  images: "media[]",

  // Relations
  place: "relation",
  page: "component",
  reviews: "relation[]",
  categories: "relation[]"
}
```
