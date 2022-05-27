import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';
import Tabs from './ui/tabs';
import Snackbar from './ui/snackbar';

// Create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// Create dropdowns
const dropdowns = document.querySelector('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

// Create Tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// Create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('You clicked me!');
});