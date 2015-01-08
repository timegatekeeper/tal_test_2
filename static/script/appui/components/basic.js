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

                this.pageLayout = new VerticalList();

                this.header = new Header();

                this.pageLayout.appendChildWidget(this.header);

                this.carousel = new TheCarousel({ id: 'testCarousel' });

                this.pageLayout.appendChildWidget(this.carousel);

                //this.appendChildWidget(pageLayout);

                console.log(this.header.isFocusable());

                var handler = new ActivateFirstHandler();
                handler.attach(this.carousel);



                this.addEventListener("aftershow", function appReady() {
                    self.getCurrentApplication().ready();
                    self.removeEventListener('aftershow', appReady);
                    self.header.focus();
                });

                this.addEventListener("beforerender", function(ev) {
                    self._onBeforeRender(ev);
                });

                this.pageLayout.addEventListener("keyup", function(evt) {
                    console.log("PageLayout Key Event");
                    pageLayout.setActiveChildWidget(header);

                    if (evt.keyCode === KeyEvent.VK_UP) {

                    }
                });

    		},

            _onBeforeRender: function(ev) {
               this.appendChildWidget(this.pageLayout);
            }

    	});

    });