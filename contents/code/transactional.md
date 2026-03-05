---
title: ⚡️ Ensure we spend CPU on a useless transaction
date: 2026-03-05
featured: true
language: java
---

```java
@Service
@Transactional
@RequiredArgsConstructor
public class SomeServiceImpl implements SomeService {

    private final SomeRepository repository;

    @Override
    public List<SomeEntity> findByCriteria(String criteria) {
        return repository.findByCriteria(criteria);
    }

    @Override
    public List<SomeEntity> saveAll(List<SomeEntity> list) {
        return repository.saveAll(list);
    }
}
```
