if (window.location.href.indexOf('kiosk') > 0) {
    setTimeout(function () {
        try {
            const home_assistant_main =  document
                  .querySelector("body > home-assistant").shadowRoot
                  .querySelector("home-assistant-main");
            
            if (window.location.href.indexOf('show_tabs') > 0) {
                const header = home_assistant_main.shadowRoot
                      .querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace").shadowRoot
                      .querySelector("hui-root").shadowRoot
                      .querySelector("#layout > app-header > app-toolbar")
                      .style.display = "none";
            } else {
                const header = home_assistant_main.shadowRoot
                      .querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace").shadowRoot
                      .querySelector("hui-root").shadowRoot
                      .querySelector("#layout > app-header")
                      .style.display = "none";
            }
            
            const drawer = home_assistant_main.shadowRoot
                  .querySelector("#drawer")
                  .style.display = 'none';
                  
            home_assistant_main.shadowRoot
                  .querySelector("app-drawer-layout > partial-panel-resolver > ha-panel-lovelace").shadowRoot
                  .querySelector("hui-root").shadowRoot
                  .querySelector("ha-app-layout")
                  .querySelector("app-header").style.left="0"

            home_assistant_main.style.setProperty("--app-drawer-width", 0);
            home_assistant_main.shadowRoot
                .querySelector("#drawer > ha-sidebar").shadowRoot
                .querySelector("div.menu > ha-icon-button")
                .click();
            // window.dispatchEvent(new Event('resize')); // messes up the layout
        }
        catch (e) {
            console.log(e);
        }
    }, 200);
}