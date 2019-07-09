import { GuestsDropdown } from 'components/dropdown/GuestsDropdown';
import { BedsDropdown } from 'components/dropdown/BedsDropdown';

export const guestsSettings = {
    maxGuests: 16,
    maxInfants: 5,
    defaultText: 'Сколько гостей',
    resultWords: {guests: ['гость','гостя','гостей'], infants: ['младенец','младенца','младенцев']}
};

export const bedsSettings = {
    maxBeds: 16,
    maxBedrooms: 16,
    maxBathrooms: 16,
    defaultText: 'Выберите количество...',
    resultWords: {
        bedrooms: ['спальня','спальни','спальен'],
        beds: ['кровать','кровати','кроватей'],
        bathrooms: ['ванная комната','ванных комнаты','ванных комнат']
    }
};

const guests1Dropdown = new GuestsDropdown(guestsSettings, '.dropdown__drop_guests-1');
const guests2Dropdown = new GuestsDropdown(guestsSettings, '.dropdown__drop_guests-2');
const guests3Dropdown = new GuestsDropdown(guestsSettings, '.dropdown__drop_guests-3');

const beds1Dropdown = new BedsDropdown(bedsSettings, '.dropdown__drop_beds-1');
const beds2Dropdown = new BedsDropdown(bedsSettings, '.dropdown__drop_beds-2');

guests1Dropdown.init();
guests2Dropdown.init();
guests3Dropdown.init();
beds1Dropdown.init();
beds2Dropdown.init();

