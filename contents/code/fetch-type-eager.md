---
title: 🗃️️ load entire database whenever entity is fetched
date: 2026-03-05
featured: true
language: java
---

```java
@Entity
public class SomeEntity {
    @Id
    private UUID id;

    @OneToMany(mappedBy = "other_column", fetch = FetchType.EAGER)
    private List<OtherEntity> otherEntities;
}
```
