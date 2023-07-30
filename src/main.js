import { createApp } from "vue";

import "./style.css";
import Home from "./Home.vue";
import axios from "axios";

createApp(Home).provide("$axios", axios).mount("#home");
