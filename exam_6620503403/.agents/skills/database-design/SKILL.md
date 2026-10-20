---
name: database-design
description: Design relational tables, keys, constraints, data types, and indexes.
---
# When to use
Use for new or changed operational/dimensional storage.
# Workflow
1. Choose model style from workload. 2. Define PK/FK and cardinality. 3. Select portable types. 4. add unique/check constraints. 5. Index joins and common filters. 6. draw Mermaid ERD. 7. review generated SQL.
# Technical rules
Money uses decimal; timestamps have explicit semantics; names are stable snake_case; constraints protect business identity.
# Example
`UNIQUE(order_id, order_item_id)` prevents repeated fact loading.
# Validation checklist
No orphan path; indexes match queries; nullability is intentional; both provider schemas are equivalent.
# Common mistakes
Float money, missing uniqueness, excessive indexes, or provider-only types without variants.
