
//Does this candidate have the right skills
let requiredSkills = ["Javascript", "HTML", "CSS"]
let jonathon = {
    "name":"Jonathon Hinchley",
    "years": 5,
    "skills": ["python", "java", "c++", "haskel", "Javascript","C#","react"]
}
let natasha = {
    "name":"Natasha Riley",
    "years": 1,
    "skills": ["Javascript", "HTML", "CSS"]
}
function candidateHasRequiredSkills (candidate, positionSkills){
    console.log ("evaluate candidate")
    //go thrught the required skills does candidae have all of them?
    for(let index = 0; index < positionSkills.length; index++){
        //if candidate does not have the required skill at this index
        if (!candidate.skills.includes(positionSkills[index])){
            //fail on one missing skill
            return "DON'T HIRE" + " " + candidate.name
        }
    }
    return "HIRE" + " " + candidate.name
}

let hiringResult = candidateHasRequiredSkills (jonathon, requiredSkills)
window.alert (hiringResult)

let hiringResultNatasha = candidateHasRequiredSkills (natasha, requiredSkills)
window.alert (hiringResultNatasha)


