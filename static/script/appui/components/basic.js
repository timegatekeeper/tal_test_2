require.def("basicapp/appui/components/basic",
    [
        "antie/widgets/component",
        "antie/widgets/verticallist",
        "antie/widgets/button",
        "antie/widgets/label",
        "basicapp/appui/parts/header",
        "basicapp/appui/parts/thecarousel",
        "antie/widgets/carousel/keyhandlers/activatefirsthandler",
    ],
    function (Component, VerticalList, Button, Label, Header, TheCarousel, ActivateFirstHandler) {

    	return Component.extend({

    		init: function () {

    			var self, pageLayout, header, carousel;

                self = this;

    			this._super("basic_component");

                pageLayout = new VerticalList();

                header = new Header();

                pageLayout.appendChildWidget(header);

                carousel = new TheCarousel({ id: 'testCarousel' });

                pageLayout.appendChildWidget(carousel);                

                this.appendChildWidget(pageLayout);

                console.log(header.isFocusable());

                pageLayout.setActiveChildWidget(header);



                var handler = new ActivateFirstHandler();
                handler.attach(carousel);



                this.addEventListener("aftershow", function appReady() {
                    self.getCurrentApplication().ready();
                    self.removeEventListener('aftershow', appReady);
                });

                pageLayout.addEventListener("keyup", function(evt) { 
                    console.log("PageLayout Key Event");
                    pageLayout.setActiveChildWidget(header);

                    if (evt.keyCode === KeyEvent.VK_UP) {

                    }
                });

    		}

    	});

    });