import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

import ThemeController from "./controllers/theme_controller.js";
import NavbarController from "./controllers/navbar_burger_controller.js";
import MessageController from "./controllers/message_controller.js";

window.Stimulus = Application.start();
Stimulus.register("theme", ThemeController);
Stimulus.register("navbar", NavbarController);
Stimulus.register("message", MessageController);
