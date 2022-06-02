package com.unused.go.repository.product

import com.unused.go.domain.products.Category
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import java.util.Optional

@Repository
interface CategoryRepository: JpaRepository<Category, String> {
    @Query("SELECT C FROM Category C WHERE C.subject = 'ROOT' ")
    fun findRootCategory(): Collection<Category>
    fun findBySubject(subject: String = "ROOT"): Collection<Category>
}
/*
    1. and
    findByLastnameAndFirstname
    =>where x.lastname = ?1 and x.firstname = ?2

    2. or
    findByLastnameOrFirstname
    =>where x.lastname = ?1 or x.firstname = ?2

    3. between
    findByStartDateBetween
    =>where x.startDate between ?1 and ?2

    4. lessThan
    findByAgeLessThan
    =>where x.age < ?1

    5. greaterThan
    findByAgeGreaterThan
    =>where x.age > ?1

    6. after
    findByStartDateAfter
    =>where x.startDate > ?1

    7. before
    findByStartDateBefore
    =>where x.startDate < ?1

    8. isNull
    findByAgeIsNull
    =>where x.age is null

    9. isNotNull, notNull
    findByAge(Is)NotNull
    =>where x.age is not null

    10. like
    findByFirstnameLike
    =>where x.firstname like ?1

    11. notLike
    findByFirstnameNotLike
    =>where x.firstname not like ?1

    12. startingWith
    findByFirstnameStartingWith
    =>where x.firstname like ?1 (parameter bound with appended %)

    13. endingWith
    findByFirstnameEndingWith
    =>where x.firstname like ?1 (parameter bound with prepended %)

    14. containing
    findByFirstnameContaining
    =>where x.firstname like ?1 (parameter bound wrapped in %)

    15.orderBy
    findByAgeOrderByLastnameDesc
    =>where x.age = ?1 order by x.lastname desc

    16. not
    findByLastnameNot
    =>where x.lastname <> ?1

    17. in
    findByAgeIn(Collection<Age> ages)
    =>where x.age in ?1

    18. notIn
    findByAgeNotInt(Collection<Age> age)
    =>where x.age not in ?1

    19. true
    findByActiveTrue
    =>where x.active = true

    20. false
    findByActiveFalse
    =>where x.active = false
 */