// Section registry. Order of the one-page experience = order of PAGES in content.mjs.
// To add a section: add a PAGES entry, a module here, and src/styles/sections/<key>.css.
import home from './hero.mjs';
import about from './about.mjs';
import competencies from './competencies.mjs';
import experience from './experience.mjs';
import projects from './projects.mjs';
import skills from './skills.mjs';
import education from './education.mjs';
import certifications from './certifications.mjs';
import faq from './faq.mjs';
import contact from './contact.mjs';

export const SECTIONS = { home, about, competencies, experience, projects, skills, education, certifications, faq, contact };
