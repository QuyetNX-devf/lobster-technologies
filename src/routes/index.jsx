import ClinicalNotes from '../pages/ClinicalNotes';

const publicRoutes = [
  { path: '/', component: ClinicalNotes, layout: 'default' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
