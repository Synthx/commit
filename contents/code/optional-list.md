---
title: ♻️️ made it Optional<List> for extra optionality
date: 2026-03-05
featured: true
language: java
---

```java
@Repository
public interface SomeRepository extends JpaRepository<SomeEntity, Id> {
    Optional<List<SomeEntity>> findAllByCriteria(final String criteria);
}
```
