const make=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};

export function createQuiz(root,onContinue){
const position=make('p','quiz-position'),question=make('h3','quiz-question'),choices=make('div','quiz-choices'),feedback=make('p','quiz-feedback'),next=make('button','quiz-next primary','Voir la réponse en 3D');
next.type='button';feedback.setAttribute('aria-live','polite');root.append(position,question,choices,feedback,next);
const answers=new Map();let current=null;
next.addEventListener('click',()=>{const done=current?.summary;hide();if(!done)onContinue();});
function render(){
const {quiz,key,number,total}=current,answer=answers.get(key);
root.classList.remove('summary');next.textContent='Voir la réponse en 3D';position.textContent='Question '+number+' / '+total+' · mode quiz';question.textContent=quiz.question;choices.replaceChildren();
quiz.choices.forEach((text,i)=>{const b=make('button','quiz-choice');b.type='button';b.append(make('kbd','',String(i+1)),make('span','',text));b.disabled=answer!==undefined;if(answer!==undefined){if(i===quiz.answer)b.classList.add('right');else if(i===answer)b.classList.add('wrong');}b.addEventListener('click',()=>choose(i));choices.append(b);});
feedback.hidden=answer===undefined;next.hidden=answer===undefined;
if(answer!==undefined){feedback.className='quiz-feedback '+(answer===quiz.answer?'right':'wrong');feedback.textContent=(answer===quiz.answer?'Exact. ':'Pas tout à fait. ')+quiz.explain;}
}
function ask(quiz,key,number,total){current={quiz,key,number,total};root.hidden=false;render();(answers.has(key)?next:choices.firstElementChild)?.focus({preventScroll:true});}
function choose(i){if(!current||current.summary||answers.has(current.key)||i<0||i>=current.quiz.choices.length)return;answers.set(current.key,i);render();next.focus({preventScroll:true});}
function hide(){root.hidden=true;current=null;}
function score(entries){let right=0;for(const [key,quiz]of entries)if(answers.get(key)===quiz.answer)right++;return {right,total:entries.length,answered:entries.filter(([key])=>answers.has(key)).length};}
function summary({right,total}){current={summary:true};root.hidden=false;root.classList.add('summary');position.textContent='Fin du parcours · mode quiz';question.textContent='Score : '+right+' / '+total;choices.replaceChildren();feedback.hidden=false;feedback.className='quiz-feedback '+(right===total?'right':'');feedback.textContent=right===total?'Parfait : le trajet, les tags et les contrôles sont maîtrisés.':'Rejouez les étapes manquées : chaque réponse est démontrée dans la maquette.';next.hidden=false;next.textContent='Fermer';next.focus({preventScroll:true});}
return {ask,choose,hide,score,summary,
answered:key=>answers.has(key),
awaiting:()=>!!current&&!current.summary&&!answers.has(current.key),
open:()=>!root.hidden,
proceed:()=>{if(!root.hidden&&!next.hidden)next.click();},
reset:()=>{answers.clear();hide();next.textContent='Voir la réponse en 3D';}};
}
