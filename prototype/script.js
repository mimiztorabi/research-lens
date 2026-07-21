/* This script powers only local, pre-written prototype interactions; it makes no network or AI requests. */
const sources = document.querySelectorAll('[data-source]');
const count = document.querySelector('#source-count');
const generateButton = document.querySelector('#generate-button');
const briefEmpty = document.querySelector('#brief-empty');
const briefContent = document.querySelector('#brief-content');
const themesList = document.querySelector('#themes-list');
const questionInput = document.querySelector('#research-question');
const questionPreview = document.querySelector('#question-preview');
const copyButton = document.querySelector('#copy-button');
const copyStatus = document.querySelector('#copy-status');

const themes = [
  { text: 'People spend time reconnecting notes to the claims they eventually need to defend.', source: 'Interview study' },
  { text: 'Participants value a concise starting point, but want to inspect evidence before using it in a decision.', source: 'Survey summary' },
  { text: 'Repeated questions in support signals may be useful context, but are not sufficient evidence on their own.', source: 'Support themes' }
];

function selectedSources() {
  return [...sources].filter((source) => source.checked).map((source) => source.dataset.source);
}
function updateCount() {
  const selected = selectedSources();
  count.textContent = `${selected.length} selected`;
  generateButton.disabled = selected.length === 0;
  generateButton.textContent = selected.length ? 'Generate a sample brief →' : 'Select a source to continue';
}
function renderBrief() {
  const selected = selectedSources();
  const question = questionInput.value.trim();
  briefEmpty.hidden = true;
  briefContent.hidden = false;
  questionPreview.textContent = question || 'No question was entered.';
  themesList.replaceChildren();
  themes.filter((theme) => selected.includes(theme.source)).forEach((theme) => {
    const item = document.createElement('li');
    item.append(document.createTextNode(theme.text));
    const citation = document.createElement('span');
    citation.className = 'citation';
    citation.textContent = theme.source;
    item.append(citation);
    themesList.append(item);
  });
  if (!themesList.children.length) briefEmpty.hidden = false;
  document.querySelector('#brief').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
async function copyBrief() {
  const text = `Research Lens sample brief\n\nResearch focus: ${questionPreview.textContent}\n\n${document.querySelector('#summary-text').textContent}\n\nThemes:\n${[...themesList.children].map((item) => `- ${item.textContent}`).join('\n')}\n\nOpen question: ${document.querySelector('#question-text').textContent}`;
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = 'Sample brief copied.';
  } catch {
    copyStatus.textContent = 'Copy is unavailable in this browser; select the text manually.';
  }
}
sources.forEach((source) => source.addEventListener('change', updateCount));
generateButton.addEventListener('click', renderBrief);
copyButton.addEventListener('click', copyBrief);
updateCount();
