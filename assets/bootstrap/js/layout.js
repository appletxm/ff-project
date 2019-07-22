        /*响应式布局 start*/
        function setRootFontSize() {
            var width = document.documentElement.clientWidth, fontSize;
            if (width > 750) {
                document.getElementsByTagName('html')[0].style['font-size'] = 100 + 'px';
            }
           	else if(width <= 750){
               fontSize = (width / 7.5);
               document.getElementsByTagName('html')[0].style['font-size'] = fontSize + 'px';
            }
        }
        setRootFontSize();
        window.addEventListener('resize', function() {
            setRootFontSize();
        }, false);
        /*响应式布局 end*/