const BMI_CATEGORIES={UNDERWEIGHT:"Kekurangan berat badan",NORMAL:"Normal (ideal)",OVERWEIGHT:"Kelebihan berat badan",OBESITY:"Kegemukan (Obesitas)"},calculateBMI=(e,a)=>(e/(a/100)**2).toFixed(1),validateInput=(e,a,n,t)=>{const i=document.getElementById("genderErrorMessage"),r=document.getElementById("weightErrorMessage"),d=document.getElementById("ageErrorMessage"),E=document.getElementById("heightErrorMessage");document.querySelectorAll(".error-message").forEach((e=>e.innerText=""));let u=!0;return""!==t&&["Pria","Wanita"].includes(t)||(i.innerText="Pilih jenis kelamin terlebih dahulu",u=!1),(isNaN(e)||e<=0)&&(r.innerText="Berat badan harus berupa angka lebih dari 0",u=!1),(isNaN(a)||a<=0)&&(E.innerText="Tinggi badan harus berupa angka lebih dari 0",u=!1),(isNaN(n)||n<=0)&&(d.innerText="Umur harus berupa angka lebih dari 0",u=!1),u},checkStatus=(e,a)=>{let n="";switch(a){case"Pria":e<18.5?n=BMI_CATEGORIES.UNDERWEIGHT:e>=18.5&&e<=24.9?n=BMI_CATEGORIES.NORMAL:e>=25&&e<=29.9?n=BMI_CATEGORIES.OVERWEIGHT:e>=30&&(n=BMI_CATEGORIES.OBESITY);break;case"Wanita":e<17?n=BMI_CATEGORIES.UNDERWEIGHT:e>=17&&e<=23.9?n=BMI_CATEGORIES.NORMAL:e>=23&&e<=27?n=BMI_CATEGORIES.OVERWEIGHT:e>27&&(n=BMI_CATEGORIES.OBESITY)}return n},getDescText=e=>e===BMI_CATEGORIES.UNDERWEIGHT?"Anda memiliki berat badan kurang dari normal.":e===BMI_CATEGORIES.NORMAL?"Anda memiliki berat badan dalam kisaran normal.":e===BMI_CATEGORIES.OVERWEIGHT?"Anda memiliki berat badan berlebih.":e===BMI_CATEGORIES.OBESITY?"Anda memiliki berat badan yang sangat berlebih.":void 0,getSuggestionText=e=>e===BMI_CATEGORIES.UNDERWEIGHT?"Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menambah berat badan hingga batas normal.":e===BMI_CATEGORIES.NORMAL?"Jika BMI Anda berada dalam kategori ini maka Anda memiliki berat badan yang sehat.":e===BMI_CATEGORIES.OVERWEIGHT?"Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.":e===BMI_CATEGORIES.OBESITY?"Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mengurangi berat badan hingga batas normal.":void 0,getAdviceText=e=>e===BMI_CATEGORIES.UNDERWEIGHT?"Perbanyak asupan makanan bergizi dan konsultasikan dengan ahli gizi untuk peningkatan berat badan.":e===BMI_CATEGORIES.NORMAL?"Lanjutkan gaya hidup sehat dengan pola makan seimbang dan olahraga teratur.":e===BMI_CATEGORIES.OVERWEIGHT?"Lakukan penyesuaian pola makan dan rutin berolahraga untuk menurunkan berat badan.":e===BMI_CATEGORIES.OBESITY?"Segera konsultasikan dengan ahli gizi untuk penurunan berat badan yang sehat.":void 0,getDiseases=e=>e===BMI_CATEGORIES.UNDERWEIGHT?["Kekurangan gizi","Gangguan pertumbuhan","Sistem kekebalan tubuh lemah","Gangguan kesuburan"]:e===BMI_CATEGORIES.NORMAL?["Tidak ada"]:e===BMI_CATEGORIES.OVERWEIGHT?["Diabetes Tipe 2","Serangan Jantung","Hipertensi","Gastroesophageal Reflux Disease","Osteoarthritis","Kanker","Kolesterol Tinggi"]:e===BMI_CATEGORIES.OBESITY?["Penyakit Jantung","Stroke","Kanker","Masalah Pencernaan","Sleep Apnea","Osteoartritis"]:void 0,generateDisplay=(e,a)=>{document.getElementById("result-title").innerText=a;document.getElementById("result-bmi").innerText=e;document.getElementById("result-desc").innerText=getDescText(a);document.getElementById("result-text").innerText=`Hasil BMI: ${e}`;document.getElementById("suggestion-text").innerText=getSuggestionText(a);document.getElementById("advice-text").innerText=getAdviceText(a);document.getElementById("risk-title").innerText=`Beberapa resiko penyakit yang berasal dari tubuh ${a}`;const n=document.getElementById("list-risk");n.innerHTML="";getDiseases(a).forEach((e=>{const a=document.createElement("li");a.innerText=e,n.appendChild(a)})),document.getElementById("form").reset(),document.getElementById("result").classList.remove("d-hidden"),document.getElementById("home").classList.add("d-hidden")},checkBMI=()=>{const e=+document.getElementById("weight").value,a=+document.getElementById("height").value,n=document.querySelector('input[name="gender"]:checked').value,t=+document.getElementById("age").value;if(!validateInput(e,a,t,n))return;const i=calculateBMI(e,a),r=checkStatus(i,n);generateDisplay(i,r),document.getElementById("result").scrollIntoView({behavior:"smooth"})},regenerateBMI=()=>{document.getElementById("home").classList.remove("d-hidden"),document.getElementById("result").classList.add("d-hidden"),document.getElementById("form").scrollIntoView({behavior:"smooth"})};
