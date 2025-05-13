import data from './js/data.js';
import { overlay } from './js/sections/navbar.js';
import { createExperienceCards } from './js/sections/experience.js';
import { createProjectCards } from './js/sections/project.js';
import { createSkillCards } from './js/sections/skill.js';
import { createCertCards } from './js/sections/certificate.js';

overlay();
createExperienceCards(data.experiences);
createProjectCards(data.projects);
createSkillCards(data.skills);
createCertCards(data.certs);