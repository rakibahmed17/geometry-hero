function calculatorTiangal() {
                  const baseField = document.getElementById('tiangal-base');  
                  const baseValueText = baseField.value;
                  const base = parseFloat(baseValueText);

                  const hightField = document.getElementById('tiangal-hight');
                  const hightValueText = hightField.value;
                  const hight = parseFloat(hightValueText);
                  const area = 0.5 * base * hight;


                  const areaField = document.getElementById('triangle-area');
                  areaField.innerText = area;



              
}
function inputCalculator() {
                
                  const widthField = document.getElementById('reactiangale-width');
                  const widthValueText = widthField.value;
                  const width = parseFloat(widthValueText);
                  
                  const lengthField = document.getElementById('reactiangale-length');
                  const lengthValueText = lengthField.value;
                  const length = parseFloat(lengthValueText);

                  const area = width * length;
                  const areaFieldr = document.getElementById('reactiangale-area');
                  areaFieldr.innerText = area;

                  

}
function ParallelogramCalculator() {
     const base = inputValueField('p-base');
    const hight = inputValueField('p-hight');
    if (isNaN(base) || isNaN(hight)) {
        alert("this is not number")
    }
    const area = base * hight;
    setTextElement('p-area',area);
            


}
function ellipseCalculator() {
    const ellipsBase = inputValueField('e-base');
    const ellipsHight = inputValueField('e-hight');
    if (isNaN(ellipsBase) || isNaN(ellipsHight)) {
        alert("only number")
    }
        
    const area = 3.14 * ellipsBase * ellipsHight;
    setTextElement('e-area', area);
}


function inputValueField(fieldId) {
              const  inputFieldId = document.getElementById(fieldId);
                  const inputFieldIdValueText = inputFieldId.value;
                  const value= parseFloat(inputFieldIdValueText);
                  return value;

}
function setTextElement(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}


