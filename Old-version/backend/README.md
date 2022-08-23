# NOTES API

Para ejecutar la API:

Ejecutar el archivo:
local.sh

Ingresar al host local:
http://localhost:3001/

## Esquemas de datos
## Notes
- title:
    - type: string
- content
    - type: string
- categoryId
    - type: string
    - format: mongoId
- archived
    - type: bool
- edited
    - type: string

## Categories
- tag

## Users
- name
    - type: string
- password
    - type: string