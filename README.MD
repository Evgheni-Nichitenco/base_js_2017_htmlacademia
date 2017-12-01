## JavaScript базовый. HTMLAcademy 2017

### Три главных слова

- querySelector()  
    Метод для поиска элементов.
    
- addEventListener()  
    Метод для отлова событий.
    
- classList  
    Набор методов для управления классами.
    
### querySelector

Возвращает первый элемент из DOM-дерева, соответствующий CSS-селектору.

*document.querySelector(".user-block"");*

document - Где мы будем искать элемент (по всему DOM-дереву).

querySelector - Метод поиска элемента.

.user-block - Передаем методу CSS-селектор, по которому будем искать.

### quetySelectorAll

Возвращает ВСЕ элементы из DOM-дерева, соответствующие CSS-селектору.

### addEventListener

Отлавливает событие элемента и выполняет переданную функцию.

*link.addEventListener("click", function(){});*

link - Элемент, у которого будем ловить событие.

addEventListener - Метод для отлова событий.

click - Определяем, какое событие мы ловим.

function() {} - Функция, которая будет выполняться каждый раз, когда мы ловим событие "клик".

### event - Элемент "событие"

*event.preventDefault();* - отмена события которое должно произойти "по умолчанию"

### classList - Набор методов для управления классами элемента.

*element.classlist.add("modal-content-show");*

element - Элемент, которому добавляем новый класс.
classList - Свойство, содержащее в себе методы для работы с классами.
add - Метод добавления класса.
"modal-content-show" - Название класса, которое нужно добавить элементу.

#### Методы у classList: ####

*element.classList.add();* - Добавляет класс

*element.classList.remove();* -  Удаляет класс

*element.classList.toggle();* -  Переключает класс

*element.classList.contains();* - Сообщает, есть ли класс у элемента (да или нет).

