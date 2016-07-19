Описание: 
  плагин аккордеон предназначен для построения выпадающего меню, написанный при помощи библиотеки Jquery.
Подключение и использование:
  HTML файл включает в себя необходимую структуру построение списка меню, а именно:
  ```html
          <ul class="accordion">
            <li ><a href="#" >Меню 1</a>
                <ul class="active" >
                    <li><a href="#" title="Элемент 1">Элемент 1</a></li>
                    <li><a href="#" title="Элемент 2">Элемент 2</a></li>
                    <li><a href="#" title="Элемент 3">Элемент 3</a></li>
                </ul>
            </li>
            <li><a href="#">Меню 2</a>
                <ul>
                    <li><a href="#" title="Элемент 1">Элемент 1</a></li>
                    <li><a href="#" title="Элемент 2">Элемент 2</a></li>
                    <li><a href="#" title="Элемент 3">Элемент 3</a></li>
                </ul>
            </li>
            <li><a href="#">Меню 3</a>
                <ul>
                    <li><a href="#" title="Элемент 1">Элемент 1</a></li>
                    <li><a href="#" title="Элемент 2">Элемент 2</a></li>
                    <li><a href="#" title="Элемент 3">Элемент 3</a></li>
                </ul>
            </li>
        </ul>
        
      ```  

        Для подключения js необходим код:
 ```html
       $(document).ready( function a() {
          $('.accordion').accordionBlock();
      }) ;
      
```
