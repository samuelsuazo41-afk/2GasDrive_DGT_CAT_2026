// GASDRIVE DGT V8.14 CAT - 630 PREGUNTES DGT 2026
const VERSION = "9.8.1";

// COMBO DOPAMINA
const EMOJIS_ENCERT = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎','🎯','💥','🌟','🎉'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫','💩','🤡','💥','😤'];

// INTRO SCREEN - Apareix SEMPRE al obrir
function mostrarIntro(){
  document.body.insertAdjacentHTML('afterbegin', `
    <div id="intro-screen" style="position:fixed;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,#1a1a2e,#16213e);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;padding:20px">
      <div style="font-size:64px;margin-bottom:20px">🚗</div>
      <h1 style="font-size:32px;margin:0 0 10px">GasDrive DGT CAT 2026</h1>
      <p style="font-size:18px;opacity:0.8;margin:0 0 10px">Aprèn el carnet en 15 min al dia</p>
      <p style="font-size:16px;opacity:0.9;margin:0 0 30px">📚 Temaris oficials DGT per estudiar quan vulguis</p>
      <div style="text-align:left;font-size:16px;margin-bottom:40px;line-height:2">
        <div>💰 Guanya coins responent bé</div>
        <div>📚 630 preguntes DGT reals</div>
        <div>📖 Temaris complets per repassar</div>
      </div>
      <button onclick="tancarIntro()" style="background:linear-gradient(135deg,#ff8c00,#ff2d55);border:none;color:#fff;padding:16px 48px;border-radius:12px;font-size:18px;font-weight:bold;cursor:pointer">COMENÇAR</button>
    </div>
  `);
}

function tancarIntro(){
  document.getElementById('intro-screen').remove();
}

// 100 TIPS DEL DIA - DOPAMINA DIÀRIA 
const TIPS = [
  {emoji:'🚗', txt:'Regla dels 2 segons: manté distància amb el cotxe del davant'},
  {emoji:'👀', txt:'Mira 12 segons endavant, no només el cotxe de davant'},
  {emoji:'🌧️', txt:'Pluja: augmenta distància x2 i redueix velocitat'},
  {emoji:'🌙', txt:'De nit redueix velocitat un 10-15%'},
  {emoji:'🚙', txt:'Avança només quan vegis 200m lliures'},
  {emoji:'🛑', txt:'STOP vol dir aturada total, no frenada'},
  {emoji:'⚠️', txt:'Cediu el pas als vianants al pas de zebra'},
  {emoji:'💡', txt:'Fes servir els intermitents 3 segons abans de girar'},
  {emoji:'🛣️', txt:'Velocitat màxima en autovia: 120 km/h'},
  {emoji:'🏙️', txt:'Velocitat màxima en ciutat: 50 km/h'},
  {emoji:'🚸', txt:'Al voltant d’escoles baixa a 30 km/h'},
  {emoji:'🍺', txt:'Alcohol i conducció no són compatibles. 0,0 és segur'},
  {emoji:'😴', txt:'Si tens son, para i descansa. 15 min canvien tot'},
  {emoji:'📱', txt:'No facis servir el mòbil mentre condueixes'},
  {emoji:'🪞', txt:'Regula els miralls abans de sortir'},
  {emoji:'🎒', txt:'Posa el cinturó encara que siguin 2 min'},
  {emoji:'👶', txt:'Nens <135cm han d’anar amb SRI adequat'},
  {emoji:'🐶', txt:'Animals ben subjectes al cotxe'},
  {emoji:'🧳', txt:'Càrrega ben repartida i lligada'},
  {emoji:'🚲', txt:'Deixa 1,5m al avançar ciclistes'},
  {emoji:'🔄', txt:'En rotonda, qui està dins té preferència'},
  {emoji:'🚦', txt:'Groc intermitent = precaució màxima'},
  {emoji:'🚑', txt:'Cedeix pas a vehicles d’emergència amb llums'},
  {emoji:'🌫️', txt:'Boira: llums antiboira + curtes, mai llargues'},
  {emoji:'❄️', txt:'Gel: marxes llargues, frena suau, sense cops de volant'},
  {emoji:'🛞', txt:'Pneumàtic llis = multa + risc aquaplaning'},
  {emoji:'💨', txt:'Distància lateral en avançar bici: 1.5m mínim'},
  {emoji:'🚧', txt:'Línia contínua = no avançar, mai'},
  {emoji:'🅿️', txt:'Aparcar en baixada: rodes girades a la vorera'},
  {emoji:'🔦', txt:'En túnel: engega llums de cruïlla'},
  {emoji:'⚡', txt:'Cotxe elèctric: silenciós, vigila vianants'},
  {emoji:'🔧', txt:'Testimoni oli vermell = atura el motor JA'},
  {emoji:'🌡️', txt:'Motor calent: no obris el tap del refrigerant'},
  {emoji:'⛽', txt:'Reserva = 50km aprox, no juguis amb això'},
  {emoji:'🧠', txt:'Cada fallo t’ensenya. Torna a repassar-ho'},
  {emoji:'🎯', txt:'Llegeix TOTA la pregunta abans de respondre'},
  {emoji:'⏱️', txt:'No tinguis pressa, l’examen no és carrera'},
  {emoji:'📖', txt:'Repeteix els errors fins que no els tornis a fer'},
  {emoji:'🚙', txt:'En costa estreta, puja té preferència'},
  {emoji:'🌉', txt:'A ponts estrets, cedeix si estàs més a prop'},
  {emoji:'🚂', txt:'Pas a nivell: baixa barrera = aturada obligatòria'},
  {emoji:'🚛', txt:'Camió girant: no t’hi fiquis pel costat'},
  {emoji:'🚌', txt:'Bus sortint de parada: facilita-li la sortida'},
  {emoji:'🏍️', txt:'Moto entre carrils: manté distància'},
  {emoji:'🦓', txt:'Pas de vianants elevat: redueix encara més'},
  {emoji:'🌳', txt:'Fulles a terra = asfalt relliscós'},
  {emoji:'💦', txt:'Bassal gran: redueix i aguanta el volant'},
  {emoji:'💨', txt:'Vent lateral: subjecta fort el volant'},
  {emoji:'🚨', txt:'Conductor novell: L al darrere 1 any'},
  {emoji:'👓', txt:'Si uses ulleres, porta-les sempre'},
  {emoji:'🧤', txt:'Guants en moto = menys lesions mans'},
  {emoji:'🪖', txt:'Casco ben abrotxat salva vides'},
  {emoji:'🔊', txt:'Música alta = menys atenció'},
  {emoji:'🍕', txt:'Menja abans de conduir llarg, no durant'},
  {emoji:'💊', txt:'Medicaments amb somnolència = no conduir'},
  {emoji:'🅰️', txt:'Senyal A a darrere si no arribes a 60km/h'},
  {emoji:'🚜', txt:'Tractor: paciència, avançarà quan pugui'},
  {emoji:'🐴', txt:'Animal a via: atura, no toquis el clàxon'},
  {emoji:'🏁', txt:'Final autovia: cedeix al incorporar-te'},
  {emoji:'🅾️', txt:'Zona ORA: mira panell abans d’aparcar'},
  {emoji:'🅿️', txt:'Park & Ride: aparca fora, entra en bus'},
  {emoji:'🅱️', txt:'Carril bus: prohibit excepte taxis/bicis'},
  {emoji:'🚲', txt:'Carril bici: mai aparcar ni circular'},
  {emoji:'🛑', txt:'Ceda el pas = redueix i mira als dos costats'},
  {emoji:'🔀', txt:'Canvi carril: mirall + angle mort + intermitent'},
  {emoji:'🅾️', txt:'Obstrucció: avisa amb triangles si pares'},
  {emoji:'🚗', txt:'Cotxe aturat voral: passa lent i amb precaució'},
  {emoji:'🌉', txt:'Túnel llarg: manté distància i llums encesos'},
  {emoji:'🚧', txt:'Obres: respecta senyals provisionals'},
  {emoji:'🔄', txt:'Canvi sentit: només on està permès'},
  {emoji:'🅿️', txt:'Marxa enrere: només imprescindible i curt'},
  {emoji:'🚙', txt:'Adelantamiento: acaba’l ràpid i segur'},
  {emoji:'⛔', txt:'No entrar: cercle vermell = prohibit passar'},
  {emoji:'🚦', txt:'Semàfor amb fletxa: segueix la fletxa'},
  {emoji:'🛑', txt:'STOP sense línia: para abans de la intersecció'},
  {emoji:'🚸', txt:'Col·legi: 30km/h quan hi ha nens'},
  {emoji:'🌙', txt:'Llums de posició no serveixen de nit'},
  {emoji:'💡', txt:'Llums llargues: apaga a 150m d’un altre'},
  {emoji:'🚨', txt:'Avaria: armilla + triangles a 50m'},
  {emoji:'🧯', txt:'Extintor: revisa data caducitat'},
  {emoji:'🛞', txt:'Recanvi: comprova pressió cada mes'},
  {emoji:'🔋', txt:'Bateria: neteja borns si costa arrencar'},
  {emoji:'💧', txt:'Neteja líquid: mai només aigua'},
  {emoji:'🌡️', txt:'Temperatura alta: para i espera refredar'},
  {emoji:'🛢️', txt:'Oli: nivell entre mín i màx'},
  {emoji:'🚗', txt:'Retrovisors: veure just una mica carroseria'},
  {emoji:'🪑', txt:'Seient: genolls flexionats, braços relaxats'},
  {emoji:'🎒', txt:'Objectes solts = projectils en xoc'},
  {emoji:'👶', txt:'SRI: grup 0 fins 13kg, d’esquena a marxa'},
  {emoji:'🐾', txt:'Gos: arnès o transportí, mai solt'},
  {emoji:'🧳', txt:'Maleter: pes baix i ben subjecte'},
  {emoji:'🚗', txt:'Distància amb camió: més del doble'},
  {emoji:'🌧️', txt:'Aqüaplaning: no frenis, redueix gas'},
  {emoji:'❄️', txt:'Neu: cadenes o pneumàtics M+S'},
  {emoji:'💨', txt:'Ràfega vent: aguanta volant i redueix'},
  {emoji:'🚙', txt:'Frena amb motor en baixada llarga'},
  {emoji:'🅾️', txt:'Zona 30: vianants poden anar per calçada'},
  {emoji:'🚦', txt:'Fletxa verda: tens preferència'},
  {emoji:'🚸', txt:'Policía regulant: obeeix gestos'},
  {emoji:'🚗', txt:'Repassa errors cada dia 10 min'},
  {emoji:'🏆', txt:'Tu pots treure’t el carnet!'}
];

// 470 PREGUNTES TEST DGT OFICIALS CAT 2026
const PREGUNTES = {
  general: [
    {id:1,q:"Quina és la velocitat màxima en zona urbana?",a:["30 km/h","50 km/h","60 km/h"],ok:1},
    {id:2,q:"Què indica una llum groga intermitent?",a:["Aturada total","Precaució","Accelera"],ok:1},
    {id:3,q:"Distància de seguretat en sec:",a:["1 segon","2 segons","3 segons"],ok:1},
    {id:4,q:"Es pot avançar en línia contínua?",a:["Sí","No, mai","Només motos"],ok:1},
    {id:5,q:"Taxa d'alcohol general:",a:["0.5 g/l","0.3 g/l","0.8 g/l"],ok:0},
    {id:6,q:"Prioritat a la rotonda:",a:["El que entra","El que circula dins","El més ràpid"],ok:1},
    {id:7,q:"Llums de cruïlla obligatòries:",a:["Sempre","Nit/túnels","Només pluja"],ok:1},
    {id:8,q:"Mòbil al volant?",a:["Permès mans lliures","Prohibit sempre","Només missatges"],ok:0},
    {id:9,q:"Distància mínima per avançar un ciclista:",a:["1 metre","1.5 metres","2 metres"],ok:1},
    {id:10,q:"Quan usar el clàxon a ciutat?",a:["Saludar","Evitar accident","Mai"],ok:1},
    {id:11,q:"Velocitat en zona 30:",a:["20 km/h","30 km/h","40 km/h"],ok:1},
    {id:12,q:"Intermitent abans de girar:",a:["1 segon","3 segons","5 segons"],ok:1},
    {id:13,q:"Prioritat a pas de vianants:",a:["Mai","Sempre al vianant","Només si hi ha semàfor"],ok:1},
    {id:14,q:"Casco obligatori:",a:["Només moto gran","Moto i ciclista <16","Només ciclista"],ok:1},
    {id:15,q:"Alcohol novells:",a:["0.5 g/l","0.3 g/l","0.0 g/l"],ok:2},
    {id:16,q:"Cinturó obligatori:",a:["Només davant","Només conductor","Tots els ocupants"],ok:2},
    {id:17,q:"Edat mínima carnet B:",a:["16 anys","17 anys","18 anys"],ok:2},
    {id:18,q:"Límit autovia turismes:",a:["100 km/h","120 km/h","130 km/h"],ok:1},
    {id:19,q:"Límit autopista turismes:",a:["100 km/h","120 km/h","140 km/h"],ok:1},
    {id:20,q:"Avançar en pas de vianants:",a:["Sí, amb cura","No, mai","Només bicis"],ok:1},
    {id:21,q:"En costa estreta:",a:["Baixa té preferència","Puja té preferència","El més gran"],ok:1},
    {id:22,q:"Llums en túnel:",a:["Posició","Cruïlla","Llargues"],ok:1},
    {id:23,q:"Senyal groc intermitent:",a:["Aturada","Precaució màxima","Via lliure"],ok:1},
    {id:24,q:"Cedir pas a emergència:",a:["Accelerar","Apartar-se i parar","Tocar clàxon"],ok:1},
    {id:25,q:"Distància aturada a 50 km/h:",a:["14m","28m","40m"],ok:1},
    {id:26,q:"Aqüaplaning: què fas?",a:["Frenes fort","Redueixes gas sense frenar","Accelerees"],ok:1},
    {id:27,q:"Boira: quin llum?",a:["Llargues","Antiboira + curtes","Sense llums"],ok:1},
    {id:28,q:"Gel: com frenar?",a:["Fort","Suau amb marxes llargues","Frena motor"],ok:1},
    {id:29,q:"Bassal gran:",a:["Accelera","Evita i redueix","Frena fort"],ok:1},
    {id:30,q:"Vent lateral:",a:["Subjecta volant ferm","Deixa anar volant","Accelera"],ok:0},
    {id:31,q:"Conductor novell senyal:",a:["L verd","L vermella","N taronja"],ok:1},
    {id:32,q:"Ulleres obligatòries:",a:["Sempre si calen","Només de nit","Mai"],ok:0},
    {id:33,q:"Música alta:",a:["Permesa","Prohibida si tapa sons","Només clàssica"],ok:1},
    {id:34,q:"Menjar conduint:",a:["Permès","Prohibit si distreu","Només xiclet"],ok:1},
    {id:35,q:"Medicaments somnolència:",a:["Es pot conduir","No conduir","Només curt"],ok:1},
    {id:36,q:"Senyal A darrere:",a:["Cotxe ràpid","No arriba a 60km/h","Novell"],ok:1},
    {id:37,q:"Tractor a via:",a:["Avançar ràpid","Paciència i avançar segur","Tocar clàxon"],ok:1},
    {id:38,q:"Animal a via:",a:["Tocar clàxon","Aturar i no espantar","Accelera"],ok:1},
    {id:39,q:"Final autovia:",a:["Accelera","Cedeix al incorporar-te","Tens preferència"],ok:1},
    {id:40,q:"Zona ORA:",a:["Aparca lliure","Mira panell abans","Només residents"],ok:1},
    {id:41,q:"Park & Ride:",a:["Aparca i bus","Només cotxe"],ok:0},
    {id:42,q:"Carril bus:",a:["Prohibit excepte bus/taxi","Obert a tothom","Només bici"],ok:0},
    {id:43,q:"Carril bici:",a:["Es pot aparcar","Mai circular ni aparcar","Només per girar"],ok:1},
    {id:44,q:"Ceda el pas:",a:["Accelera","Redueix i mira als dos costats","Para sempre"],ok:1},
    {id:45,q:"Canvi carril:",a:["Gira volant","Mirall + angle mort + intermitent","Només mirall"],ok:1},
    {id:46,q:"Obstrucció:",a:["Para al mig","Avisa amb triangles a 50m","Toca clàxon"],ok:1},
    {id:47,q:"Cotxe aturat voral:",a:["Accelera","Passa lent amb precaució","Canvia carril"],ok:1},
    {id:48,q:"Túnel llarg:",a:["Apaga llums","Manté distància i llums encesos","Accelera"],ok:1},
    {id:49,q:"Obres:",a:["Segueix senyals velles","Respecta senyals provisionals","Ignora senyals"],ok:1},
    {id:50,q:"Canvi sentit:",a:["On sigui","Només permès","Mai"],ok:1},
    {id:51,q:"Marxa enrere:",a:["Quan vulguis","Només imprescindible i curt","Mai"],ok:1},
    {id:52,q:"Avançament:",a:["Lent i llarg","Ràpid i segur","Amb música alta"],ok:1},
    {id:53,q:"No entrar:",a:["Cercle vermell","Triangle","Quadrat blau"],ok:0},
    {id:54,q:"Semàfor amb fletxa:",a:["Ignora fletxa","Segueix fletxa","Espera verd"],ok:1},
    {id:55,q:"STOP sense línia:",a:["Para al mig","Para abans de intersecció","No pares"],ok:1},
    {id:56,q:"Col·legi:",a:["50km/h","30km/h amb nens","120km/h"],ok:1},
    {id:57,q:"Llums posició de nit:",a:["Serveixen","No serveixen","Només ciutat"],ok:1},
    {id:58,q:"Llums llargues a altre:",a:["Enlluerna","Apaga a 150m","Deixa enceses"],ok:1},
    {id:59,q:"Avaria:",a:["Para al mig","Armilla + triangles a 50m","Toca clàxon"],ok:1},
    {id:60,q:"Extintor:",a:["No cal","Revisa data caducitat","Només camions"],ok:1},
    {id:61,q:"Recanvi:",a:["No cal revisar","Comprova pressió cada mes","Només si punxa"],ok:1},
    {id:62,q:"Bateria:",a:["Neteja borns si costa arrencar","Tira-la","Només taller"],ok:0},
    {id:63,q:"Neteja líquid:",a:["Només aigua","Mai només aigua","Només anticongelant"],ok:1},
    {id:64,q:"Temperatura alta:",a:["Accelera","Para i espera refredar","Obre tap"],ok:1},
    {id:65,q:"Nivell oli:",a:["Per sota mínim","Entre mín i màx","Per sobre màx"],ok:1},
    {id:66,q:"Retrovisors:",a:["Veure molt cotxe","Veure just una mica carroseria","Tancats"],ok:1},
    {id:67,q:"Posició seient:",a:["Cames estirades","Genolls flexionats, braços relaxats","Tirat enrere"],ok:1},
    {id:68,q:"Objectes solts:",a:["Segurs","Projectils en xoc","Només darrere"],ok:1},
    {id:69,q:"SRI grup 0:",a:["Davant marxa","D’esquena a marxa","De costat"],ok:1},
    {id:70,q:"Gos al cotxe:",a:["Solt","Arnès o transportí","Al seient davant"],ok:1},
    {id:71,q:"Maleter:",a:["Pes alt","Pes baix i ben subjecte","Com sigui"],ok:1},
    {id:72,q:"Distància amb camió:",a:["Igual","Més del doble","Menys"],ok:1},
    {id:73,q:"Aqüaplaning:",a:["Frena","No frenis, redueix gas","Accelera"],ok:1},
    {id:74,q:"Neu:",a:["Pneumàtics normals","Cadenes o M+S","Accelera"],ok:1},
    {id:75,q:"Ràfega vent:",a:["Deixa anar volant","Aguanta volant i redueix","Accelera"],ok:1},
    {id:76,q:"Baixada llarga:",a:["Frena sempre","Frena amb motor","Punt mort"],ok:1},
    {id:77,q:"Zona 30:",a:["Només cotxes","Vianants poden anar per calçada","No vianants"],ok:1},
    {id:78,q:"Fletxa verda semàfor:",a:["Espera","Tens preferència","Cedeix"],ok:1},
    {id:79,q:"Policía regulant:",a:["Segueix semàfor","Obeeix gestos policia","Ignora"],ok:1},
    {id:80,q:"Repassar errors:",a:["Mai","Cada dia 10 min","Només abans examen"],ok:1},
    {id:81,q:"En via urbana de doble sentit sense vorera, on camina el vianant?",a:["Per la calçada","Per la vorera esquerra","Per la vorera dreta"],ok:0},
    {id:82,q:"Velocitat màxima en via urbana de plataforma única?",a:["20 km/h","30 km/h","50 km/h"],ok:0},
    {id:83,q:"Distància mínima per obrir porta i baixar del vehicle?",a:["0,5 m","1 m","1,5 m"],ok:1},
    {id:84,q:"En cas d’accident amb ferits, què és prioritat?",a:["Moure els ferits","Avisar 112 i protegir","Apartar vehicles"],ok:1},
    {id:85,q:"Quin pneumàtic s’ha de gastar primer?",a:["Davant esquerre","Darrere dret","Tots igual"],ok:0},
    {id:86,q:"En via interurbana, quin és el límit per ciclomotors?",a:["45 km/h","60 km/h","80 km/h"],ok:0},
    {id:87,q:"Què indica una línia blanca en ziga-zaga al voral?",a:["Aparcament prohibit","Aturada prohibida","Zona de càrrega"],ok:1},
    {id:88,q:"En cas de boira espessa, quina llum està prohibida?",a:["Antiboira davantera","Antiboira posterior","Llums de cruïlla"],ok:2},
    {id:89,q:"Quina és la càrrega màxima que sobresurt per darrere sense senyalitzar?",a:["1 m","2 m","3 m"],ok:0},
    {id:90,q:"En rotonda de dos carrils, per sortir a la segona sortida?",a:["Carril dret","Carril esquerre","Qualsevol"],ok:1},
    {id:91,q:"Què vol dir el senyal V-23 al vehicle?",a:["Conductor novell","Vehicle lent","Transport escolar"],ok:2},
    {id:92,q:"Amb pluja intensa, quin és el risc principal?",a:["Sobreviratge","Aqüaplaning","Subviratge"],ok:1},
    {id:93,q:"En baixar una pendent llarga amb vehicle pesat?",a:["Punt mort","Frenar contínuament","Reduir marxa i frenar motor"],ok:2},
    {id:94,q:"Quina distància de seguretat amb moto en pluja?",a:["Igual","Doble","Triple"],ok:1},
    {id:95,q:"En cas d’incendi al vehicle, primer?",a:["Obrir capó","Tallat contacte i extintor","Trucar assegurança"],ok:1},
    {id:96,q:"Què indica el panell blau amb bicicleta?",a:["Prohibició","Obligació carril bici","Recomanació"],ok:1},
    {id:97,q:"En túnel, quin llum és obligatori?",a:["Posició","Cruïlla","Llargues"],ok:1},
    {id:98,q:"Quina és la velocitat en carrer residencial?",a:["20 km/h","30 km/h","50 km/h"],ok:0},
    {id:99,q:"En avançar tramvia, per on passes?",a:["Per l’esquerra","Per la dreta si hi ha espai","Mai avances"],ok:1},
    {id:100,q:"Què fas si el motor es cala en pujada?",a:["Fre de mà + arrencar","Punt mort + frenar","Accelera fort"],ok:0},
    {id:101,q:"En via amb tres carrils, on circula el vehicle lent?",a:["Carril esquerre","Carril central","Carril dret"],ok:2},
    {id:102,q:"Què indica el senyal de fi de població?",a:["Inici límit 50","Fi límit 50","Inici autovia"],ok:1},
    {id:103,q:"Amb vent fort lateral en pont, què fas?",a:["Accelera","Subjecta ferm el volant","Canvia carril"],ok:1},
    {id:104,q:"En cas de vessament d’oli a la calçada?",a:["Accelera per passar ràpid","Avisa i circula amb precaució","Frena fort"],ok:1}
  ],
 
 senyals: [
  // ===== 1. PERILL P-1 A P-30 - 30 SEÑALES =====
  { id: "P-1a", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Intersecció amb prioritat a la dreta", "Cedeix el pas", "Stop"], correcta: 0, codi: "P-1a", tip: "💡 CLAU: Els triangles avisen de perill. Si està buit vol dir que TU tens prioritat. Però redueix igual.", audio: "Senyal de perill. Intersecció amb prioritat a la dreta.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-1a.png" },
  { id: "P-1b", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Intersecció amb prioritat a l'esquerra", "Cedeix el pas", "Stop"], correcta: 0, codi: "P-1b", tip: "💡 CLAU: Igual que la de la dreta. Triangle = alerta. Tu passes primer sobre els que venen de l'esquerra.", audio: "Senyal de perill. Intersecció amb prioritat a l'esquerra.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-1b.png" },
  { id: "P-1c", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Incorporació per la dreta", "Cedeix el pas", "Desviament"], correcta: 0, codi: "P-1c", tip: "💡 CLAU: Vigila el retrovisor dret. S'hi incorporaran cotxes que han de cedir-te el pas a tu.", audio: "Senyal de perill. Incorporació per la dreta.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-1c.png" },
  { id: "P-1d", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Incorporació per l'esquerra", "Cedeix el pas", "Desviament"], correcta: 0, codi: "P-1d", tip: "💡 CLAU: Atenció a l'esquerra. S'incorporen vehicles a la teva via. Tu tens prioritat.", audio: "Senyal de perill. Incorporació per l'esquerra.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-1d.png" },
  { id: "P-1e", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Tram amb molts accessos", "Sortides", "Perill"], correcta: 0, codi: "P-1e", tip: "💡 CLAU: Vigila. Hi ha molts carrers i garatges. Poden sortir cotxes de cop sense avisar.", audio: "Senyal de perill. Tram amb accessos.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-1e.png" },
  { id: "P-2", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Intersecció sense prioritat. Regla de la dreta", "Glorieta", "Cedeix el pas"], correcta: 0, codi: "P-2", tip: "💡 CLAU: Aquí ningú mana. S'aplica la regla d'or: passa primer qui ve per la DRETA. Redueix molt.", audio: "Senyal de perill. Intersecció sense prioritat.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-2.png" },
  { id: "P-3", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Intersecció amb semàfors", "Semàfors avariats", "Zona escolar"], correcta: 0, codi: "P-3", tip: "💡 CLAU: Atenció. Els semàfors regulen la intersecció. Estigues preparat per parar en groc i vermell.", audio: "Senyal de perill. Intersecció amb semàfors.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-3.png" },
  { id: "P-4", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Glorieta", "Rotonda", "Intersecció"], correcta: 0, codi: "P-4", tip: "💡 CLAU: Glorieta propera. Recordeu: qui està DINS de la rotonda té prioritat. Tu cedeixes en entrar.", audio: "Senyal de perill. Glorieta.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-4.png" },
  { id: "P-5", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Pont mòbil", "Pont", "Túnel"], correcta: 0, codi: "P-5", tip: "💡 CLAU: Aquest pont es pot aixecar per deixar passar vaixells. Si veus llums vermelles, para obligatori.", audio: "Senyal de perill. Pont mòbil.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-5.png" },
  { id: "P-6", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Creuament amb línia de tramvia", "Tren", "Perill ferroviari"], correcta: 0, codi: "P-6", tip: "💡 CLAU: El tramvia sempre té prioritat sobre tu. És llarg i no pot frenar de cop. Cedeix.", audio: "Senyal de perill. Creuament amb línia de tramvia.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-6.png" },
  { id: "P-7", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Pas a nivell amb barreres", "Pas a nivell sense barreres", "Tren"], correcta: 0, codi: "P-7", tip: "💡 CLAU: Hi ha barreres. Si piten o baixen, parar és OBLIGATORI. Un tren triga 1km a frenar.", audio: "Senyal de perill. Pas a nivell amb barreres.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-7.png" },
  { id: "P-8", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Pas a nivell sense barreres", "Pas a nivell amb barreres", "Tren"], correcta: 0, codi: "P-8", tip: "💡 CLAU: EL MÉS PERILLÓS. No hi ha barreres. Para, mira a banda i banda i escolta abans de creuar.", audio: "Senyal de perill. Pas a nivell sense barreres.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-8.png" },
  { id: "P-9a", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Aproximació a pas a nivell a 200 metres", "Tren", "Perill"], correcta: 0, codi: "P-9a", tip: "💡 CLAU: Queden 200m per al pas a nivell. Les 3 ratlles = lluny. 1 ratlla = ja està aquí.", audio: "Senyal de perill. Aproximació a pas a nivell a 200 metres.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-9a.png" },
  { id: "P-9b", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Aproximació a pas a nivell a 100 metres", "Tren", "Perill"], correcta: 0, codi: "P-9b", tip: "💡 CLAU: Queden 100m. Ja has de començar a reduir velocitat i estar molt atent.", audio: "Senyal de perill. Aproximació a pas a nivell a 100 metres.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-9b.png" },
  { id: "P-9c", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Aproximació a pas a nivell a 50 metres", "Tren", "Perill"], correcta: 0, codi: "P-9c", tip: "💡 CLAU: Queden 50m. Ja quasi està. Para el cotxe i mira bé a banda i banda.", audio: "Senyal de perill. Aproximació a pas a nivell a 50 metres.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-9c.png" },
  { id: "P-10", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Pas de vianants", "Zona escolar", "Prohibit vianants"], correcta: 0, codi: "P-10", tip: "💡 CLAU: Zona de zebra. Els vianants tenen prioritat. Aixeca el peu del accelerador i mira.", audio: "Senyal de perill. Pas de vianants.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-10.png" },
  { id: "P-11", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Pas de ciclistes", "Carril bici", "Prohibit bicis"], correcta: 0, codi: "P-11", tip: "💡 CLAU: Poden creuar bicis. Han de cedir-te el pas, però si van ràpid no els veuràs. Mira.", audio: "Senyal de perill. Pas de ciclistes.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-11.png" },
  { id: "P-12", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Pas d'animals domèstics", "Zona ramadera", "Prohibit animals"], correcta: 0, codi: "P-12", tip: "💡 CLAU: Poden creuar vaques, cavalls, ovelles. Anar molt lent i fer soroll per avisar.", audio: "Senyal de perill. Pas d'animals domèstics.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-12.png" },
  { id: "P-13a", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Pas d'animals salvatges", "Zona ramadera", "Parc natural"], correcta: 0, codi: "P-13a", tip: "💡 CLAU: Zona de senglars i cérvols. Sobre tot de nit. Poden sortir de cop. Frena amb antelació.", audio: "Senyal de perill. Pas d'animals salvatges.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-13a.png" },
  { id: "P-14a", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Caiguda de pedres", "Despreniments", "Obres"], correcta: 0, codi: "P-14a", tip: "💡 CLAU: Zona de muntanya. Poden caure pedres. No t'aturis sota el penya-segat i passa ràpid.", audio: "Senyal de perill. Caiguda de pedres.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-14a.png" },
  { id: "P-15", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Calçada amb vorals perillosos", "Estretament", "Desnivell"], correcta: 0, codi: "P-15", tip: "💡 CLAU: El voral és tou o hi ha desnivell. Si hi poses una roda pots perdre el control. Ves centrat.", audio: "Senyal de perill. Calçada amb vorals perillosos.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-15.png" },
  { id: "P-16", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Circulació en els dos sentits", "Doble sentit", "Fi sentit únic"], correcta: 0, codi: "P-16", tip: "💡 CLAU: Fins ara només venien cotxes de cara. Ara ja poden venir dels dos sentits. Canvia el xip.", audio: "Senyal de perill. Fi de via d'un sol sentit.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-16.png" },
  { id: "P-17a", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Sortida de ciclistes", "Carril bici", "Prohibit bicis"], correcta: 0, codi: "P-17a", tip: "💡 CLAU: De sobte poden sortir bicis d'un carril bici o camí. Aixeca el peu i mira als laterals.", audio: "Senyal de perill. Sortida de ciclistes.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-17a.png" },
  { id: "P-18", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Sortida de camions", "Zona industrial", "Prohibit camions"], correcta: 0, codi: "P-18", tip: "💡 CLAU: Zona de fàbriques o polígon. Poden sortir camions grans i lents. No els tancis.", audio: "Senyal de perill. Sortida de camions.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-18.png" },
  { id: "P-19", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Sortida de vehicles", "Garage", "Prohibit circular"], correcta: 0, codi: "P-19", tip: "💡 CLAU: Sortida de garatge, pàrquing o gasolinera. Poden sortir sense veure't. Mira bé.", audio: "Senyal de perill. Sortida de vehicles.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-19.png" },
  { id: "P-20", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Nens", "Zona escolar", "Pas de vianants"], correcta: 0, codi: "P-20", tip: "💡 CLAU: Zona escolar, parc o col·legi. Els nens són imprevisibles. Baixa a 30 i màxima atenció.", audio: "Senyal de perill. Proximitat a lloc freqüentat per nens.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-20.png" },
  { id: "P-21", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Calçada lliscant", "Pluja", "Gel"], correcta: 0, codi: "P-21", tip: "💡 CLAU: L'asfalt rellisca amb pluja o gel. No frenis de cop ni acceleris brusc. Suau.", audio: "Senyal de perill. Paviment lliscant.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-21.png" },
  { id: "P-22", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Projecció de graveta", "Caiguda de pedres", "Obres"], correcta: 0, codi: "P-22", tip: "💡 CLAU: Els cotxes de davant poden llançar pedres. Allunya't i no segueixis camions de prop.", audio: "Senyal de perill. Projecció de gravetes.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-22.png" },
  { id: "P-23", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Vent transversal", "Ràfegues de vent", "Tempesta"], correcta: 0, codi: "P-23", tip: "💡 CLAU: Ràfegues de vent lateral. Agafa fort el volant. És molt perillós per motos i camions alts.", audio: "Senyal de perill. Vent transversal.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-23.png" },
  { id: "P-24", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Avions", "Aeroport", "Baixada d'avions"], correcta: 0, codi: "P-24", tip: "💡 CLAU: Zona d'aterratge. Podràs sentir molt soroll i notar vent quan baixi un avió.", audio: "Senyal de perill. Proximitat a aeroport.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-24.png" },
  { id: "P-25", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Túnel", "Pas inferior", "Il·luminació"], correcta: 0, codi: "P-25", tip: "💡 CLAU: Encén els llums de curt abans d'entrar. Dins prohibit canviar de carril i parar.", audio: "Senyal de perill. Túnel.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-25.png" },
  { id: "P-26", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Altres perills", "Perill genèric", "Obres"], correcta: 0, codi: "P-26", tip: "💡 CLAU: El signe d'exclamació vol dir 'alerta'. Hi ha un perill que no està a les altres senyals.", audio: "Senyal de perill. Altres perills.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-26.png" },
  { id: "P-27", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Accident", "Perill", "Obres"], correcta: 0, codi: "P-27", tip: "💡 CLAU: Accident a prop. Redueix, no miris i deixa pas a emergències. Pot haver embús.", audio: "Senyal de perill. Accident.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-27.png" },
  { id: "P-28", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Embús", "Retenció", "Perill"], correcta: 0, codi: "P-28", tip: "💡 CLAU: Cua de cotxes aturats més endavant. Aixeca el peu i para de frenar de cop.", audio: "Senyal de perill. Embús.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-28.png" },
  { id: "P-29", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Dos sentits de circulació", "Canvi de sentit", "Desdoblament"], correcta: 0, codi: "P-29", tip: "💡 CLAU: La carretera passa de tenir un sol sentit a tenir dos. Atenció als que venen de cara.", audio: "Senyal de perill. Dos sentits de circulació.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-29.png" },
  { id: "P-30", categoria: "perill", pregunta: "Què indica aquesta senyal de PERILL?", opcions: ["Cua", "Embús", "Retenció"], correcta: 0, codi: "P-30", tip: "💡 CLAU: Igual que P-28. T'avisa que hi ha retenció més endavant. Ves reduint poc a poc.", audio: "Senyal de perill. Cua.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-30.png" },

  // ===== 2. REGLAMENTACIÓ R-1 A R-505 - 90 SEÑALES =====
// ===== 2. REGLAMENTACIÓ R-1 A R-505 - 96 SEÑALES =====
  { id: "R-1", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Cedeix el pas", "Stop", "Prioritat"], correcta: 0, codi: "R-1", tip: "💡 CLAU: Triangle invertit = has de cedir. No cal parar si no ve ningú, però sí reduir i mirar.", audio: "Senyal de reglamentació. Cedeix el pas.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-1.png" },
  { id: "R-2", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Stop", "Cedeix el pas", "Prohibit"], correcta: 0, codi: "R-2", tip: "💡 CLAU: És l'única senyal amb forma d'octògon. Obligatori parar TOTAL 3 segons. És la més estricta.", audio: "Senyal de reglamentació. Stop.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-2.png" },
  { id: "R-3", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit circular", "Prohibit avançar", "Prohibit parar"], correcta: 0, codi: "R-3", tip: "💡 CLAU: Cercle vermell = PROHIBICIÓ. La barra vol dir 'tot'. No pot entrar ningú.", audio: "Senyal de reglamentació. Prohibit circular.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-3.png" },
  { id: "R-4", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit girar a la dreta", "Gir obligatori", "Direcció única"], correcta: 0, codi: "R-4", tip: "💡 CLAU: Cercle vermell + fletxa + barra = PROHIBIT. No pots girar cap a la dreta aquí.", audio: "Senyal de reglamentació. Prohibit girar a la dreta.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-4.png" },
  { id: "R-5", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit girar a l'esquerra", "Gir obligatori", "Direcció única"], correcta: 0, codi: "R-5", tip: "💡 CLAU: Igual que la de la dreta. Vermell = NO. No pots girar a l'esquerra en aquest punt.", audio: "Senyal de reglamentació. Prohibit girar a l'esquerra.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-5.png" },
  { id: "R-6", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit fer mitja volta", "Canvi de sentit obligatori", "Rotonda"], correcta: 0, codi: "R-6", tip: "💡 CLAU: Prohibit girar en U. És per evitar accidents en vies ràpides. Busca una altra sortida.", audio: "Senyal de reglamentació. Prohibit fer mitja volta.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-6.png" },
  { id: "R-7", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit vehicles de mercaderies", "Prohibit camions", "Pes màxim"], correcta: 0, codi: "R-7", tip: "💡 CLAU: Només afecta a camions. Els turismes i furgonetes petites sí que poden passar.", audio: "Senyal de reglamentació. Prohibit vehicles de mercaderies.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-7.png" },
  { id: "R-8", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit vehicles de motor", "Prohibit circular", "Prohibit"], correcta: 0, codi: "R-8", tip: "💡 CLAU: Només poden passar bicis i vianants. Cotxes i motos prohibit. Zona peatonal.", audio: "Senyal de reglamentació. Prohibit vehicles de motor.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-8.png" },
  { id: "R-9", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit motocicletes", "Prohibit motos", "Prohibit"], correcta: 0, codi: "R-9", tip: "💡 CLAU: Prohibit motos grans. Els ciclomotors de 49cc sí que poden passar.", audio: "Senyal de reglamentació. Prohibit motocicletes.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-9.png" },
  { id: "R-10", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit ciclomotors", "Prohibit motos", "Prohibit bicis"], correcta: 0, codi: "R-10", tip: "💡 CLAU: Prohibit ciclomotors de fins 49cc. Les motos grans sí que poden passar.", audio: "Senyal de reglamentació. Prohibit ciclomotors.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-10.png" },
  { id: "R-11", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit bicicletes", "Carril bici", "Pas ciclistes"], correcta: 0, codi: "R-11", tip: "💡 CLAU: Prohibit bicis. Si vas en bici has de baixar i anar com a vianant.", audio: "Senyal de reglamentació. Prohibit bicicletes.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-11.png" },
  { id: "R-12", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit vianants", "Pas de vianants", "Zona peatonal"], correcta: 0, codi: "R-12", tip: "💡 CLAU: Típic d'autopistes i autovies. És molt perillós anar a peu. Prohibit.", audio: "Senyal de reglamentació. Prohibit vianants.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-12.png" },
  { id: "R-13", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit animals", "Pas animals", "Zona ramadera"], correcta: 0, codi: "R-13", tip: "💡 CLAU: Prohibit el pas de cavalls, vaques, etc. És per seguretat. Poden espantar els cotxes.", audio: "Senyal de reglamentació. Prohibit animals.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-13.png" },
  { id: "R-14", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Limitació d'amplada", "Amplada màxima", "Prohibit ample"], correcta: 0, codi: "R-14", tip: "💡 CLAU: Número + metres = amplada màxima. Si el teu cotxe és més ample, no pots passar.", audio: "Senyal de reglamentació. Limitació d'amplada.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-14.png" },
  { id: "R-15", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit vehicles amb mercaderies perilloses", "Zona tòxica", "Prohibit circular"], correcta: 0, codi: "R-15", tip: "💡 CLAU: Prohibit per camions amb bidons tòxics, gas o explosius. Per seguretat del túnel.", audio: "Senyal de reglamentació. Prohibit vehicles amb mercaderies perilloses.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-15.png" },
  { id: "R-16", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Limitació de pes", "Pes màxim", "Prohibit pesants"], correcta: 0, codi: "R-16", tip: "💡 CLAU: Número + T = tones. Si el teu cotxe pesa més, no pots passar. És per ponts febles.", audio: "Senyal de reglamentació. Limitació de pes.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-16.png" },
  { id: "R-17", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Limitació de pes per eix", "Pes màxim", "Prohibit pesants"], correcta: 0, codi: "R-17", tip: "💡 CLAU: És el pes màxim que pot suportar cada eix del vehicle. Importants per camions.", audio: "Senyal de reglamentació. Limitació de pes per eix.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-17.png" },
  { id: "R-18", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Limitació de longitud", "Llargada màxima", "Prohibit llarg"], correcta: 0, codi: "R-18", tip: "💡 CLAU: Número + metres = longitud màxima. Per camions amb remolc molt llargs.", audio: "Senyal de reglamentació. Limitació de longitud.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-18.png" },
  { id: "R-19", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Limitació d'alçada", "Alçada màxima", "Prohibit alt"], correcta: 0, codi: "R-19", tip: "💡 CLAU: Número + metres = alçada màxima. Important per camions i autocaravanes en túnels.", audio: "Senyal de reglamentació. Limitació d'alçada.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-19.png" },
  { id: "R-20", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit avançar", "Avançament prohibit", "No avançar"], correcta: 0, codi: "R-20", tip: "💡 CLAU: Cercle vermell + 2 cotxes = no pots avançar a ningú. Fins que no vegis la de fi.", audio: "Senyal de reglamentació. Prohibit avançar.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-20.png" },
  { id: "R-21", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit avançar a camions", "Només camions no avançar", "Prohibit camions"], correcta: 0, codi: "R-21", tip: "💡 CLAU: Només afecta als camions. Els turismes sí que poden avançar.", audio: "Senyal de reglamentació. Prohibit avançar a camions.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-21.png" },
  { id: "R-22", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Velocitat màxima", "Límit velocitat", "No passar de"], correcta: 0, codi: "R-22", tip: "💡 CLAU: Número dins cercle vermell = OBLIGATORI. Si posa 50, màxim 50. Multa si passes.", audio: "Senyal de reglamentació. Velocitat màxima.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-22.png" },
  { id: "R-23", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit ús senyal acústica", "No pitar", "Silenci"], correcta: 0, codi: "R-23", tip: "💡 CLAU: Prohibit tocar el clàxon. Excepte per evitar un accident.", audio: "Senyal de reglamentació. Prohibit ús senyal acústica.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-23.png" },
  { id: "R-24", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prioritat en estretament", "Jo tinc prioritat", "Cedeix el pas"], correcta: 0, codi: "R-24", tip: "💡 CLAU: Tu tens prioritat en l'estretament. Els de cara han d'esperar. És la contrària a la R-25.", audio: "Senyal de reglamentació. Prioritat en estretament.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-24.png" },
  { id: "R-25", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Cedeix el pas en estretament", "Ell té prioritat", "Stop"], correcta: 0, codi: "R-25", tip: "💡 CLAU: Tu has de cedir en l'estretament. Para si ve un cotxe de cara.", audio: "Senyal de reglamentació. Cedeix el pas en estretament.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-25.png" },
  { id: "R-26", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Gir obligatori a la dreta", "Només dreta", "Direcció obligatòria"], correcta: 0, codi: "R-26", tip: "💡 CLAU: Fons blau = OBLIGACIÓ. Només pots girar a la dreta. Prohibit recte i esquerra.", audio: "Senyal de reglamentació. Gir obligatori a la dreta.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-26.png" },
  { id: "R-27", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit girar a la dreta a camions", "Només turismes dreta", "Prohibit girar"], correcta: 0, codi: "R-27", tip: "💡 CLAU: Prohibit girar a la dreta per camions. Els turismes sí que poden.", audio: "Senyal de reglamentació. Prohibit girar a la dreta camions.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-27.png" },
  { id: "R-28", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit girar a l'esquerra a camions", "Només turismes esquerra", "Prohibit girar"], correcta: 0, codi: "R-28", tip: "💡 CLAU: Prohibit girar a l'esquerra per camions. Els turismes sí que poden.", audio: "Senyal de reglamentació. Prohibit girar a l'esquerra camions.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-28.png" },
  { id: "R-29", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit fer mitja volta a camions", "Només turismes U", "Prohibit girar"], correcta: 0, codi: "R-29", tip: "💡 CLAU: Prohibit fer mitja volta per camions. Per evitar que bloquegin la via.", audio: "Senyal de reglamentació. Prohibit fer mitja volta camions.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-29.png" },
  { id: "R-30", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Gir obligatori a l'esquerra", "Només esquerra", "Direcció obligatòria"], correcta: 0, codi: "R-30", tip: "💡 CLAU: Fons blau = OBLIGACIÓ. Només pots girar a l'esquerra. Prohibit recte i dreta.", audio: "Senyal de reglamentació. Gir obligatori a l'esquerra.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-30.png" },
  { id: "R-31", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Continuar recte", "Només recte", "Direcció obligatòria"], correcta: 0, codi: "R-31", tip: "💡 CLAU: Fons blau = OBLIGACIÓ. Només pots seguir recte. Prohibit girar.", audio: "Senyal de reglamentació. Continuar recte.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-31.png" },
  { id: "R-32", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Gir obligatori a la dreta o recte", "Dreta o recte", "2 opcions"], correcta: 0, codi: "R-32", tip: "💡 CLAU: Pots anar recte o girar a la dreta. Prohibit esquerra.", audio: "Senyal de reglamentació. Gir obligatori a la dreta o recte.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-32.png" },
  { id: "R-33", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Gir obligatori a l'esquerra o recte", "Esquerra o recte", "2 opcions"], correcta: 0, codi: "R-33", tip: "💡 CLAU: Pots anar recte o girar a l'esquerra. Prohibit dreta.", audio: "Senyal de reglamentació. Gir obligatori a l'esquerra o recte.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-33.png" },
  { id: "R-34", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Gir obligatori a la dreta o esquerra", "Només girar", "2 opcions"], correcta: 0, codi: "R-34", tip: "💡 CLAU: Prohibit seguir recte. Només pots girar a dreta o esquerra.", audio: "Senyal de reglamentació. Gir obligatori a la dreta o esquerra.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-34.png" },
  { id: "R-35", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Rotonda obligatòria", "Circular", "Glorieta"], correcta: 0, codi: "R-35", tip: "💡 CLAU: Fons blau = OBLIGACIÓ. Has d'entrar a la rotonda i circular en el sentit de les fletxes.", audio: "Senyal de reglamentació. Rotonda obligatòria.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-35.png" },
  { id: "R-36", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Pas obligatori per la dreta", "Per la dreta", "Desviament"], correcta: 0, codi: "R-36", tip: "💡 CLAU: Obstacle. Has de passar obligatoriament pel costat dret.", audio: "Senyal de reglamentació. Pas obligatori per la dreta.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-36.png" },
  { id: "R-37", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Pas obligatori per l'esquerra", "Per l'esquerra", "Desviament"], correcta: 0, codi: "R-37", tip: "💡 CLAU: Obstacle. Has de passar obligatoriament pel costat esquerre.", audio: "Senyal de reglamentació. Pas obligatori per l'esquerra.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-37.png" },
  { id: "R-38", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Pas obligatori per la dreta o esquerra", "Per qualsevol costat", "Desviament"], correcta: 0, codi: "R-38", tip: "💡 CLAU: Obstacle. Pots passar per dreta o esquerra. Tu decideixes.", audio: "Senyal de reglamentació. Pas obligatori per la dreta o esquerra.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-38.png" },
  { id: "R-39", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Cadenes obligatòries", "Neu", "Hivern"], correcta: 0, codi: "R-39", tip: "💡 CLAU: Fons blau = OBLIGACIÓ. Si hi ha neu/gel has de posar cadenes o pneumàtics d'hivern.", audio: "Senyal de reglamentació. Cadenes obligatòries.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-39.png" },
  { id: "R-40", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Velocitat mínima", "Mínim", "No anar més lent"], correcta: 0, codi: "R-40", tip: "💡 CLAU: Número blau = MÍNIM. No pots anar per sota. Ex: si posa 60, mínim 60.", audio: "Senyal de reglamentació. Velocitat mínima.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-40.png" },
  { id: "R-41", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Fi velocitat mínima", "Fi mínim", "Fi"], correcta: 0, codi: "R-41", tip: "💡 CLAU: S'acaba l'obligació d'anar a velocitat mínima.", audio: "Senyal de reglamentació. Fi velocitat mínima.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-41.png" },
  { id: "R-42", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Fi prohibit avançar", "Ja pots avançar", "Fi"], correcta: 0, codi: "R-42", tip: "💡 CLAU: S'acaba la prohibició d'avançar. Ja pots avançar amb precaució.", audio: "Senyal de reglamentació. Fi prohibit avançar.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-42.png" },
  { id: "R-43", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Fi prohibit avançar a camions", "Ja poden avançar camions", "Fi"], correcta: 0, codi: "R-43", tip: "💡 CLAU: S'acaba la prohibició d'avançar només per camions.", audio: "Senyal de reglamentació. Fi prohibit avançar a camions.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-43.png" },
  { id: "R-44", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Fi velocitat màxima", "Fi límit", "Fi"], correcta: 0, codi: "R-44", tip: "💡 CLAU: S'acaba el límit de velocitat específic. Torna el límit genèric de la via.", audio: "Senyal de reglamentació. Fi velocitat màxima.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-44.png" },
  { id: "R-45", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Fi prohibit ús senyal acústica", "Ja pots pitar", "Fi"], correcta: 0, codi: "R-45", tip: "💡 CLAU: S'acaba la prohibició de tocar el clàxon.", audio: "Senyal de reglamentació. Fi prohibit ús senyal acústica.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-45.png" },
  { id: "R-46", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Fi cadenes obligatòries", "Fi neu", "Fi"], correcta: 0, codi: "R-46", tip: "💡 CLAU: Ja no és obligatori portar cadenes. S'ha acabat la zona de neu.", audio: "Senyal de reglamentació. Fi cadenes obligatòries.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-46.png" },
  { id: "R-47", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Parada taxis", "Taxi", "Transport"], correcta: 0, codi: "R-47", tip: "💡 CLAU: Només poden parar taxis. Prohibit per altres vehicles.", audio: "Senyal de reglamentació. Parada taxis.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-47.png" },
  { id: "R-48", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Parada bus", "Bus", "Transport públic"], correcta: 0, codi: "R-48", tip: "💡 CLAU: Només poden parar autobusos.", audio: "Senyal de reglamentació. Parada bus.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-48.png" },
  { id: "R-49", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit parar i estacionar", "Prohibit parar", "Prohibit"], correcta: 0, codi: "R-49", tip: "💡 CLAU: 2 barres vermelles = ni parar ni estacionar. Ni 1 segon.", audio: "Senyal de reglamentació. Prohibit parar i estacionar.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-49.png" },
  { id: "R-50", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit estacionar", "No aparcar", "Prohibit"], correcta: 0, codi: "R-50", tip: "💡 CLAU: 1 barra vermella = pots parar per pujar/baixar, però no aparcar.", audio: "Senyal de reglamentació. Prohibit estacionar.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-50.png" },
  { id: "R-51", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit girar a la dreta", "Gir prohibit", "No girar"], correcta: 0, codi: "R-51", tip: "💡 CLAU: Igual que R-4. Prohibit girar a la dreta.", audio: "Senyal de reglamentació. Prohibit girar a la dreta.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-51.png" },
  { id: "R-52", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit girar a l'esquerra", "Gir prohibit", "No girar"], correcta: 0, codi: "R-52", tip: "💡 CLAU: Igual que R-5. Prohibit girar a l'esquerra.", audio: "Senyal de reglamentació. Prohibit girar a l'esquerra.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-52.png" },
  { id: "R-53", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit fer mitja volta", "U prohibit", "No girar"], correcta: 0, codi: "R-53", tip: "💡 CLAU: Igual que R-6. Prohibit girar en U.", audio: "Senyal de reglamentació. Prohibit fer mitja volta.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-53.png" },
  { id: "R-54", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit circular camions", "Camions no", "Prohibit pesants"], correcta: 0, codi: "R-54", tip: "💡 CLAU: Prohibit circulació de vehicles de mercaderies.", audio: "Senyal de reglamentació. Prohibit circular camions.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-54.png" },
  { id: "R-55", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit circular vehicles motor", "Només bicis", "Zona peatonal"], correcta: 0, codi: "R-55", tip: "💡 CLAU: Igual que R-8. Només bicis i vianants.", audio: "Senyal de reglamentació. Prohibit circular vehicles motor.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-55.png" },
  { id: "R-56", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit circular motocicletes", "Motos no", "Prohibit"], correcta: 0, codi: "R-56", tip: "💡 CLAU: Igual que R-9. Prohibit motos.", audio: "Senyal de reglamentació. Prohibit circular motocicletes.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-56.png" },
  { id: "R-57", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Prohibit circular ciclomotors", "Ciclomotors no", "Prohibit"], correcta: 0, codi: "R-57", tip: "💡 CLAU: Igual que R-10. Prohibit ciclomotors de fins 49cc. Les motos grans sí que poden passar.", audio: "Senyal de reglamentació. Prohibit circular ciclomotors.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-57.png" },
{ id: "R-410", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Carril bici", "Bicis obligatori", "Ciclistes"], correcta: 0, codi: "R-410", tip: "💡 CLAU: NOVA 2024. Carril exclusiu per bicicletes. Prohibit circular amb cotxe o moto per aquí. Multa.", audio: "Senyal de reglamentació. Carril bici.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-410.png" },
  { id: "R-411", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Carril per a vehicles amb ocupació alta", "VAO", "Carril bus"], correcta: 0, codi: "R-411", tip: "💡 CLAU: NOVA 2024. VAO. Només cotxes amb 2 o més persones. Bus i moto també poden. És per reduir trànsit.", audio: "Senyal de reglamentació. Carril VAO.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-411.png" },
  { id: "R-412", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Zona de baixes emissions", "ZBE", "Prohibit contaminar"], correcta: 0, codi: "R-412", tip: "💡 CLAU: NOVA 2024. ZBE. Només poden entrar vehicles amb etiqueta ambiental. Sense etiqueta = multa de 200€.", audio: "Senyal de reglamentació. Zona de baixes emissions.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-412.png" },
{ id: "R-500", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Fi de prohibicions", "Fi zona", "Fi restriccions"], correcta: 0, codi: "R-500", tip: "💡 CLAU: Anul·la totes les prohibicions anteriors. Fi de prohibit avançar, fi de 50, etc. Torna norma genèrica.", audio: "Senyal de reglamentació. Fi de prohibicions.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-500.png" },
  { id: "R-501", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Fi de zona 30", "Fi limitació", "Fi zona"], correcta: 0, codi: "R-501", tip: "💡 CLAU: S'acaba la zona 30. Torna el límit genèric de 50 km/h en població.", audio: "Senyal de reglamentació. Fi de zona 30.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-501.png" },
  { id: "R-502", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Fi de zona residencial", "Fi zona 20", "Fi zona"], correcta: 0, codi: "R-502", tip: "💡 CLAU: S'acaba la zona residencial. Els vianants ja no tenen prioritat total sobre els cotxes.", audio: "Senyal de reglamentació. Fi de zona residencial.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-502.png" },
  { id: "R-503", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Fi de zona escolar", "Fi zona nens", "Fi zona"], correcta: 0, codi: "R-503", tip: "💡 CLAU: S'acaba la zona escolar. Ja pots tornar a la velocitat normal amb precaució.", audio: "Senyal de reglamentació. Fi de zona escolar.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-503.png" },
  { id: "R-504", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Fi de zona de velocitat limitada", "Fi 20", "Fi zona"], correcta: 0, codi: "R-504", tip: "💡 CLAU: S'acaba la zona de velocitat limitada a 20 km/h. Zona de vianants.", audio: "Senyal de reglamentació. Fi de zona de velocitat limitada.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-504.png" },
  { id: "R-505", categoria: "reglamentacio", pregunta: "Què indica aquesta senyal de REGLAMENTACIÓ?", opcions: ["Fi de zona de prioritat residencial", "Fi zona", "Fi prioritat"], correcta: 0, codi: "R-505", tip: "💡 CLAU: S'acaba la zona on els vianants tenen prioritat total sobre els vehicles.", audio: "Senyal de reglamentació. Fi de zona de prioritat residencial.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/reglamentacion/R-505.png" },

// ===== 3. INFORMACIÓ S-1 A S-200 - 80 SEÑALES =====
  { id: "S-1", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Autopista", "Via ràpida", "Carretera"], correcta: 0, codi: "S-1", tip: "💡 CLAU: Fons BLAU = Informació. Rectangle blau = Autopista. No hi ha vianants ni bicis.", audio: "Senyal d'informació. Autopista.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-1.png" },
  { id: "S-2", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Autovia", "Via ràpida", "Carretera"], correcta: 0, codi: "S-2", tip: "💡 CLAU: Fons BLAU amb 2 ponts = Autovia. Igual que autopista però pot tenir encreuaments.", audio: "Senyal d'informació. Autovia.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-2.png" },
  { id: "S-3", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Carretera convencional", "Carretera", "Via"], correcta: 0, codi: "S-3", tip: "💡 CLAU: Fons BLAU amb 1 pont = Carretera convencional. Límit genèric 90 km/h.", audio: "Senyal d'informació. Carretera convencional.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-3.png" },
  { id: "S-4", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Fi d'autopista", "Fi via ràpida", "Sortida"], correcta: 0, codi: "S-4", tip: "💡 CLAU: S'acaba l'autopista. Atenció perquè canvien les normes i el límit de velocitat.", audio: "Senyal d'informació. Fi d'autopista.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-4.png" },
  { id: "S-5", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Fi d'autovia", "Fi via ràpida", "Sortida"], correcta: 0, codi: "S-5", tip: "💡 CLAU: S'acaba l'autovia. Vigila perquè poden aparèixer encreuaments i accessos.", audio: "Senyal d'informació. Fi d'autovia.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-5.png" },
  { id: "S-6", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Preseñalització", "Direccions", "Sortides"], correcta: 0, codi: "S-6", tip: "💡 CLAU: T'avisa amb antelació de les sortides. Ves preparant el carril.", audio: "Senyal d'informació. Preseñalització.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-6.png" },
  { id: "S-7", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Sortida", "Exit", "Desviament"], correcta: 0, codi: "S-7", tip: "💡 CLAU: Sortida propera. Si la vols agafar canvia de carril amb temps.", audio: "Senyal d'informació. Sortida.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-7.png" },
  { id: "S-8", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Noms de poblacions", "Direcció", "Rutes"], correcta: 0, codi: "S-8", tip: "💡 CLAU: Indica les direccions i distàncies a les poblacions. Fons blau = autopista/autovia.", audio: "Senyal d'informació. Noms de poblacions.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-8.png" },
  { id: "S-9", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Itinerari", "Ruta", "Camí"], correcta: 0, codi: "S-9", tip: "💡 CLAU: T'indica l'itinerari a seguir per arribar a una població.", audio: "Senyal d'informació. Itinerari.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-9.png" },
  { id: "S-10", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Confirmació d'itinerari", "Confirmació", "Distàncies"], correcta: 0, codi: "S-10", tip: "💡 CLAU: Confirma que vas bé i et diu quants km falten.", audio: "Senyal d'informació. Confirmació d'itinerari.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-10.png" },
  { id: "S-11", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Núm. de sortida", "Sortida", "Km"], correcta: 0, codi: "S-11", tip: "💡 CLAU: Número de la sortida. Molt útil per GPS i per parlar amb emergències.", audio: "Senyal d'informació. Número de sortida.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-11.png" },
  { id: "S-12", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Àrea de servei", "Gasolinera", "Descans"], correcta: 0, codi: "S-12", tip: "💡 CLAU: Àrea de servei propera. Té gasolinera, bar i banys. Aprofita per descansar.", audio: "Senyal d'informació. Àrea de servei.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-12.png" },
  { id: "S-13", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Estació de servei", "Gasolinera", "Combustible"], correcta: 0, codi: "S-13", tip: "💡 CLAU: Només gasolinera. Si vas just de benzina, surt aquí.", audio: "Senyal d'informació. Estació de servei.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-13.png" },
  { id: "S-14", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Hotel", "Allotjament", "Dormir"], correcta: 0, codi: "S-14", tip: "💡 CLAU: Hotel o motel proper. Si vas cansat, millor parar.", audio: "Senyal d'informació. Hotel.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-14.png" },
  { id: "S-15", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Restaurant", "Menjar", "Bar"], correcta: 0, codi: "S-15", tip: "💡 CLAU: Restaurant proper. Zona per menjar i descansar.", audio: "Senyal d'informació. Restaurant.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-15.png" },
  { id: "S-16", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Càmping", "Acampar", "Caravanes"], correcta: 0, codi: "S-16", tip: "💡 CLAU: Zona de càmping. Per passar la nit amb tenda o caravana.", audio: "Senyal d'informació. Càmping.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-16.png" },
  { id: "S-17", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Càmping per a caravanes", "Caravanes", "Acampar"], correcta: 0, codi: "S-17", tip: "💡 CLAU: Càmping especial per caravanes. Té connexions d'aigua i llum.", audio: "Senyal d'informació. Càmping per a caravanes.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-17.png" },
  { id: "S-18", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Taller mecànic", "Averia", "Reparació"], correcta: 0, codi: "S-18", tip: "💡 CLAU: Taller proper. Si el cotxe fa sorolls raros, para aquí.", audio: "Senyal d'informació. Taller mecànic.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-18.png" },
  { id: "S-19", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Telèfon", "Trucar", "Emergència"], correcta: 0, codi: "S-19", tip: "💡 CLAU: Telèfon de carretera. Per avisar d'accidents o avaries.", audio: "Senyal d'informació. Telèfon.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-19.png" },
  { id: "S-20", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Primer auxilis", "Creu Roja", "Sanitari"], correcta: 0, codi: "S-20", tip: "💡 CLAU: Servei de primers auxilis proper. Per ferides lleus.", audio: "Senyal d'informació. Primer auxilis.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-20.png" },
  { id: "S-21", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Estació de ferrocarril", "Tren", "Estació"], correcta: 0, codi: "S-21", tip: "💡 CLAU: Indica on és l'estació de tren. Per deixar el cotxe i agafar-lo.", audio: "Senyal d'informació. Estació de ferrocarril.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-21.png" },
  { id: "S-22", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Estació d'autobusos", "Bus", "Estació"], correcta: 0, codi: "S-22", tip: "💡 CLAU: Estació d'autobusos propera. Per agafar transport públic.", audio: "Senyal d'informació. Estació d'autobusos.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-22.png" },
  { id: "S-23", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Aeroport", "Avions", "Volar"], correcta: 0, codi: "S-23", tip: "💡 CLAU: Indica la direcció cap a l'aeroport.", audio: "Senyal d'informació. Aeroport.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-23.png" },
  { id: "S-24", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Port", "Vaixells", "Mar"], correcta: 0, codi: "S-24", tip: "💡 CLAU: Indica la direcció cap al port marítim.", audio: "Senyal d'informació. Port.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-24.png" },
  { id: "S-25", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Heliport", "Helicòpter", "Emergència"], correcta: 0, codi: "S-25", tip: "💡 CLAU: Zona d'aterratge d'helicòpters. Típic d'hospitals.", audio: "Senyal d'informació. Heliport.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-25.png" },
  { id: "S-26", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Centre de salut", "Metge", "Consultori"], correcta: 0, codi: "S-26", tip: "💡 CLAU: Centre de salut o CAP proper.", audio: "Senyal d'informació. Centre de salut.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-26.png" },
  { id: "S-27", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Farmàcia", "Medicaments", "Creu verda"], correcta: 0, codi: "S-27", tip: "💡 CLAU: Farmàcia propera. Creu verda lluminosa.", audio: "Senyal d'informació. Farmàcia.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-27.png" },
  { id: "S-28", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Policia", "Comissaria", "Seguretat"], correcta: 0, codi: "S-28", tip: "💡 CLAU: Comissaria de policia propera.", audio: "Senyal d'informació. Policia.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-28.png" },
  { id: "S-29", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Parc públic", "Zona verda", "Descans"], correcta: 0, codi: "S-29", tip: "💡 CLAU: Indica un parc públic per passejar.", audio: "Senyal d'informació. Parc públic.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-29.png" },
  { id: "S-30", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Lloc pintoresc", "Mirador", "Paisatge"], correcta: 0, codi: "S-30", tip: "💡 CLAU: Lloc amb bones vistes. Zona per fer fotos.", audio: "Senyal d'informació. Lloc pintoresc.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-30.png" },
  { id: "S-31", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Zona d'esquí", "Neu", "Pistes"], correcta: 0, codi: "S-31", tip: "💡 CLAU: Indica que anem cap a pistes d'esquí.", audio: "Senyal d'informació. Zona d'esquí.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-31.png" },
  { id: "S-32", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Platja", "Mar", "Bany"], correcta: 0, codi: "S-32", tip: "💡 CLAU: Direcció cap a la platja.", audio: "Senyal d'informació. Platja.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-32.png" },
  { id: "S-33", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Monument", "Turisme", "Història"], correcta: 0, codi: "S-33", tip: "💡 CLAU: Monument o lloc d'interès turístic.", audio: "Senyal d'informació. Monument.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-33.png" },
  { id: "S-34", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Museu", "Cultura", "Exposició"], correcta: 0, codi: "S-34", tip: "💡 CLAU: Indica on està el museu.", audio: "Senyal d'informació. Museu.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-34.png" },
  { id: "S-35", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Informació turística", "Turisme", "Oficina"], correcta: 0, codi: "S-35", tip: "💡 CLAU: Oficina de turisme. Per demanar mapes i info.", audio: "Senyal d'informació. Informació turística.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-35.png" },
  { id: "S-100", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Població", "Entrada població", "Ciutat"], correcta: 0, codi: "S-100", tip: "💡 CLAU: Fons BLAU = Entrada a població. A partir d'aquí el límit són 50 km/h.", audio: "Senyal d'informació. Població.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-100.png" },
  { id: "S-101", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Fi de població", "Sortida població", "Fi límit"], correcta: 0, codi: "S-101", tip: "💡 CLAU: Fons BLAU ratllat = Fi de població. S'acaba el límit de 50. Fora són 90.", audio: "Senyal d'informació. Fi de població.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-101.png" },
  { id: "S-102", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Velocitat recomanada", "Recomanada", "Consell"], correcta: 0, codi: "S-102", tip: "💡 CLAU: Número blanc sobre blau = VELOCITAT RECOMANADA. No és obligatòria.", audio: "Senyal d'informació. Velocitat recomanada.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-102.png" },
  { id: "S-103", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Pas inferior", "Túnel", "Sota pont"], correcta: 0, codi: "S-103", tip: "💡 CLAU: Pas per sota d'una altra via.", audio: "Senyal d'informació. Pas inferior.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-103.png" },
  { id: "S-104", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Pas superior", "Pont", "Sobre pont"], correcta: 0, codi: "S-104", tip: "💡 CLAU: Pas per sobre d'una altra via.", audio: "Senyal d'informació. Pas superior.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-104.png" },
  { id: "S-105", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Calçada sense sortida", "Fons de sac", "Prohibit"], correcta: 0, codi: "S-105", tip: "💡 CLAU: Carrer sense sortida. Vigila si entres amb cotxe.", audio: "Senyal d'informació. Calçada sense sortida.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-105.png" },
  { id: "S-106", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Parada d'autobús", "Bus", "Parada"], correcta: 0, codi: "S-106", tip: "💡 CLAU: Aquí para l'autobús. Vigila vianants.", audio: "Senyal d'informació. Parada d'autobús.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-106.png" },
  { id: "S-107", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Parada de tramvia", "Tramvia", "Parada"], correcta: 0, codi: "S-107", tip: "💡 CLAU: Parada de tramvia. Cedeix el pas en arrencar.", audio: "Senyal d'informació. Parada de tramvia.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-107.png" },
  { id: "S-108", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Taxi", "Parada taxi", "Transport"], correcta: 0, codi: "S-108", tip: "💡 CLAU: Parada de taxis. Només poden parar taxis.", audio: "Senyal d'informació. Taxi.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-108.png" },
  { id: "S-109", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Aparcament", "Parking", "P"], correcta: 0, codi: "S-109", tip: "💡 CLAU: Aparcament públic proper.", audio: "Senyal d'informació. Aparcament.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-109.png" },
  { id: "S-110", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Aparcament vigilat", "Parking segur", "P"], correcta: 0, codi: "S-110", tip: "💡 CLAU: Aparcament amb vigilància. Més segur.", audio: "Senyal d'informació. Aparcament vigilat.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-110.png" },
  { id: "S-111", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Aparcament subterrani", "Parking soterrat", "P"], correcta: 0, codi: "S-111", tip: "💡 CLAU: L'aparcament està a sota terra.", audio: "Senyal d'informació. Aparcament subterrani.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-111.png" },
  { id: "S-112", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Zona peatonal", "Vianants", "Anar a peu"], correcta: 0, codi: "S-112", tip: "💡 CLAU: Zona només per vianants. Cotxes prohibit.", audio: "Senyal d'informació. Zona peatonal.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-112.png" },
  { id: "S-113", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Carrer residencial", "Zona 20", "Nens"], correcta: 0, codi: "S-113", tip: "💡 CLAU: Zona residencial. Màxim 20 km/h. Els nens poden jugar.", audio: "Senyal d'informació. Carrer residencial.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-113.png" },
  { id: "S-114", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Fi carrer residencial", "Fi zona 20", "Fi"], correcta: 0, codi: "S-114", tip: "💡 CLAU: S'acaba la zona residencial. Torna límit normal.", audio: "Senyal d'informació. Fi carrer residencial.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-114.png" },
  { id: "S-115", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Carril bici", "Bicis", "Ciclistes"], correcta: 0, codi: "S-115", tip: "💡 CLAU: Carril exclusiu per bicis. Respecta'l.", audio: "Senyal d'informació. Carril bici.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-115.png" },
  { id: "S-116", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Fi carril bici", "Fi bicis", "Fi"], correcta: 0, codi: "S-116", tip: "💡 CLAU: S'acaba el carril bici. Les bicis comparteixen calçada.", audio: "Senyal d'informació. Fi carril bici.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-116.png" },
  { id: "S-117", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Pas de vianants", "Zebra", "Creuar"], correcta: 0, codi: "S-117", tip: "💡 CLAU: Pas de vianants. Ells tenen prioritat.", audio: "Senyal d'informació. Pas de vianants.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-117.png" },
  { id: "S-118", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Pas elevat", "Ralentitzador", "Bandes"], correcta: 0, codi: "S-118", tip: "💡 CLAU: Hi ha un coixí berlín. Redueix o faràs mal al cotxe.", audio: "Senyal d'informació. Pas elevat.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-118.png" },
  { id: "S-119", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Radar", "Control velocitat", "Multa"], correcta: 0, codi: "S-119", tip: "💡 CLAU: Zona amb radar. Vigila la velocitat.", audio: "Senyal d'informació. Radar.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-119.png" },
  { id: "S-120", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Fi autopista", "Fi via ràpida", "Sortida"], correcta: 0, codi: "S-120", tip: "💡 CLAU: S'acaba l'autopista. Canvien les normes.", audio: "Senyal d'informació. Fi autopista.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-120.png" },
  { id: "S-121", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Fi autovia", "Fi via ràpida", "Sortida"], correcta: 0, codi: "S-121", tip: "💡 CLAU: S'acaba l'autovia. Atenció als encreuaments.", audio: "Senyal d'informació. Fi autovia.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-121.png" },
  { id: "S-200", categoria: "informacio", pregunta: "Què indica aquesta senyal d'INFORMACIÓ?", opcions: ["Hospital", "Creu", "Servei sanitari"], correcta: 0, codi: "S-200", tip: "💡 CLAU: Fons BLAU amb H = Hospital proper. Si hi ha emergència pots anar-hi.", audio: "Senyal d'informació. Hospital.", url: "https://www.dgt.es/export/sites/web-DGT/.galleries/senales/informacion/S-200.png" }
],

 normes: [
    {id:168,q:"Taxa d'alcohol novells:",a:["0.5 g/l","0.3 g/l","0.0 g/l"],ok:2},
    {id:169,q:"Cinturó obligatori:",a:["Només davant","Només conductor","Tots"],ok:2},
    {id:170,q:"Edat mínima carnet B:",a:["16 anys","17 anys","18 anys"],ok:2},
    {id:171,q:"Límit autovia turismes:",a:["100 km/h","120 km/h","130 km/h"],ok:1},
    {id:172,q:"Límit ciutat genèric:",a:["30 km/h","50 km/h","40 km/h"],ok:1},
    {id:173,q:"Punts carnet nou:",a:["8 punts","12 punts","15 punts"],ok:1},
    {id:174,q:"Pèrdua total punts:",a:["Suspensió 3 mesos","Suspensió 6 mesos","Retirada carnet"],ok:0},
    {id:175,q:"Recuperar punts:",a:["Curs 12h","Curs 24h","Automàtic en 2 anys"],ok:1},
    {id:176,q:"Documentació obligatòria:",a:["Només DNI","Permís + ITV + Assegurança","Només permís"],ok:1},
    {id:177,q:"ITV turisme nou:",a:["Als 2 anys","Als 4 anys","Als 6 anys"],ok:1},
    {id:178,q:"Assegurança obligatòria:",a:["Només RC","RC + robatori","Tot risc"],ok:0},
    {id:179,q:"Multa mòbil:",a:["3 punts + 200€","6 punts + 200€","Només 100€"],ok:1},
    {id:180,q:"Multa cinturó:",a:["3 punts + 200€","Només 100€","Avís"],ok:0},
    {id:181,q:"Alcohol >0.6 g/l:",a:["Multa","Delicte penal","Només avís"],ok:1},
    {id:182,q:"Negar-se a alcohol:",a:["Multa","Delicte penal","Només avís"],ok:1},
    {id:183,q:"Velocitat +20km/h en ciutat:",a:["Multa lleu","Multa greu + 2 punts","Només avís"],ok:1},
    {id:184,q:"Velocitat +60km/h autopista:",a:["Multa lleu","Delicte penal","Només avís"],ok:1},
    {id:185,q:"Conduir sense carnet:",a:["Multa","Delicte penal","Només avís"],ok:1},
    {id:186,q:"Fugir accident:",a:["Multa","Delicte penal","Només avís"],ok:1},
    {id:187,q:"Vianant té preferència:",a:["Mai","Sempre a pas zebra","Només amb semàfor"],ok:1},
    {id:188,q:"Ciclista té preferència:",a:["Mai","En carril bici","Sempre"],ok:1},
    {id:189,q:"Moto té preferència:",a:["Mai","En rotonda","Sempre"],ok:1},
    {id:190,q:"Bus té preferència:",a:["Mai","Sortint de parada","Sempre"],ok:1},
    {id:191,q:"Taxi té preferència:",a:["Mai","En carril bus","Sempre"],ok:1},
    {id:192,q:"Ambulància té preferència:",a:["Mai","Amb llums i so","Sempre"],ok:1},
    {id:193,q:"Policía té preferència:",a:["Mai","En servei","Sempre"],ok:1},
    {id:194,q:"Bombers té preferència:",a:["Mai","En servei","Sempre"],ok:1},
    {id:195,q:"Protecció Civil té preferència:",a:["Mai","En servei","Sempre"],ok:1},
    {id:196,q:"Prioritat dreta:",a:["Mai","En cruïlla sense senyals","Sempre"],ok:1},
    {id:197,q:"Prioritat esquerra:",a:["Mai","En rotonda","Sempre"],ok:1},
    {id:198,q:"Prioritat endavant:",a:["Mai","En gir","Sempre"],ok:1},
    {id:199,q:"Prioritat enrere:",a:["Mai","En marxa enrere","Sempre"],ok:0},
    {id:200,q:"Prioritat pujada:",a:["Mai","En costa estreta","Sempre"],ok:1},
    {id:201,q:"Prioritat baixada:",a:["Mai","En costa estreta","Sempre"],ok:0},
    {id:202,q:"Prioritat tramvia:",a:["Mai","Sempre","Només de nit"],ok:1},
    {id:203,q:"Prioritat tren:",a:["Mai","Sempre a pas nivell","Només de dia"],ok:1},
    {id:204,q:"Prioritat bus escolar:",a:["Mai","Quan para","Sempre"],ok:1},
    {id:205,q:"Prioritat cotxe oficial:",a:["Mai","Amb llums","Sempre"],ok:1},
    {id:206,q:"Prioritat moto policia:",a:["Mai","En servei","Sempre"],ok:1},
    {id:207,q:"Prioritat bicicleta:",a:["Mai","En carril bici","Sempre"],ok:1},
    {id:208,q:"Prioritat patinet:",a:["Mai","En carril bici","Sempre"],ok:1},
    {id:209,q:"Prioritat vianant invàlid:",a:["Mai","Sempre","Només amb bastó"],ok:1},
    {id:210,q:"Prioritat nen:",a:["Mai","Sempre","Només a col·legi"],ok:1},
    {id:211,q:"Prioritat gent gran:",a:["Mai","Sempre","Només amb bastó"],ok:1},
    {id:212,q:"Prioritat dona embarassada:",a:["Mai","Sempre","Només amb cinturó"],ok:1},
    {id:213,q:"Prioritat conductor novell:",a:["Mai","Sempre","Només amb L"],ok:0},
    {id:214,q:"Prioritat conductor professional:",a:["Mai","Sempre","Només amb taxi"],ok:0},
    {id:215,q:"Prioritat conductor estranger:",a:["Mai","Sempre","Només amb passaport"],ok:0},
    {id:216,q:"Prioritat conductor local:",a:["Mai","Sempre","Només amb DNI"],ok:0},
    {id:217,q:"Prioritat conductor turista:",a:["Mai","Sempre","Només amb mapa"],ok:0},
    {id:218,q:"Quants punts es perden per no dur casco moto?",a:["2 punts","3 punts","4 punts"],ok:1},
    {id:219,q:"Quina és la caducitat del permís B fins als 65 anys?",a:["5 anys","10 anys","15 anys"],ok:1},
    {id:220,q:"Multa per circular sense ITV en vigor?",a:["100€","200€ + immobilització","Només avís"],ok:1},
    {id:221,q:"Quants punts per saltar-se un STOP?",a:["2 punts","3 punts","4 punts"],ok:2},
    {id:222,q:"Quina és la taxa alcohol professional?",a:["0,5 g/l","0,3 g/l","0,15 g/l"],ok:1},
     {id:223,q:"Quants punts per avançar en línia contínua?",a:["3 punts","4 punts","6 punts"],ok:1},
    {id:224,q:"Quina documentació cal portar sempre?",a:["DNI","Permís + ITV + Assegurança","Només permís"],ok:1},
    {id:225,q:"Quants punts per no respectar semàfor vermell?",a:["3 punts","4 punts","6 punts"],ok:1},
    {id:226,q:"Multa per no dur armilla reflectant?",a:["80€","200€","Només avís"],ok:0},
    {id:227,q:"Quants anys sense cometre infraccions per recuperar 2 punts?",a:["1 any","2 anys","3 anys"],ok:1},
    {id:228,q:"Quina és la multa per conduir amb mòbil a la mà?",a:["100€","200€ + 6 punts","Només 80€"],ok:1},
    {id:229,q:"Quants punts per circular per voral sense causa?",a:["2 punts","3 punts","4 punts"],ok:2},
    {id:230,q:"Quina és la ITV d’un cotxe de 8 anys?",a:["Anual","Cada 2 anys","Cada 6 mesos"],ok:0},
    {id:231,q:"Multa per no dur triangles en avaria?",a:["80€","200€","Només avís"],ok:0},
    {id:232,q:"Quants punts per no cedir pas a vianant en zebra?",a:["2 punts","3 punts","4 punts"],ok:2},
    {id:233,q:"Quina és la velocitat que comporta delicte penal?",a:["+40 km/h","Excedir +60 km/h límit","Qualsevol excés"],ok:1},
    {id:234,q:"Multa per aparcar en carril bus?",a:["80€","200€ + retirada vehicle","Només avís"],ok:0},
    {id:235,q:"Quants punts per no dur cinturó darrere?",a:["2 punts","3 punts","4 punts"],ok:1},
    {id:236,q:"Quina és la caducitat del permís a partir dels 65 anys?",a:["2 anys","3 anys","5 anys"],ok:2},
    {id:237,q:"Multa per circular sense assegurança?",a:["500€ a 3000€","100€","Només avís"],ok:0},
    {id:238,q:"Quants punts per saltar-se ceda el pas?",a:["2 punts","3 punts","4 punts"],ok:2},
    {id:239,q:"Quina és la taxa alcohol per ciclomotor?",a:["0,5 g/l","0,3 g/l","0,15 g/l"],ok:1},
    {id:240,q:"Multa per no senyalitzar avaria en autovia?",a:["80€","200€","Només avís"],ok:0}
  ],
  mecanica: [
    {id:241,q:"Pressió baixa causa:",a:["Major consum","Menor adherència","Totes dues"],ok:2},
    {id:242,q:"Líquid de frens baix:",a:["Desgast pastilles","Fuga","Totes dues poden ser"],ok:2},
    {id:243,q:"Testimoni oli vermell:",a:["Revisar nivell","Atura el motor JA","Canviar oli"],ok:1},
    {id:244,q:"Bateria descarregada:",a:["Empènyer","Pinces","Totes dues"],ok:2},
    {id:245,q:"Pneumàtic llis:",a:["Multa","Accident","Totes dues"],ok:2},
    {id:246,q:"Anticongelant serveix per:",a:["Només fred","Fred i calor","Només calor"],ok:1},
    {id:247,q:"Nivell refrigerant baix:",a:["Afegeix aigua","Afegeix refrigerant","No toquis"],ok:1},
    {id:248,q:"Sobreescalfament:",a:["Accelera","Para i espera","Obre tap"],ok:1},
    {id:249,q:"Oli massa alt:",a:["Millor lubricació","Pot fer mal al motor","No passa res"],ok:1},
    {id:250,q:"Oli massa baix:",a:["Millor consum","Fricció i desgast","No passa res"],ok:1},
    {id:251,q:"Pastilles frens gastades:",a:["Millor frenada","Menor frenada + soroll","No passa res"],ok:1},
    {id:252,q:"Discs frens ratllats:",a:["Millor frenada","Vibració al frenar","No passa res"],ok:1},
    {id:253,q:"Amortidors gastats:",a:["Millor confort","Menor adherència","No passa res"],ok:1},
    {id:254,q:"Direcció dura:",a:["Millor control","Falta líquid direcció","No passa res"],ok:1},
    {id:255,q:"Embragatge rellisca:",a:["Millor sortida","Pèrdua potència","No passa res"],ok:1},
    {id:256,q:"Caixa canvis rasca:",a:["Normal","Sincronitzadors gastats","No passa res"],ok:1},
    {id:257,q:"Escapament sorollós:",a:["Millor potència","Forat o junta trencada","No passa res"],ok:1},
    {id:258,q:"Fum blanc escapament:",a:["Normal","Vapor d’aigua o refrigerant","Oli cremat"],ok:1},
    {id:259,q:"Fum negre escapament:",a:["Normal","Excés combustible","Oli cremat"],ok:1},
    {id:260,q:"Fum blau escapament:",a:["Normal","Oli cremat","Excés combustible"],ok:1},
    {id:261,q:"Testimoni motor groc:",a:["Para JA","Revisa aviat","No passa res"],ok:1},
    {id:262,q:"Testimoni ABS ences:",a:["No frena","ABS no funciona","No passa res"],ok:1},
    {id:263,q:"Testimoni airbag ences:",a:["Airbag no funciona","Airbag millorat","No passa res"],ok:0},
    {id:264,q:"Testimoni bateria ences:",a:["Bateria carregant","Alternador falla","No passa res"],ok:1},
    {id:265,q:"Testimoni pressió pneumàtics:",a:["Pressió correcta","Pressió baixa","No passa res"],ok:1},
    {id:266,q:"Neteja líquid parabrises:",a:["Només aigua","Aigua + producte","Només producte"],ok:1},
    {id:267,q:"Eixugaparabrises no neteja:",a:["Normal","Gomes gastades","Motor trencat"],ok:1},
    {id:268,q:"Llums no engeguen:",a:["Bombeta fosa","Fusible trencat","Totes dues"],ok:2},
    {id:269,q:"Intermitent va ràpid:",a:["Normal","Bombeta fosa","Relé trencat"],ok:1},
    {id:270,q:"Clàxon no sona:",a:["Normal","Fusible o clàxon trencat","No passa res"],ok:1},
    {id:271,q:"Aire condicionat no refreda:",a:["Normal","Falta gas","Compressor trencat"],ok:1},
    {id:272,q:"Calefacció no escalfa:",a:["Normal","Termòstat tancat","Radiador trencat"],ok:1},
    {id:273,q:"Porta no tanca:",a:["Normal","Pany trencat","Goma desgastada"],ok:1},
    {id:274,q:"Vidre no baixa:",a:["Normal","Motor elevallunes trencat","Fusible trencat"],ok:1},
    {id:275,q:"Seient no es mou:",a:["Normal","Motor seient trencat","Palanca trencada"],ok:1},
    {id:276,q:"Volant vibra:",a:["Normal","Rodes desequilibrades","Direcció trencada"],ok:1},
    {id:277,q:"Cotxe tira a un costat:",a:["Normal","Paral·lelisme mal","Pneumàtic baix"],ok:1},
    {id:278,q:"Frenada vibra:",a:["Normal","Discs alabejats","Pastilles noves"],ok:1},
    {id:279,q:"Soroll en girar:",a:["Normal","Palier trencat","Direcció trencada"],ok:1},
    {id:280,q:"Soroll en accelerar:",a:["Normal","Corretja desgastada","Motor trencat"],ok:1},
    {id:281,q:"Soroll en frenar:",a:["Normal","Pastilles gastades","Discs nous"],ok:1},
    {id:282,q:"Soroll en passar sots:",a:["Normal","Suspensió gastada","Rodes noves"],ok:1},
    {id:283,q:"Cotxe no arrenca:",a:["Normal","Bateria o motor arrencada","No passa res"],ok:1},
    {id:284,q:"Cotxe s’atura:",a:["Normal","Falta combustible o avaria","No passa res"],ok:1},
    {id:285,q:"Cotxe perd potència:",a:["Normal","Filtre brut o avaria","No passa res"],ok:1},
    {id:286,q:"Cotxe consumeix molt:",a:["Normal","Pressió baixa o avaria","No passa res"],ok:1},
    {id:287,q:"Cotxe fuma:",a:["Normal","Avaria motor","No passa res"],ok:1},
    {id:288,q:"Cotxe olor a cremat:",a:["Normal","Fricció o curtcircuit","No passa res"],ok:1},
    {id:289,q:"Cotxe olor a gasolina:",a:["Normal","Fuita combustible","No passa res"],ok:1},
    {id:290,q:"Cotxe olor a oli:",a:["Normal","Fuita oli","No passa res"],ok:1},
    {id:291,q:"Cotxe olor a refrigerant:",a:["Normal","Fuita refrigerant","No passa res"],ok:1}
  ],
  auxilis: [
    {id:292,q:"Què fas primer davant un accident?",a:["Trucar al 112","Moure el ferit","Donar aigua"],ok:0},
    {id:293,q:"En una hemorràgia arterial, què fas?",a:["Comprimir directe","Elevar extremitat","Donar aspirina"],ok:0},
    {id:294,q:"Posició lateral de seguretat serveix per:",a:["Evitar asfíxia","Accelerar recuperació","Reduir dolor"],ok:0},
    {id:295,q:"Davant una fractura oberta:",a:["Reduir os","Cobrir amb gasa estèril","Moure extremitat"],ok:1},
    {id:296,q:"RCP en adult: compressió/ventilació:",a:["15/2","30/2","20/3"],ok:1},
    {id:297,q:"Quan NO has de treure el casc a un motoritzat?",a:["Si respira malament","Si està conscient","Si no hi ha risc cervical"],ok:0},
    {id:298,q:"Símptoma d’infart:",a:["Dolor toràcic","Dolor de genoll","Visió borrosa"],ok:0},
    {id:299,q:"Davant cremades de 2n grau:",a:["Aigua freda 10 min","Glaç directe","Pomada grassa"],ok:0},
    {id:300,q:"Què fas si algú s’ennuega?",a:["Donar aigua","Cop esquena","Respiració boca-boca"],ok:1},
    {id:301,q:"Convulsió: què NO fas?",a:["Protegir cap","Posar objecte boca","Cronometrar temps"],ok:1},
    {id:302,q:"Xoc hipovolèmic: posició:",a:["Assegut","Tombat amb cames elevades","Boca avall"],ok:1},
    {id:303,q:"Mordedura de serp:",a:["Tallar ferida","Immobilitzar extremitat","Succionar verí"],ok:1},
    {id:304,q:"Hipotèrmia greu: què fas?",a:["Friccionar pell","Aïllar del fred","Donar alcohol"],ok:1},
    {id:305,q:"Golp de calor: símptoma:",a:["Pell freda","Pell calenta i seca","Tremolors"],ok:1},
    {id:306,q:"Fractura de clavícula: immobilització:",a:["Amb fèrula","Cabestrell","Estirant braç"],ok:1},
    {id:307,q:"Davant pèrdua de coneixement breu:",a:["Sentar immediat","PLS si respira","Donar sucre"],ok:1},
    {id:308,q:"Hemorràgia nasal: què fas?",a:["Inclinar cap enrere","Pessigar nas","Sonar-se"],ok:1},
    {id:309,q:"Crema química a l’ull:",a:["Fregar","Rentat abundant aigua","Tapar amb gasa seca"],ok:1},
    {id:310,q:"Atac d’asma greu:",a:["Aigua freda","Posició assegut","Estirar a terra"],ok:1},
    {id:311,q:"Quan uses DEA?",a:["Si no respira","Si no hi ha pols","Si està adormit"],ok:1},
    {id:312,q:"Ferida amb objecte clavat:",a:["Treure objecte","Immobilitzar objecte","Pressionar al voltant"],ok:1},
    {id:313,q:"Símptoma d’ictus:",a:["Dolor estómac","Caiguda cara","Calfreds"],ok:1},
    {id:314,q:"Esguinç turmell:",a:["Calor immediata","Fred + compressió","Massatge fort"],ok:1},
    {id:315,q:"Davant vòmit amb inconsciència:",a:["PLS","Boca amunt","Assegut"],ok:0},
    {id:316,q:"Intoxicació: què NO fas?",a:["Trucar 112","Provocar vòmit sense indicació","Observar pacient"],ok:1},
    {id:317,q:"Hipoglucèmia conscient:",a:["Insulina","Sucre per boca","Aigua sola"],ok:1},
    {id:318,q:"Trauma cranial amb vòmit:",a:["Normal","Signa d’alarma","No importa"],ok:1},
    {id:319,q:"Parada respiratòria: freqüència ventilació:",a:["6-8/min","12/min","20/min"],ok:0},
    {id:320,q:"Davant amputació:",a:["Posar part en gel directe","Cobrir ferida","Guardar part sec"],ok:1},
    {id:321,q:"Símptoma d’al·lèrgia greu:",a:["Dificultat per respirar","Dolor estómac","Picor de nas"],ok:0},
    {id:322,q:"Deshidratació greu: símptoma:",a:["Orina abundant","Set intensa","Sudoració excessiva"],ok:1},
    {id:323,q:"Trauma toràcic amb dificultat respiratòria:",a:["Normal","Perillós","No importa"],ok:1},
    {id:324,q:"Fractura oberta sagnant molt:",a:["Treure os","Compressió directa","Elevar extremitat"],ok:1},
    {id:325,q:"Davant intoxicació per gas:",a:["Encendre llum","Ventilar + sortir","Donar aigua"],ok:1},
    {id:326,q:"Convulsió acabada, pacient adormit:",a:["Despertar","PLS","Assegut"],ok:1},
    {id:327,q:"Ferida que no para de sagnar:",a:["Posar torniquet","Compressió + 112","Aigua oxigenada"],ok:1},
    {id:328,q:"Símptoma d’angina de pit:",a:["Dolor genoll","Opressió pit","Dolor cap"],ok:1},
    {id:329,q:"Davant caiguda de més de 3m:",a:["No moure + 112","Aixecar ràpid","Moure suaument"],ok:0},
    {id:330,q:"Crema elèctrica:",a:["Tocar pacient","Tallat corrent abans","Aigua immediata"],ok:1},
    {id:331,q:"Nen inconscient que no respira:",a:["5 ventilacions inicials","30 compressions","Respirar-li a cara"],ok:0},
    {id:332,q:"Hemoràgia externa greu:",a:["Esperar que pari","Compressió + elevar","Posar alcohol"],ok:1}
  ],
  mediambient: [
    {id:333,q:"Què és l’etiqueta ambiental B?",a:["Elèctric","Gasolina Euro 4+","Híbrid"],ok:1},
    {id:334,q:"Cotxe amb etiqueta 0 emet:",a:["CO2 baix","Zero emissions tub","Només CO"],ok:1},
    {id:335,q:"Conducció eficient redueix:",a:["Només soroll","Consum + CO2","Velocitat"],ok:1},
    {id:336,q:"Quan has d’apagar motor?",a:["Mai","Aturat >30s","Només al semàfor"],ok:1},
    {id:337,q:"Etiqueta C: cotxe gasolina de:",a:["Euro 3","Euro 4 a Euro 6","Elèctric"],ok:1},
    {id:338,q:"Pneumàtics desinflats provoquen:",a:["Menys consum","Més consum CO2","Menys soroll"],ok:1},
    {id:339,q:"Accelerar bruscament:",a:["Estalvia","Augmenta contaminació","No afecta"],ok:1},
    {id:340,q:"Etiqueta ECO: inclou:",a:["Només elèctric","Híbrid + gas","Diesel Euro 6"],ok:1},
    {id:341,q:"Velocitat constant estalvia:",a:["Res","Combustible + emissions","Només temps"],ok:1},
    {id:342,q:"Què és ZBE?",a:["Zona blau","Zona baixes emissions","Zona bus"],ok:1},
    {id:343,q:"Canviar marxa abans 2500 rpm:",a:["Gasta més","Estalvia + contamina menys","No canvia"],ok:1},
    {id:344,q:"Etiqueta A no existeix perquè:",a:["Tots contaminen","Ja és 0 i ECO","No hi ha cotxes"],ok:1},
    {id:345,q:"Usar aire condicionat:",a:["Redueix consum","Augmenta consum","No afecta"],ok:1},
    {id:346,q:"Circular a 120 vs 100 km/h:",a:["Mateix consum","Gasta +30%","Gasta -10%"],ok:1},
    {id:347,q:"Etiqueta 0: exemples:",a:["Diesel Euro 6","Elèctric, H2, PHEV 40km","Gasolina Euro 5"],ok:1},
    {id:348,q:"Portar pes innecessari:",a:["No afecta","Augmenta consum","Redueix consum"],ok:1},
    {id:349,q:"Canvi d’oli tardà:",a:["Millora","Contamina més","No afecta"],ok:1},
    {id:350,q:"Etiqueta B: diesel de:",a:["Euro 3","Euro 4,5,6","Euro 2"],ok:1},
    {id:351,q:"Frenar amb motor:",a:["Gasta més","Estalvia combustible","No canvia"],ok:1},
    {id:352,q:"Què prohibeix ZBE sense etiqueta?",a:["Res","Accés segons ciutat","Aparcar"],ok:1},
    {id:353,q:"Marxa llarga amb rpm baixes:",a:["Força motor","Conducció eficient","Trenquen cotxe"],ok:1},
    {id:354,q:"Etiqueta C: diesel de:",a:["Euro 3","Euro 4,5,6","Euro 2"],ok:1},
    {id:355,q:"Deixar ralenti calentant:",a:["Necessari","Contamina i gasta","Obligatori hivern"],ok:1},
    {id:356,q:"Pneumàtics en bon estat:",a:["No importa","Redueixen consum","Augmenten soroll"],ok:1},
    {id:357,q:"Etiqueta 0: avantatge ZBE:",a:["Cap","Accés lliure","Ha de pagar"],ok:1},
    {id:358,q:"Conducció brusca:",a:["Estalvia","Augmenta CO2 fins 40%","No afecta"],ok:1},
    {id:359,q:"Etiqueta ECO: gas natural:",a:["No","Sí","Només biogàs"],ok:1},
    {id:360,q:"Tancar finestres autopista:",a:["Augmenta soroll","Redueix resistència","No canvia"],ok:1},
    {id:361,q:"Etiqueta B: avantatge:",a:["Gratis ZBE","Accés limitat","Res"],ok:1},
    {id:362,q:"Anticipar trànsit:",a:["No serveix","Redueix frenades","Augmenta velocitat"],ok:1},
    {id:363,q:"Etiqueta C: avantatge:",a:["Res","Accés ZBE","Gratis aparcament"],ok:1},
    {id:364,q:"Motor fred consumeix:",a:["Menys","Més","Igual"],ok:1},
    {id:365,q:"Etiqueta 0: recarrega PHEV:",a:["No cal","Cal per etiqueta","Només gas"],ok:1},
    {id:366,q:"Revisió ITVE al dia:",a:["No afecta","Redueix emissions","Augmenta consum"],ok:1},
    {id:367,q:"Etiqueta B: color:",a:["Verd","Groc","Blau"],ok:1},
    {id:368,q:"Apagar motor baixant:",a:["Correcte","Perillós","Obligatori"],ok:1},
    {id:369,q:"Etiqueta ECO: color:",a:["Blau","Verd-blau","Groc"],ok:1},
    {id:370,q:"Càrrega al sostre:",a:["Redueix consum","Augmenta resistència","No afecta"],ok:1},
    {id:371,q:"Etiqueta 0: exempt impost circulació?",a:["Mai","Depèn ajuntament","Sempre"],ok:1},
    {id:372,q:"Canviar filtre aire brut:",a:["No serveix","Redueix consum","Augmenta potència"],ok:1},
    {id:373,q:"Etiqueta C: color:",a:["Verd","Groc","Gris"],ok:1},
    {id:374,q:"Usar marxa adequada:",a:["No importa","Redueix emissions","Augmenta velocitat"],ok:1},
    {id:375,q:"Etiqueta B: exempta ZBE?",a:["Sempre","Depèn ciutat","Mai"],ok:1},
    {id:376,q:"Arrencar i marxar sense esperar:",a:["Malament","Correcte","Només fred"],ok:1},
    {id:377,q:"Etiqueta 0: aparcament?",a:["Mai gratis","Pot ser gratis","Sempre paga"],ok:1},
    {id:378,q:"Revisar pressió pneumàtics:",a:["Cada any","Cada mes","Només ITVE"],ok:1},
    {id:379,q:"Etiqueta ECO: híbrids endollables:",a:["No","Sí, >40km","Sí, tots"],ok:1},
    {id:380,q:"Conduir a revolucions altes:",a:["Estalvia","Contamina + gasta","No afecta"],ok:1},
    {id:381,q:"Etiqueta C: pot entrar ZBE?",a:["Mai","Depèn ciutat/hora","Sempre"],ok:1},
    {id:382,q:"Manteniment cotxe:",a:["No afecta medi","Clau per contaminar menys","Només per ITV"],ok:1}
  ]
};

// 160 CASOS REALS DE CONDUCCIÓ
const SITUACIONS = {
  clima: [
    {id:383,q:"Pluja intensa: què fas?",a:["Accelero per sortir","Redueixo velocitat i aumento distància","Freno en sec"],ok:1},
    {id:384,q:"Boira espessa:",a:["Llums llargues","Antiboira + curtes","Sense llums"],ok:1},
    {id:385,q:"Gel a la calçada:",a:["Freno fort","Marxes llargues sense frenar brusc","Accelero"],ok:1},
    {id:386,q:"Bassals grans:",a:["Accelera","Evita i redueix velocitat","Frena fort"],ok:1},
    {id:387,q:"Vent lateral fort:",a:["Subjecta el volant ferm","Deixa anar el volant","Accelera"],ok:0},
    {id:388,q:"Neu a la carretera:",a:["Accelera","Cadenes o pneumàtics M+S + marxa llarga","Frena brusc"],ok:1},
    {id:389,q:"Calabruix:",a:["Para sota pont","Segueix igual","Accelera per passar ràpid"],ok:0},
    {id:390,q:"Sol de cara que enlluerna:",a:["Apaga llums","Visera + ulleres sol","Accelera"],ok:1},
    {id:391,q:"Asfalt molt calent:",a:["Accelera","Vigila pneumàtics, redueix velocitat","Frena brusc"],ok:1},
    {id:392,q:"Pluja després de sequera:",a:["Conducció normal","Molt perillós, l’asfalt rellisca més","Accelera"],ok:1},
    {id:393,q:"Boira a túnel:",a:["Apaga llums","Antiboira + curtes, distància gran","Llums llargues"],ok:1},
    {id:394,q:"Tempesta amb llamp:",a:["Accelera","Segueix, cotxe fa de gàbia Faraday","Para a camp obert"],ok:1},
    {id:395,q:"Vent a pont:",a:["Subjecta fort volant, redueix","Accelera per passar","Deixa anar volant"],ok:0},
    {id:396,q:"Bassa gelada:",a:["Frena damunt","Evita o passa molt lent sense girar volant","Accelera"],ok:1},
    {id:397,q:"Pluja + línia blanca:",a:["Pisja línia","Evita pisar línies, rellisquen","Accelera"],ok:1},
    {id:398,q:"Boira + sortida autopista:",a:["Accelera per sortir","Redueix molt abans, senyalitza aviat","Talla carrils"],ok:1},
    {id:399,q:"Sol baix a horitzó:",a:["Apaga llums","Visera, augmenta distància","Accelera"],ok:1},
    {id:400,q:"Pluja + motocicleta al costat:",a:["Avança ràpid","Augmenta distància lateral, l’aigua l’enlluerna","Toca clàxon"],ok:1},
    {id:401,q:"Vent + camió avançant:",a:["Accelera","Subjecta volant, manté distància","Canvia carril brusc"],ok:0},
    {id:402,q:"Neu fonda:",a:["Accelera fort","Marxa llarga, gas suau, sense girs bruscs","Frena motor brusc"],ok:1},
    {id:403,q:"Calamarsa a l’autopista:",a:["Accelera per sortir","Redueix molt, distància x3, mans fermes al volant","Frena brusc"],ok:1},
    {id:404,q:"Vidres emboirats per dins:",a:["Obrir finestra i A/C desemboirar","Posar calor a màxim sense aire","Seguir igual"],ok:0},
    {id:405,q:"Xàfec sobtat a zona urbana:",a:["Accelera","Redueix, vigila passos de vianant relliscosos","Frena damunt marques blanques"],ok:1},
    {id:406,q:"Tempesta de sorra:",a:["Llums llargues","Antiboira + reduir velocitat, tancar ventilació","Apagar llums"],ok:1},
    {id:407,q:"Gel negre a pont:",a:["Frenar suau","No frenar ni girar, mantenir trajectòria","Accelerar per passar ràpid"],ok:1},
    {id:408,q:"Pluja + nit:",a:["Conducció normal","Augmentar distància, vigilar enlluernaments","Posar llargues"],ok:1},
    {id:409,q:"Vent fort + moto davant:",a:["Avançar ràpid","Mantenir distància lateral, pot moure’s brusc","Tocar clàxon"],ok:1},
    {id:410,q:"Boira + revolt tancat:",a:["Tocar clàxon","Reduir abans del revolt, curtes + antiboira","Llargues"],ok:1},
    {id:411,q:"Asfalt mullat + frenada:",a:["Frenar brusc","Frenar progressiu, evitar blocatge","Accelerar"],ok:1},
    {id:412,q:"Neu fosa a voral:",a:["Circular per voral","Evitar esquitxar vianants, reduir","Accelerar"],ok:1},
    {id:413,q:"Calor extrema i embús:",a:["Apagar motor","Vigilar temperatura, mantenir distància","Posar calefacció"],ok:1},
    {id:414,q:"Boira + sortida túnel:",a:["Accelerar en sortir","Adaptar vista, reduir abans d’entrar","Llargues dins túnel"],ok:1},
    {id:415,q:"Pluja + embassament d’aigua:",a:["Passar pel mig ràpid","Evitar si és profund, passar lent pel lateral","Frenar dins l’aigua"],ok:1},
    {id:416,q:"Vent + remolc:",a:["Subjectar ferm, reduir velocitat","Anar normal","Accelerar per estabilitzar"],ok:0},
    {id:417,q:"Sol de tarda i asfalt mullat:",a:["Llargues","Curtes, augmentar distància, visera","Apagar llums"],ok:1},
    {id:418,q:"Neu + baixada pronunciada:",a:["Frenar brusc","Marxa curta, frenada motor, sense blocar rodes","Punt mort"],ok:1},
    {id:419,q:"Boira + canvi de carril:",a:["Canviar ràpid","Senyalitzar abans, mirar doble, canviar lent","Sense senyalitzar"],ok:1},
    {id:420,q:"Pluja + bicicleta al costat:",a:["Avançar enganxat","Més distància lateral, vigilar esquitxos","Tocar clàxon"],ok:1},
    {id:421,q:"Gel + semàfor en verd:",a:["Accelerar fort","Arrencar suau, marxa llarga","Frenar a l’encreuament"],ok:1},
    {id:422,q:"Vent lateral + sortida túnel:",a:["Subjectar volant ferm, reduir","Anar igual","Accelerar per compensar"],ok:0}
  ],
  urbà: [
    {id:423,q:"Vianant creua fora pas zebra:",a:["Toca clàxon","Redueix, prepara’t per parar","Accelera"],ok:1},
    {id:424,q:"Nen corre cap a calçada:",a:["Toca clàxon","Frena, preveu que pot córrer","Accelera"],ok:1},
    {id:425,q:"Bici va per vorera:",a:["Toca clàxon","Redueix, el pot baixar a calçada","Accelera"],ok:1},
    {id:426,q:"Bus para a parada:",a:["Avança per dreta","Redueix, pot creuar gent","Accelera"],ok:1},
    {id:427,q:"Taxi para a doble fila:",a:["Toca clàxon","Canvia carril amb precaució","Passeu per vorera"],ok:1},
    {id:428,q:"Porta cotxe aparcat s’obre:",a:["Accelera","Redueix, mira retrovisors abans","Toca clàxon"],ok:1},
    {id:429,q:"Patinet elèctric zigzagueja:",a:["Avança ràpid","Augmenta distància, preveu gir sobtat","Toca clàxon llarg"],ok:1},
    {id:430,q:"Gos creua carretera:",a:["Toca clàxon fort","Redueix, pot girar el gos","Accelera"],ok:1},
    {id:431,q:"Moto fa carril-bus:",a:["Tanca-li pas","Manté carril, no tanquis","Accelera per avançar"],ok:1},
    {id:432,q:"Cotxe aparca en bateria:",a:["Accelera per passar","Redueix, pot sortir enrere","Toca clàxon"],ok:1},
    {id:433,q:"Vianant parla telèfon creuant:",a:["Toca clàxon","Redueix, no et veurà","Accelera"],ok:1},
    {id:434,q:"Grup gent ocupa vorera i baixa a calçada:",a:["Accelera","Redueix, cedeix pas","Toca clàxon llarg"],ok:1},
    {id:435,q:"Cotxe escola amb L davant:",a:["Avança ràpid","Augmenta distància, pot frenar brusc","Toca clàxon"],ok:1},
    {id:436,q:"Camió brossa marxa enrere:",a:["Accelera per passar","Para, llum groga girant","Toca clàxon"],ok:1},
    {id:437,q:"Ciclista sense casc a vorera:",a:["Accelera","Redueix, pot baixar a calçada","Toca clàxon"],ok:1},
    {id:438,q:"Semàfor en ambre i estàs a prop:",a:["Frena fort","Si no pots parar segur, passa","Accelera"],ok:1},
    {id:439,q:"Cruïlla sense senyal i cotxe dreta arriba:",a:["Accelera","Cedeix pas al de la dreta","Toca clàxon"],ok:1},
    {id:440,q:"Glorieta i cotxe dins no surt:",a:["Entra","Espera que surti, ell té preferència","Toca clàxon"],ok:1},
    {id:441,q:"Pas zebra elevat:",a:["Accelera","Redueix molt, pot haver-hi gent","Frena damunt"],ok:1},
    {id:442,q:"Cotxe policia aparcat amb llums:",a:["Accelera","Redueix molt, preveu agent a via","Canvia carril brusc"],ok:1},
    {id:443,q:"Vianant amb paraigües creua:",a:["Accelera","Redueix, no ve bé per costats","Tocar clàxon"],ok:1},
    {id:444,q:"Cotxe escola fa maniobra:",a:["Tocar clàxon","Augmentar distància, paciència","Avançar pegat"],ok:1},
    {id:445,q:"Furgoneta fa càrrega a doble fila:",a:["Passar per vorera","Canviar carril amb precaució, mirar ciclista","Tocar clàxon llarg"],ok:1},
    {id:446,q:"Nen amb pilota a vorera:",a:["Accelera","Redueix, pot sortir darrere cotxe","Tocar clàxon"],ok:1},
    {id:447,q:"Semàfor peatons en verd intermitent:",a:["Accelerar","No entrar si no pots creuar sencer","Parar a sobre pas"],ok:1},
    {id:448,q:"Moto filtrant entre cotxes:",a:["Tancar-li pas","Mantenir trajectòria, mirar retrovisors","Obrir porta"],ok:1},
    {id:449,q:"Bus escolar para:",a:["Avançar","Reduir, nens poden creuar","Tocar clàxon"],ok:1},
    {id:450,q:"Glorieta petita i cotxe gran dins:",a:["Entrar","Cedir pas, ell té prioritat dins","Tocar clàxon"],ok:1},
    {id:451,q:"Cotxe aparca en línia i posa marxa enrere:",a:["Accelera per passar","Parar, deixar maniobrar","Tocar clàxon"],ok:1},
    {id:452,q:"Ciclista indica gir amb braç:",a:["Avançar-lo","Respectar senyal, cedir pas","Tocar clàxon"],ok:1},
    {id:453,q:"Vianant creua amb semàfor vermell:",a:["Tocar clàxon","Frenar, cedir pas per seguretat","Accelerar"],ok:1},
    {id:454,q:"Taxi encén llum lliure:",a:["Accelera","Reduir, pot parar sobte","Tancar-li pas"],ok:1},
    {id:455,q:"Cotxe surt de garatge sense veure:",a:["Accelera","Reduir, tocar clàxon suau","Passar enganxat"],ok:1},
    {id:456,q:"Patinet puja a vorera:",a:["Tocar clàxon","Reduir, pot caure a calçada","Avançar ràpid"],ok:1},
    {id:457,q:"Cruïlla amb agent regulant:",a:["Fer cas semàfor","Fer cas agent, ignorar semàfor","Seguir recte"],ok:1},
    {id:458,q:"Cotxe darrere molt a prop en embús:",a:["Frenar brusc","Mantenir distància, evitar frenades seques","Accelerar"],ok:1},
    {id:459,q:"Gos lligat creua tirant corretja:",a:["Accelera","Reduir, pot travessar sencer","Tocar clàxon"],ok:1},
    {id:460,q:"Vianant parla per mòbil i no mira:",a:["Tocar clàxon llarg","Reduir, preparar parada","Accelerar"],ok:1},
    {id:461,q:"Camió girant dret a cruïlla:",a:["Avançar-lo per dreta","Esperar, té angle mort gran","Tallar-li gir"],ok:1},
    {id:462,q:"Pas de vianants sense pintar però freqüentat:",a:["Accelerar","Reduir, cedir pas si gent espera","Tocar clàxon"],ok:1}
  ],
  carretera: [
    {id:463,q:"Has de fer canvi sentit a carretera:",a:["On sigui","Només on ho permet senyal i visibilitat","A rotonda sempre"],ok:1},
    {id:464,q:"Cotxe lent davant en corba:",a:["Avança a corba","Espera recta amb visibilitat","Toca clàxon"],ok:1},
    {id:465,q:"Línia contínua + cotxe lent:",a:["Avança","No avançar mai","Toca clàxon"],ok:1},
    {id:466,q:"Camió puja lent costa:",a:["Avança a costa","Espera dalt si cal","Toca clàxon"],ok:1},
    {id:467,q:"Animal salvatge a voral:",a:["Toca clàxon","Redueix, pot saltar","Accelera"],ok:1},
    {id:468,q:"Cotxe avariat a voral:",a:["Accelera","Redueix, allunya’t del voral","Canvia carril brusc"],ok:1},
    {id:469,q:"Rectora tancada, desviament:",a:["Segueix recte","Segueix senyals grogues desviament","Ignora senyals"],ok:1},
    {id:470,q:"Cotxe darrere et fa llums:",a:["Frena","Manté velocitat, canvia carril quan puguis","Accelera"],ok:1},
    {id:471,q:"Has de sortir pròxima sortida i vas carril esquerra:",a:["Talla carrils","Canvia amb temps, miralls + angle mort","Segueix recte"],ok:1},
    {id:472,q:"Incorporació amb carril acceleració curt:",a:["Para al final","Accelera fort per igualar velocitat","Entra lent"],ok:1},
    {id:473,q:"Túnel sense llum:",a:["Apaga llums","Ensengeix cruïlla immediat","Segueix sense llums"],ok:1},
    {id:474,q:"Pont estret i ve cotxe:",a:["Accelera","El que està més a prop cedeix","Toca clàxon"],ok:1},
    {id:475,q:"Despreniment pedres a via:",a:["Accelera","Redueix, esquiva si segur","Frena damunt pedres"],ok:1},
    {id:476,q:"Carretera amb revolts i ciclista:",a:["Avança a corba","Espera recta, 1.5m distància","Toca clàxon"],ok:1},
    {id:477,q:"Senyal ‘fi límit velocitat’:",a:["Accelera a 140","Segueix límit genèric via","Para"],ok:1},
    {id:478,q:"Cotxe avança en zona prohibida:",a:["Tanca-li pas","Manté carril, no acceleris","Accelera"],ok:1},
    {id:479,q:"Incorporació per carril lent:",a:["Para","Accelera per igualar velocitat, cedeix","Entra tallant"],ok:1},
    {id:480,q:"Carretera estreta i ve cotxe:",a:["Accelera","El que pot apartar-se cedeix","Toca clàxon"],ok:1},
    {id:481,q:"Senyal ‘cediu pas’ i no ve ningú:",a:["Para sempre","Redueix, mira, si lliure segueix","Accelera"],ok:1},
    {id:482,q:"Senyal ‘STOP’ i visibilitat bona:",a:["No pares","Aturada total, després mira i segueix","Accelera"],ok:1},
    {id:483,q:"Senyal ‘corba perillosa’:",a:["Mantenir velocitat","Reduir abans d’entrar, no frenar dins","Accelerar a la sortida"],ok:1},
    {id:484,q:"Cotxe lent a carril dret autopista:",a:["Avançar per esquerra","Mantenir carril, no avançar per dreta","Tocar clàxon"],ok:1},
    {id:485,q:"Línia discontínua i ve cotxe de cara:",a:["Avançar ràpid","Esperar, no avançar","Tocar llargues"],ok:1},
    {id:486,q:"Baixada llarga i carregat:",a:["Punt mort","Marxa curta, frenada motor","Frenar constant"],ok:1},
    {id:487,q:"Cotxe avança i no torna al carril:",a:["Tancar-li pas","Reduir, deixar que torni","Accelerar"],ok:1},
    {id:488,q:"Senyal ‘vent lateral’:",a:["Subjectar volant, reduir","Anar igual","Accelerar"],ok:0},
    {id:489,q:"Túnel llarg i embús:",a:["Apagar llums","Llums encesos, distància, sense canviar carril","Avituallament"],ok:1},
    {id:490,q:"Carretera comarcal sense voral:",a:["Circular pel mig","Adherir-te a la dreta, vigilar ciclistes","Avançar a corba"],ok:1},
    {id:491,q:"Cotxe amb remolc balanceja:",a:["Avançar ràpid","Augmentar distància, no provocar corrents aire","Tocar llargues"],ok:1},
    {id:492,q:"Senyal ‘fi autopista’:",a:["Accelerar","Reduir, adaptar a nova via","Seguir igual"],ok:1},
    {id:493,q:"Incorporació i carril ple:",a:["Parar al final","Cedir pas, esperar forat segur","Entrar tallant"],ok:1},
    {id:494,q:"Carretera amb ferm malmès:",a:["Accelerar per sortir","Reduir, agafar volant ferm","Canviar carril brusc"],ok:1},
    {id:495,q:"Cotxe darrere avança en zona prohibida:",a:["Tancar-li pas","Mantenir velocitat, no accelerar","Frenar davant"],ok:1},
    {id:496,q:"Senyal ‘camins creuament’:",a:["Accelerar","Reduir, mirar laterals","Tocar clàxon"],ok:1},
    {id:497,q:"Pont mòbil i s’obre:",a:["Accelerar per passar","Parar abans barrera, respectar senyal","Voltar barrera"],ok:1},
    {id:498,q:"Carretera estreta i bicicleta:",a:["Avançar tocant clàxon","1.5m distància, esperar recta","Avançar a corba"],ok:1},
    {id:499,q:"Senyal ‘animals solts’:",a:["Anar igual","Reduir, mirar vorals","Accelerar"],ok:1},
    {id:500,q:"Cotxe avariat ocupa mig carril:",a:["Passar pegat","Canviar carril o reduir molt","Tocar llargues"],ok:1},
    {id:501,q:"Rectora amb obres i carril desviat:",a:["Seguir GPS","Fer cas senyals taronja, reduir","Anar per voral"],ok:1},
    {id:502,q:"Senyal ‘prohibit avançar’ i vas lent:",a:["Avançar igual","Respectar senyal, no avançar","Tocar clàxon"],ok:1}
  ],
  emergència: [
    {id:503,q:"Ambulància darrere amb llums i so:",a:["Accelera","Aparta’t a dreta i para si cal","Toca clàxon"],ok:1},
    {id:504,q:"Cotxe en flames davant:",a:["Accelera per passar","Para lluny, avisa 112, no t’acostis","Obre capó"],ok:1},
    {id:505,q:"Accident amb ferit a via:",a:["Segueix","Para, senyalitza, avisa 112, no moguis ferit","Mou ferit"],ok:1},
    {id:506,q:"Has punxat roda a autopista:",a:["Para a carril dret","Voral dret, armilla + triangles a 50m","Para a carril esquerra"],ok:1},
    {id:507,q:"Cotxe perd potència i s’atura:",a:["Para al mig","Voral, llums emergència, avisa","Segueix sense gas"],ok:1},
    {id:508,q:"Fum surt motor:",a:["Accelera per arribar","Para, apaga motor, no obris capó immediat","Obre tap refrigerant"],ok:1},
    {id:509,q:"Frenada falla baixant port:",a:["Accelera","Usa frenada motor + voral seguretat","Apaga motor"],ok:1},
    {id:510,q:"Conductor es troba malament:",a:["Segueix","Para segur, truca 112, col·loca en posició lateral segur","Segueix"],ok:1},
    {id:511,q:"Viatger té atac epilèptic:",a:["Accelera","Para segur, protegeix, no el subjectis, truca 112","Segueix"],ok:1},
    {id:512,q:"Cotxe bolca davant:",a:["Accelera per passar","Para lluny, avisa 112, no moguis ocupants","Treu-los tu"],ok:1},
    {id:513,q:"Fuita combustible:",a:["Accelera","Para, apaga motor, no fumis, avisa 112","Fuma per veure d’on surt"],ok:1},
    {id:514,q:"Pedra trenca parabrises:",a:["Accelera","Redueix, para segur, tapa forat si cal","Segueix sense veure"],ok:1},
    {id:515,q:"Airbag salta sense xoc:",a:["Accelera","Para segur, apaga motor","Segueix"],ok:1},
    {id:516,q:"Pneumàtic esclata a 120km/h:",a:["Frena fort","Subjecta volant ferm, redueix gas sense frenar brusc","Frena a fons"],ok:1},
    {id:517,q:"Pedal fre s’enfonsa sense frenar:",a:["Accelera","Frenada motor + fre mà progressiu, voral","Apaga motor en marxa"],ok:1},
    {id:518,q:"Direcció es bloqueja:",a:["Accelera","Para el més ràpid possible segur, llums emergència","Segueix"],ok:1},
    {id:519,q:"Cotxe s’incendia amb gent dins:",a:["Obre tu portes","Ajuda a sortir, truca 112, no arrisquis vida","Segueix"],ok:1},
    {id:520,q:"Vianant atropellat:",a:["Segueix","Para, senyalitza, avisa 112, no moguis","Mou-lo a vorera"],ok:1},
    {id:521,q:"Animal gran envestit i viu a via:",a:["Accelera","Senyalitza, avisa 112, no t’acostis","Treu-lo tu"],ok:1},
    {id:522,q:"Has de socórrer però no saps primers auxilis:",a:["No facis res","Senyalitza, avisa 112, tranquil·litza ferit, espera ajuda","Mou ferit"],ok:1},
    {id:523,q:"Cotxe amb fum blanc dens pel tub:",a:["Accelera","Para segur, apaga motor, avisa grua","Obre tap oli"],ok:1},
    {id:524,q:"Conductor davant s’adorm:",a:["Tocar llargues","Augmentar distància, avisar 112 si perill","Avançar ràpid"],ok:1},
    {id:525,q:"Pedra a la via i no pots esquivar:",a:["Frenar brusc","Subjectar volant, passar per sobre recte","Girar brusc"],ok:1},
    {id:526,q:"Airbag no salta en xoc lleu:",a:["Seguir","Parar, revisar ferits, avisar 112","Tocar clàxon"],ok:1},
    {id:527,q:"Pedal accelerador s’encalla:",a:["Apagar motor en marxa","Punt mort, frenar progressiu, voral","Accelerar més"],ok:1},
    {id:528,q:"Vianant cau a la via:",a:["Accelera per passar","Para, senyalitza, avisa 112","Moure’l tu"],ok:1},
    {id:529,q:"Cotxe amb matrícula estrangera perdut:",a:["Tocar clàxon","Reduir, deixar espai, no pressionar","Avançar pegat"],ok:1},
    {id:530,q:"Bateria es descarrega i cotxe s’atura:",a:["Para al carril","Voral, llums emergència, triangles 50m","Seguir sense llums"],ok:1},
    {id:531,q:"Conductor davant llança objecte:",a:["Accelera per passar","Augmentar distància, avisar si perill","Tocar clàxon"],ok:1},
    {id:532,q:"Roda de recanvi cau del cotxe davant:",a:["Frenar brusc","Reduir, esquivar si segur, avisar","Passar per sobre"],ok:1},
    {id:533,q:"Cotxe amb porta oberta circulant:",a:["Avançar","Tocar clàxon suau, avisar","Ignorar"],ok:1},
    {id:534,q:"Has de fer RCP i no saps:",a:["No fer res","Trucar 112, seguir instruccions operador","Moure ferit"],ok:1},
    {id:535,q:"Cotxe amb fum negre i pèrdua potència:",a:["Accelerar","Para segur, apaga motor","Seguir fins taller"],ok:1},
    {id:536,q:"Vianant sagnant per cap:",a:["Moure’l a vorera","No moure, tapar ferida, avisar 112","Donar aigua"],ok:1},
    {id:537,q:"Cotxe amb llum de fre fosa:",a:["Ignorar","Augmentar distància, avisar amb clàxon lleu","Tocar llargues"],ok:1},
    {id:538,q:"Has d’evacuar cotxe ràpid:",a:["Sortir per finestra","Tallacinturó + trencavidre, sortir ordenat","Obrir porta normal"],ok:0},
    {id:539,q:"Cotxe amb matrícula tapada:",a:["Avançar","Augmentar distància, no perseguir","Tancar-li pas"],ok:1},
    {id:540,q:"Conductor té atac de pànic:",a:["Seguir","Para segur, tranquil·litzar, avisar si cal","Pressionar per seguir"],ok:1},
    {id:541,q:"Senyal acústic continu del cotxe:",a:["Ignorar","Para segur, revisa quadre, avisa grua","Accelerar"],ok:1},
    {id:542,q:"Has de senyalitzar accident de nit:",a:["Posar triangles a 10m","Triangles 50m via, 100m autopista, armilla","Només llums emergència"],ok:1}
  ]
};

// GARATGE - 17 COTXES AMB 6 SUPERCOTXES NOUS
const COTXES = [
  // 3 primers normals, sense filter
  {id:'c1',nom:'SEAT Ibiza',emoji:'🚗',preu:200,cv:90,color:''},
  {id:'c2',nom:'VW Golf GTI',emoji:'🚘',preu:800,cv:220,color:''},
  {id:'c3',nom:'BMW M3',emoji:'🚙',preu:1500,cv:420,color:''},

  // Resta amb efecte TRON i colors cars
  {id:'c4',nom:'Tesla Model S',emoji:'⚡',preu:2000,cv:670,color:'hue-rotate(210deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #00d4ff)'}, // blau elèctric
  {id:'c5',nom:'Porsche 911',emoji:'🏎️',preu:2500,cv:450,color:'hue-rotate(130deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #00ff88)'}, // verd esmeralda
  {id:'c6',nom:'Bugatti Chiron',emoji:'🏎️',preu:5000,cv:1500,color:'hue-rotate(200deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #00c8ff)'}, // blau gel
  {id:'c7',nom:'Yamaha R1',emoji:'🏍️',preu:2200,cv:200,color:'hue-rotate(55deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 8px #ffdd00)'}, // groc or
  {id:'c8',nom:'Ducati Panigale',emoji:'🏍️',preu:2800,cv:220,color:'hue-rotate(25deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #ff8800)'}, // taronja intens
  {id:'c9',nom:'Audi RS6',emoji:'🏎️',preu:3200,cv:600,color:'hue-rotate(180deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #00ffff)'}, // cian
  {id:'c10',nom:'Nissan GTR',emoji:'🏎️',preu:3500,cv:565,color:'hue-rotate(90deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #88ff00)'}, // verd llima
  {id:'c11',nom:'McLaren 720S',emoji:'🏎️',preu:4200,cv:720,color:'hue-rotate(15deg) saturate(2) brightness(1.2) drop-shadow(0 0 6px #ff6600)'}, // taronja foc
  // SUPERCOTXES PREMIO MAJOR amb glow més potent
  {id:'c12',nom:'Ferrari SF90 Stradale',emoji:'🏎️',preu:8500,cv:1000,color:'hue-rotate(0deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #ff0000)'}, // vermell neó
  {id:'c13',nom:'Lamborghini Aventador SVJ',emoji:'🏎️',preu:8000,cv:770,color:'hue-rotate(55deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #ffdd00)'}, // groc or
  {id:'c14',nom:'Koenigsegg Jesko Absolut',emoji:'🏎️',preu:14000,cv:1600,color:'hue-rotate(270deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #aa00ff)'},// violeta royal
  {id:'c15',nom:'Porsche 918 Spyder',emoji:'🏎️',preu:9500,cv:887,color:'hue-rotate(130deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #00ff88)'}, // verd esmeralda
  {id:'c16',nom:'McLaren P1 GTR',emoji:'🏎️',preu:9000,cv:916,color:'hue-rotate(35deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #ff8800)'}, // taronja neó
  {id:'c17',nom:'Bugatti Bolide',emoji:'🏎️',preu:16000,cv:1825,color:'hue-rotate(200deg) saturate(2.5) brightness(1.3) drop-shadow(0 0 10px #00d4ff)'} // blau elèctric
];

const ACCESSORIS = [
  // Mecànica / Potència
  {id:'a1',nom:'Turbo',emoji:'💨',preu:300,hp:50},
  {id:'a2',nom:'Nitro',emoji:'🔥',preu:600,hp:80},
  {id:'a3',nom:'Motor Elèctric',emoji:'⚡',preu:800,hp:100},
  {id:'a4',nom:'Kit Mecànic',emoji:'🛠️',preu:400,hp:40},
  {id:'a5',nom:'Eines Racing',emoji:'🔧',preu:250,hp:20},
  {id:'a6',nom:'Cadena Reforçada',emoji:'⛓️',preu:350,hp:30},
  {id:'a7',nom:'Engranatges Sport',emoji:'⚙️',preu:300,hp:25},
  {id:'a8',nom:'Cargols Racing',emoji:'🔩',preu:200,hp:15},

  // Rodes / Adherència
  {id:'a9',nom:'Pneumàtics Slick',emoji:'🛞',preu:400,hp:35},
  {id:'a10',nom:'Pneumàtics Pluja',emoji:'🛞',preu:350,hp:30},
  {id:'a11',nom:'Cadenes Neu',emoji:'❄️',preu:300,hp:25},
  {id:'a12',nom:'Llandes Racing',emoji:'🔲',preu:500,hp:40},
  {id:'a13',nom:'Eix Equilibrat',emoji:'🎯',preu:250,hp:20},

  // Aerodinàmica / Exterior
  {id:'a14',nom:'Aleró GT',emoji:'🔰',preu:400,hp:40},
  {id:'a15',nom:'Aleró F1',emoji:'🏁',preu:700,hp:70},
  {id:'a16',nom:'Vidres Tintats',emoji:'🪟',preu:200,hp:10},
  {id:'a17',nom:'Llums LED',emoji:'💡',preu:250,hp:15},
  {id:'a18',nom:'Fars Làser',emoji:'🔦',preu:600,hp:50},
  {id:'a19',nom:'Retrovisor Racing',emoji:'🪞',preu:200,hp:10},
  {id:'a20',nom:'Defensa Reforçada',emoji:'🛡️',preu:450,hp:35},

  // Interior / Pilot
  {id:'a21',nom:'Seient Bucket',emoji:'🪑',preu:400,hp:25},
  {id:'a22',nom:'Volant Racing',emoji:'🎛️',preu:350,hp:20},
  {id:'a23',nom:'Quadre Digital',emoji:'📊',preu:500,hp:30},
  {id:'a24',nom:'Guants Pilot',emoji:'🧤',preu:150,hp:10},
  {id:'a25',nom:'Casco Racing',emoji:'🪖',preu:300,hp:15},
  {id:'a26',nom:'Intercom',emoji:'🎧',preu:250,hp:10},

  // Estètica / Detalls Luxe
  {id:'a27',nom:'Vinil Flames',emoji:'🎨',preu:300,hp:10},
  {id:'a28',nom:'Vinil Crom',emoji:'🌈',preu:500,hp:15},
  {id:'a29',nom:'Pintura Metal·litzada',emoji:'✨',preu:600,hp:20},
  {id:'a30',nom:'Cristalls Swarovski',emoji:'💎',preu:1000,hp:5},
  {id:'a31',nom:'Corona Royal',emoji:'👑',preu:800,hp:10},
  {id:'a32',nom:'Unicorn',emoji:'🦄',preu:1200,hp:5},
  {id:'a33',nom:'Coet',emoji:'🚀',preu:600,hp:15},
  {id:'a34',nom:'Diamant',emoji:'💎',preu:1200,hp:5},
  {id:'a35',nom:'Llamp',emoji:'⚡',preu:700,hp:20},
  {id:'a36',nom:'Foc',emoji:'🔥',preu:500,hp:15},

  // Útils / Safety
  {id:'a37',nom:'Extintor',emoji:'🧯',preu:200,hp:5},
  {id:'a38',nom:'Triangle Emergència',emoji:'🔺',preu:150,hp:5},
  {id:'a39',nom:'Armilla Reflectant',emoji:'🦺',preu:150,hp:5},
  {id:'a40',nom:'Powerbank Cotxe',emoji:'🔋',preu:200,hp:5},
  {id:'a41',nom:'Suport Mòbil',emoji:'📱',preu:180,hp:5},
  {id:'a42',nom:'Dashcam',emoji:'🎥',preu:400,hp:10}
];

const EMOJI_BOTIGA = [
  {id:'e1',emoji:'🦄',nom:'Unicorn',preu:1000},
  {id:'e2',emoji:'👑',nom:'Corona',preu:800},
  {id:'e3',emoji:'💎',nom:'Diamant',preu:1200},
  {id:'e4',emoji:'🚀',nom:'Coet',preu:600},
  {id:'e5',emoji:'🔥',nom:'Foc',preu:500},
  {id:'e6',emoji:'⚡',nom:'Llamp',preu:700}
];

// ===== GASDRIVE DGT CAT V9.8.1 - IMAGENES DGT REALES + TIP SIEMPRE + 200 SEÑALES =====
let tipsData = [];
let currentTip = 0;
let tempsIniciTemari = null;
let contadorTemari = null;
let sitCategoriaActiva = 'clima';

// ===== V9.8.1 BANCO DE SVGS ELIMINADO - AHORA USAMOS URL REAL =====
const SENALES_SVG = {}; // YA NO SE USA

// TU BANCO VA AQUI: const senyals = [...] // <- TU YA LO TIENES, NO LO BORRES

// ===== V9.8.1 FUNCIÓN ACTUALIZADA: PINTAR IMAGEN DGT REAL + TIP =====
function pintarImatgeSiExisteix(cat, pregunta) {
  const imgDiv = document.getElementById(`test-${cat}-imagen`) || document.getElementById(`examen-imagen`);
  const emojisDiv = document.getElementById(`test-${cat}-emojis`) || document.getElementById(`examen-emojis`);
  const tipDiv = document.getElementById(`test-${cat}-tip`) || document.getElementById(`examen-tip`);

  if (!imgDiv) return;

  // SI ES SEÑAL: Pintar imagen real de DGT
  if (cat === 'senyals' && pregunta.url) {
    imgDiv.innerHTML = `<img src="${pregunta.url}" alt="Senyal DGT" style="width:100%; height:auto; max-height:220px; object-fit:contain; border-radius:12px; border:3px solid #00D9FF; box-shadow:0 0 25px rgba(0,217,255,0.3);" onerror="this.src='https://www.dgt.es/export/sites/web-DGT/.galleries/senales/peligro/P-25.png'">`;
    imgDiv.style.border = 'none';
    imgDiv.style.boxShadow = 'none';
  }
  // SI NO ES SEÑAL: Deja placeholder
  else {
    imgDiv.innerHTML = `<div class="placeholder">Sense imatge</div>`;
    imgDiv.style.border = '2px dashed rgba(0, 217, 255, 0.3)';
    imgDiv.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.1)';
  }

  // EMOJIS: Desactivados para señales
  if(emojisDiv) {
    emojisDiv.innerHTML = '';
    emojisDiv.style.display = 'none';
  }

  // TIP: MOSTRAR SIEMPRE EN SEÑALES
  if(tipDiv && cat === 'senyals' && pregunta.tip){
    tipDiv.innerHTML = `💡 TIP: ${pregunta.tip}`;
    tipDiv.style.display = 'block';
  } else if(tipDiv) {
    tipDiv.innerHTML = '';
    tipDiv.style.display = 'none';
  }
}

// NUEVO: Total dinámico para cuando metas 800+ preguntas
function getTotalBanco() {
  let total = 0;
  for(let cat in PREGUNTES) total += PREGUNTES[cat].length;
  for(let cat in SITUACIONS) total += SITUACIONS[cat].length;
  return total;
}

const MAPEO_PALABRAS_CLAVE = {
  'velocitat': {subtema: 'Velocitat i Limits', pag: 22}, 'alcohol': {subtema: 'Alcohol i Drogues', pag: 26}, 'drogues': {subtema: 'Alcohol i Drogues', pag: 26},
  'prioritat': {subtema: 'Prioritat i Preferència', pag: 12}, 'rotonda': {subtema: 'Rotondes', pag: 14}, 'cinturó': {subtema: 'Elements Seguretat', pag: 33},
  'mòbil': {subtema: 'Distraccions', pag: 34}, 'distància': {subtema: 'Distància Seguretat', pag: 24}, 'avançar': {subtema: 'Avançaments', pag: 16},
  'semàfor': {subtema: 'Semàfors', pag: 40}, 'stop': {subtema: 'Senyals STOP i Cedeix', pag: 45}, 'cedeix': {subtema: 'Senyals STOP i Cedeix', pag: 45},
  'prohibició': {subtema: 'Senyals Prohibició', pag: 46}, 'perill': {subtema: 'Senyals Perill', pag: 53}, 'punts': {subtema: 'Multes i Punts', pag: 30},
  'multa': {subtema: 'Multes i Punts', pag: 30}, 'itv': {subtema: 'Documentació Vehicle', pag: 38}, 'pneumàtic': {subtema: 'Pneumàtics', pag: 92},
  'oli': {subtema: 'Nivells i Líquids', pag: 88}, 'fre': {subtema: 'Sistema Frenada', pag: 89}, 'RCP': {subtema: 'PCR i Reanimació', pag: 96},
  'hemorràgia': {subtema: 'Hemorràgies', pag: 100}, 'CO2': {subtema: 'Contaminació', pag: 103}, 'ZBE': {subtema: 'Zones Baixes Emissions', pag: 105},
  'pluja': {subtema: 'Conducció Pluja', pag: 110}, 'boira': {subtema: 'Conducció Boira', pag: 111}, 'accident': {subtema: 'Actuació Accident', pag: 115}
};

// SISTEMA PROGRESO V9.4 CON SET Y CAP DIARIO
let PROGRESO = JSON.parse(localStorage.getItem('gd_progreso_v2')) || {
  tests: {
    general: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} },
    senyals: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} },
    normes: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} },
    mecanica: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} },
    auxilis: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} },
    mediambient: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} }
  },
  casos: {
    clima: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} },
    urbà: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} },
    carretera: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} },
    emergència: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} }
  },
  examen: { realitzats: 0, aprovats: 0, historial: [] },
  diesEstudi: new Set()
};

// Convertir datos guardados a Set al iniciar
for(let c in PROGRESO.tests) {
  PROGRESO.tests[c].unicas = new Set(PROGRESO.tests[c].unicas || []);
  PROGRESO.tests[c].dies = PROGRESO.tests[c].dies || {};
}
for(let c in PROGRESO.casos) {
  PROGRESO.casos[c].unicas = new Set(PROGRESO.casos[c].unicas || []);
  PROGRESO.casos[c].dies = PROGRESO.casos[c].dies || {};
}
PROGRESO.diesEstudi = new Set(PROGRESO.diesEstudi || []);

let estat = {
  coins: parseInt(localStorage.getItem('gd_coins')) || 0,
  cotxes: JSON.parse(localStorage.getItem('gd_cotxes')) || ['c1'],
  accessoris: JSON.parse(localStorage.getItem('gd_accessoris')) || [],
  emojis: JSON.parse(localStorage.getItem('gd_emojis')) || [],
  historial: JSON.parse(localStorage.getItem('gd_historial')) || [],
  stats: JSON.parse(localStorage.getItem('gd_stats')) || {
    tempsEstudiatAvui: 0, diaActual: new Date().toISOString().split('T')[0], paseCompletado: false,
    puntsDebils: {}, preguntesFetes: 0, encertsTotals: 0, perCategoria: {}, historialEvolucio: [], historialPregunta: {}
  },
  test: { general: {idx:0,encerts:0,ratxa:0,puntuacio:0}, senyals: {idx:0,encerts:0,ratxa:0,puntuacio:0}, normes: {idx:0,encerts:0,ratxa:0,puntuacio:0}, mecanica: {idx:0,encerts:0,ratxa:0,puntuacio:0}, auxilis: {idx:0,encerts:0,ratxa:0,puntuacio:0}, mediambient: {idx:0,encerts:0,ratxa:0,puntuacio:0} },
  examen: { activa: false, preguntes: [], index: 0, encerts: 0, fallos: 0, timer: null, temps: 1800, categoria: 'general' },
  sit: { clima: {idx:0,encerts:0,puntuacio:0,current:null}, urbà: {idx:0,encerts:0,puntuacio:0,current:null}, carretera: {idx:0,encerts:0,puntuacio:0,current:null}, emergència: {idx:0,encerts:0,puntuacio:0,current:null} }
};

if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }

function init() {
  console.log("GasDrive V9.8.1 CAT carregat");
  autoMapearTotesPreguntes();
  comprovarNouDia();
  iniciarComptadorTemari();
  mostrarIntro();
  actualitzarCoins();
  carregarPregunta('general'); carregarPregunta('senyals'); carregarPregunta('normes'); carregarPregunta('mecanica'); carregarPregunta('auxilis'); carregarPregunta('mediambient');
  carregarSituacio('clima');
  actualitzarMissatgeMotivacional();
}

// GUARDAR: Convertir Set a Array
function guardar() {
  localStorage.setItem('gd_coins', estat.coins);
  localStorage.setItem('gd_cotxes', JSON.stringify(estat.cotxes));
  localStorage.setItem('gd_accessoris', JSON.stringify(estat.accessoris));
  localStorage.setItem('gd_emojis', JSON.stringify(estat.emojis));
  localStorage.setItem('gd_historial', JSON.stringify(estat.historial));
  localStorage.setItem('gd_stats', JSON.stringify(estat.stats));

  const progGuardar = JSON.parse(JSON.stringify(PROGRESO));
  for(let c in progGuardar.tests) progGuardar.tests[c].unicas = [...PROGRESO.tests[c].unicas];
  for(let c in progGuardar.casos) progGuardar.casos[c].unicas = [...PROGRESO.casos[c].unicas];
  progGuardar.diesEstudi = [...PROGRESO.diesEstudi];
  localStorage.setItem('gd_progreso_v2', JSON.stringify(progGuardar));
}

function actualitzarCoins() { const el = document.getElementById('coins'); if(el) el.textContent = `💰 ${estat.coins}`; }

// ===== FUNCIONES PROGRESO REAL =====
function actualizarMetricasTest(categoria, preguntaId, acierto) {
  if(!PROGRESO.tests[categoria]) return;
  const prog = PROGRESO.tests[categoria];
  const avui = estat.stats.diaActual;
  prog.total++;
  if(acierto) prog.aciertos++;
  prog.unicas.add(preguntaId);
  if(!acierto &&!prog.falladas.includes(preguntaId)) prog.falladas.push(preguntaId);
  if(!prog.dies[avui]) prog.dies[avui] = 0;
  prog.dies[avui]++;
  PROGRESO.diesEstudi.add(avui);
  guardar();
}

function actualizarMetricasCaso(subcat, preguntaId, acierto) {
  if(!PROGRESO.casos[subcat]) return;
  const prog = PROGRESO.casos[subcat];
  const avui = estat.stats.diaActual;
  prog.total++;
  if(acierto) prog.aciertos++;
  prog.unicas.add(preguntaId);
  if(!acierto &&!prog.falladas.includes(preguntaId)) prog.falladas.push(preguntaId);
  if(!prog.dies[avui]) prog.dies[avui] = 0;
  prog.dies[avui]++;
  PROGRESO.diesEstudi.add(avui);
  guardar();
}

// ===== V9.4.6 FIX: HISTORIAL SOLO CON ID REAL =====
function registrarHistorialPregunta(preguntaId, acierto) {
  if(!preguntaId) return;
  if(!estat.stats.historialPregunta) estat.stats.historialPregunta = {};
  const avui = new Date().toISOString();
  if(!estat.stats.historialPregunta[preguntaId]) {
    estat.stats.historialPregunta[preguntaId] = { consecutius: 0, ultima: avui };
  }
  if(acierto) estat.stats.historialPregunta[preguntaId].consecutius++;
  else estat.stats.historialPregunta[preguntaId].consecutius = 0;
  estat.stats.historialPregunta[preguntaId].ultima = avui;
  guardar();
} 

// ===== V9.4.6 NUEVA FORMULA ANTI-FARM DURO - CAP DIARIO + CONSTANCIA 40% =====
function calcularPreparacioDGT_V94() {
  const avui = new Date();
  const fa7Dies = new Date(avui.getTime() - 7 * 24 * 60 * 60 * 1000);

  let totalPreg = 0, domina = 0, aprenent = 0;
  let historial = estat.stats.historialPregunta || {};
  for(let cat in PREGUNTES) {
    PREGUNTES[cat].forEach(p => {
      totalPreg++;
      const h = historial[p.id];
      if(!h) return;
      const diesDesdeUltim = (avui - new Date(h.ultima)) / (1000*60*60*24);
      if(h.consecutius >= 3 && diesDesdeUltim < 3) domina++;
      else if((h.consecutius >= 1 && diesDesdeUltim < 7) || diesDesdeUltim < 3) aprenent++;
    });
  }
  let retencioRaw = totalPreg > 0? ((domina * 1.0) + (aprenent * 0.5)) / totalPreg * 100 : 0;
  const retencioAyer = estat.stats.historialEvolucio.length > 0? estat.stats.historialEvolucio[estat.stats.historialEvolucio.length-1].retencio || 0 : 0;
  const retencio = Math.min(retencioRaw, retencioAyer + 3);

  let diesValids = 0;
  PROGRESO.diesEstudi.forEach(dia => {
    let fetesDia = 0, encertsDia = 0, totalDia = 0;
    for(let c in PROGRESO.tests) {
      fetesDia += PROGRESO.tests[c].dies[dia] || 0;
      totalDia += PROGRESO.tests[c].total;
      encertsDia += PROGRESO.tests[c].aciertos;
    }
    const percentDia = totalDia > 0? (encertsDia / totalDia) : 0;
    if(fetesDia >= 30 && fetesDia <= 60 && percentDia >= 0.85) diesValids++;
  });
  let constancia = Math.round((diesValids / 20) * 100);
  if(constancia > 100) constancia = 100;

  let unicas7Dies = new Set();
  for(let cat in PREGUNTES) {
    PREGUNTES[cat].forEach(p => {
      const h = historial[p.id];
      if(h && new Date(h.ultima) >= fa7Dies) unicas7Dies.add(p.id);
    });
  }
  let coberturaRaw = Math.round((unicas7Dies.size / getTotalBanco()) * 100);
  const coberturaAyer = estat.stats.historialEvolucio.length > 0? estat.stats.historialEvolucio[estat.stats.historialEvolucio.length-1].cobertura || 0 : 0;
  const cobertura = Math.min(coberturaRaw, coberturaAyer + 5);

  let maxRatxa = 0, ratxa = 0;
  PROGRESO.examen.historial.forEach(e => {
    if(e.nota >= 27) { ratxa++; maxRatxa = Math.max(maxRatxa, ratxa); }
    else ratxa = 0;
  });
  const estabilitat = maxRatxa >= 6? 100 : Math.round((maxRatxa / 6) * 100);

  const preparacio = Math.round((retencio * 0.3) + (constancia * 0.4) + (cobertura * 0.2) + (estabilitat * 0.1));
  return { preparacio, retencio, constancia, cobertura, estabilitat, domina, aprenent, diesValids, maxRatxa, total: totalPreg };
}

// ===== FIX DEFINITIVO PASE 20 MIN V9.7.3 =====
function iniciarComptadorTemari() {
  if (contadorTemari) clearInterval(contadorTemari);
  comprovarNouDia();
  actualitzarPaseUI();

  contadorTemari = setInterval(() => {
    const vistaTemariActiva = document.getElementById('tab-temari')?.classList.contains('active') ||
                              document.querySelector('.tab-btn.active.emoji')?.textContent.includes('📖') ||
                              document.body.innerText.includes('.pdf');

    if (vistaTemariActiva) {
      if (tempsIniciTemari === null) {
        tempsIniciTemari = Date.now();
        console.log("Timer TEMARI INICIADO");
      } else {
        const ara = Date.now();
        const segundos = (ara - tempsIniciTemari) / 1000;
        if (segundos >= 5) {
          estat.stats.tempsEstudiatAvui += segundos / 60;
          tempsIniciTemari = ara;
          guardar();
          actualitzarPaseUI();
        }
      }

      if (estat.stats.tempsEstudiatAvui >= 20 &&!estat.stats.paseCompletado) {
        estat.stats.paseCompletado = true;
        estat.coins += 50;
        guardar();
        alert(`✅ PASE DESBLOQUEJAT!\nHas estudiat 20 minuts. +50 coins`);
        actualitzarEstadistiques_V94();
      }
    } else {
      if (tempsIniciTemari!== null) {
        const ara = Date.now();
        const segundos = (ara - tempsIniciTemari) / 1000;
        estat.stats.tempsEstudiatAvui += segundos / 60;
        tempsIniciTemari = null;
        guardar();
        actualitzarPaseUI();
        console.log("Timer TEMARI PAUSADO, total:", estat.stats.tempsEstudiatAvui);
      }
    }
  }, 1000);
}

// ===== FIX FECHA LOCAL ESPAÑA =====
function comprovarNouDia() {
  const avui = new Date().toLocaleDateString('ca-ES');
  if(estat.stats.diaActual!== avui) {
    const stats = calcularPreparacioDGT_V94();
    estat.stats.historialEvolucio.push({
      dia: estat.stats.diaActual,
      percent: stats.preparacio,
      retencio: stats.retencio,
      cobertura: stats.cobertura
    });
    if(estat.stats.historialEvolucio.length > 30) estat.stats.historialEvolucio.shift();
    estat.stats.tempsEstudiatAvui = 0;
    estat.stats.diaActual = avui;
    estat.stats.paseCompletado = false;
    tempsIniciTemari = null;
    for(let c in PROGRESO.tests) PROGRESO.tests[c].dies = {};
    for(let c in PROGRESO.casos) PROGRESO.casos[c].dies = {};
    guardar();
    actualitzarPaseUI();
    console.log("NUEVO DIA:", avui);
  }
}

function actualitzarPaseUI() {
  const minuts = Math.floor(estat.stats.tempsEstudiatAvui || 0);
  const el = document.getElementById('pase-temps');
  if(el) el.textContent = `${minuts} min`;

  const msg = document.getElementById('stats-motivacio');
  if(msg) {
    if(estat.stats.paseCompletado) msg.textContent = "Pase Actiu. A practicar 💪";
    else {
      const falten = Math.max(0, 20 - minuts);
      msg.textContent = `Estudia ${falten} minuts més al TEMARI per desbloquejar`;
    }
  }
}

// ===== AUTO-MAPEO CON ID =====
function autoMapearTotesPreguntes() {
  let idCounter = 1;
  for(let cat in PREGUNTES) {
    PREGUNTES[cat] = PREGUNTES[cat].map(p => {
      let subtema = 'General'; let pag = 1;
      for(let key in MAPEO_PALABRAS_CLAVE) { if(p.q.toLowerCase().includes(key)) { subtema = MAPEO_PALABRAS_CLAVE[key].subtema; pag = MAPEO_PALABRAS_CLAVE[key].pag; break; } }
      return {...p, id: p.id || idCounter++, subtema, pag};
    });
  }
  console.log('✅ BANCO MAPEADO CON ID. Total:', getTotalBanco());
}

// ===== PUNTOS DEBILS V9.4.6 =====
function registrarFallada(categoria, subtema, pagina) {
  if(!subtema || subtema === 'undefined') subtema = 'General';
  if(!pagina) pagina = 1;
  if(!estat.stats.puntsDebils) estat.stats.puntsDebils = {};
  if(!estat.stats.puntsDebils[categoria]) estat.stats.puntsDebils[categoria] = {};
  if(!estat.stats.puntsDebils[categoria][subtema]) { estat.stats.puntsDebils[categoria][subtema] = {fallos: 0, pag: pagina}; }
  estat.stats.puntsDebils[categoria][subtema].fallos++; guardar();
}

function dibuixarPuntsDebils_V94() {
  const cont = document.getElementById('stats-debils-lista'); if(!cont) return;
  cont.innerHTML = '<h3 style="margin-bottom:15px; color:#00D9FF">📍 ON HAS DE MILLORAR ARA MATEIX</h3>';
  if(!estat.stats.puntsDebils || Object.keys(estat.stats.puntsDebils).length === 0) { cont.innerHTML += '<div style="text-align:center;color:#999">Fes més tests per detectar els teus punts dèbils</div>'; return; }
  const categories = ['senyals','normes','mecanica','auxilis','mediambient'];
  const noms = ['🚦 SENYALS','📋 NORMES','⚙️ MECÀNICA','🚑 AUXILIS','♻️ MEDI AMBIENT'];
  const temari = ['TEMARI 1','TEMARI 2','TEMARI 4','TEMARI 3','TEMARI 5'];
  categories.forEach((cat, i) => {
    if(!estat.stats.puntsDebils[cat]) {
      cont.innerHTML += `<div style="margin-bottom:15px; padding:12px; background:#1a1a1a; border-radius:8px;"><div style="font-weight:700; color:#00D9FF">${noms[i]}</div><div style="color:#666">Encara no tens dades</div></div>`;
      return;
    }
    let maxFallos = 0; let pitjorSubtema = 'General'; let pag = 1;
    for(let sub in estat.stats.puntsDebils[cat]) { if(estat.stats.puntsDebils[cat][sub].fallos > maxFallos) { maxFallos = estat.stats.puntsDebils[cat][sub].fallos; pitjorSubtema = sub || 'General'; pag = estat.stats.puntsDebils[cat][sub].pag || 1; } }
    cont.innerHTML += `<div style="margin-bottom:15px; padding:12px; background:#1a1a1a; border-left:4px solid #FFD700; border-radius:8px;"><div style="font-weight:700; color:#00D9FF; margin-bottom:6px">${noms[i]}</div><div>El teu punt dèbil: <b>"${pitjorSubtema}"</b></div><div style="color:#999; font-size:13px">Recomanació: Repassa <b>${temari[i]}</b> - Pàgina <b>${pag}</b></div></div>`;
  });
  const stats = calcularPreparacioDGT_V94();
  if(stats.aprenent > 0) {
    cont.innerHTML += `<div style="margin-top:15px; padding:12px; background:#3d1f1f; border-radius:8px; color:#ff6b6b; font-weight:600">⚠️ ALERTA: Tens ${stats.aprenent} preguntes que perdran memòria en 3 dies</div>`;
  }
}

function anarAPagina(pagina) { canviarTab_V94(null, 'temari'); alert(`Obre el TEMARI a la Pàgina ${pagina}`); }

// ===== STATS REALES V9.4.6 =====
function actualitzarEstadistiques_V94() {
  const tab = document.getElementById('tab-estadistiques');
  if(!tab ||!tab.classList.contains('active')) return;
  const stats = calcularPreparacioDGT_V94();
  document.getElementById('stats-global-percent').textContent = stats.preparacio + '%';
  document.getElementById('stats-global-bar').style.width = stats.preparacio + '%';
  document.getElementById('stats-domini-percent').textContent = stats.retencio + '%';
  document.getElementById('stats-domini-bar').style.width = stats.retencio + '%';
  document.getElementById('stats-constancia-percent').textContent = stats.constancia + '%';
  document.getElementById('stats-constancia-bar').style.width = stats.constancia + '%';
  document.getElementById('stats-constancia-label').textContent = `CONSTÀNCIA: ${stats.diesValids}/20 dies vàlids`;
  document.getElementById('stats-temari-percent').textContent = stats.cobertura + '%';
  document.getElementById('stats-temari-bar').style.width = stats.cobertura + '%';
  document.getElementById('stats-simulacres-percent').textContent = stats.estabilitat + '%';
  document.getElementById('stats-simulacres-bar').style.width = stats.estabilitat + '%';
  document.getElementById('stats-examen-aprobados').textContent = `Millor ratxa: ${stats.maxRatxa}/6 aprovats seguits`;
  dibujarGraficaEvolucion();
  dibuixarPuntsDebils_V94();
  const btnDGT = document.getElementById('btn-dgt-oficial');
  if(btnDGT){ btnDGT.style.opacity = stats.preparacio >= 90? '1' : '0.4'; btnDGT.style.pointerEvents = stats.preparacio >= 90? 'auto' : 'none'; }
}

function getDadesEvolucio() { return estat.stats.historialEvolucio.map(h => ({dia: h.dia.split('-')[2], global: h.percent})); }
function potFerTests() { comprovarNouDia(); return estat.stats.paseCompletado; }
function mostrarPopupPase() { const minutsQueFalten = Math.max(0, 20 - Math.floor(estat.stats.tempsEstudiatAvui)); alert(`⛔ PASE BLOQUEJAT\nEstudia ${minutsQueFalten} minuts més al TEMARI per desbloquejar els tests d'avui.`); }
function barrejarArray(arr) { const a = arr.slice(); for(let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// ===== TEST / CASOS / EXAMEN =====
function carregarPregunta(cat) {
  const s = estat.test[cat];
  const preguntes = barrejarArray(PREGUNTES[cat]);
  if(!preguntes || preguntes.length === 0) return;
  const pOriginal = preguntes[s.idx % preguntes.length];

  // V9.8.1 LIMPIO: Solo formato nuevo q,a,ok
  const opcionsOriginales = pOriginal.a;
  const indexCorrectaOriginal = pOriginal.ok;
  const textCorrecte = opcionsOriginales[indexCorrectaOriginal];

  const opcionsBarrejades = barrejarArray(opcionsOriginales);
  const nouIndexCorrecte = opcionsBarrejades.indexOf(textCorrecte);
  const p = {...pOriginal, a: opcionsBarrejades, ok: nouIndexCorrecte, q: pOriginal.q, id: pOriginal.id || (cat + '_' + s.idx)};
  s.current = p;

  pintarImatgeSiExisteix(cat, p);

  document.getElementById(`test-${cat}-pregunta`).textContent = p.q;
  document.getElementById(`test-${cat}-aciertos`).textContent = s.encerts;
  document.getElementById(`test-${cat}-racha`).textContent = s.ratxa;
  document.getElementById(`test-${cat}-score`).textContent = s.puntuacio;
  document.getElementById(`test-${cat}-progress`).style.width = `${((s.idx % preguntes.length)/preguntes.length)*100}%`;
  const cont = document.getElementById(`test-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`test-${cat}-feedback`).textContent = '';
  const btnSig = document.getElementById(`btn-sig-test-${cat}`);
  btnSig.disabled = true;
  btnSig.style.opacity = '0.4';
  btnSig.style.cursor = 'not-allowed';
  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { respondreTest_V94(cat, i, this); };
    cont.appendChild(div);
  });
}

function respondreTest_V94(cat, idx, el) {
  if(!potFerTests()) return mostrarPopupPase();
  const s = estat.test[cat];
  const p = s.current;
  const cont = document.getElementById(`test-${cat}-opciones`);
  if(cont.querySelector('.correcta') || cont.querySelector('.incorrecta')) return;
  cont.querySelectorAll('.opcio').forEach(o => o.classList.add('bloquejada'));
  const correcte = idx === p.ok;
  const preguntaId = p.id;
  if(correcte) {
    el.classList.add('correcta');
    s.encerts++;
    s.ratxa++;
    s.puntuacio += 10 + (s.ratxa * 2);
    estat.coins += 5;
    document.getElementById(`test-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`test-${cat}-feedback`).textContent = `✅ CORRECTE! +${10+(s.ratxa*2)} pts`;
    mostrarEmoji(true, el);
  }
  else {
    el.classList.add('incorrecta');
    cont.querySelectorAll('.opcio')[p.ok].classList.add('correcta');
    document.getElementById(`test-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`test-${cat}-feedback`).textContent = '❌ FALLO';
    mostrarEmoji(false, el);
    s.ratxa = 0;
    registrarFallada(cat, p.subtema, p.pag);
  }
  actualizarMetricasTest(cat, preguntaId, correcte);
  registrarHistorialPregunta(preguntaId, correcte);
  const btnSig = document.getElementById(`btn-sig-test-${cat}`);
  btnSig.disabled = false;
  btnSig.style.opacity = '1';
  btnSig.style.cursor = 'pointer';
  actualitzarCoins();
  guardar();
}

function seguentTest(e, cat) {
  e.preventDefault();
  estat.test[cat].idx++;
  carregarPregunta(cat);
}

//... AQUI SIGUE TODO TU CODIGO IGUAL: carregarSituacio, examen, garage, etc...
// NO TOQUE NADA MAS PARA NO ROMPER

function carregarSituacio(cat) {
  if(!cat) cat = sitCategoriaActiva;
  const s = estat.sit[cat];
  const casos = barrejarArray(SITUACIONS[cat]);
  if(!casos || casos.length === 0) return;
  const pOriginal = casos[s.idx % casos.length];
  const opcionsBarrejades = barrejarArray(pOriginal.a);
  const textCorrecte = pOriginal.a[pOriginal.ok];
  const nouIndexCorrecte = opcionsBarrejades.indexOf(textCorrecte);
  const p = {...pOriginal, a: opcionsBarrejades, ok: nouIndexCorrecte};
  s.current = p;
  document.getElementById(`sit-${cat}-pregunta`).textContent = p.q;
  document.getElementById(`sit-${cat}-aciertos`).textContent = s.encerts;
  document.getElementById(`sit-${cat}-score`).textContent = s.puntuacio;
  document.getElementById(`sit-${cat}-progress`).style.width = `${((s.idx % casos.length)/casos.length)*100}%`;
  const cont = document.getElementById(`sit-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`sit-${cat}-feedback`).textContent = '';
  const btnSig = document.getElementById(`btn-sig-sit-${cat}`);
  btnSig.disabled = true;
  btnSig.style.opacity = '0.4';
  btnSig.style.cursor = 'not-allowed';
  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { respondreSituacio_V94(cat, i, this); };
    cont.appendChild(div);
  });
}

function respondreSituacio_V94(cat, idx, el) {
  if(!potFerTests()) return mostrarPopupPase();
  const s = estat.sit[cat];
  const p = s.current;
  const cont = document.getElementById(`sit-${cat}-opciones`);
  if(cont.querySelector('.correcta') || cont.querySelector('.incorrecta')) return;
  cont.querySelectorAll('.opcio').forEach(o => o.classList.add('bloquejada'));
  const correcte = idx === p.ok;
  const preguntaId = p.id;
  if(correcte) {
    el.classList.add('correcta');
    s.encerts++;
    s.puntuacio += 15;
    estat.coins += 10;
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`sit-${cat}-feedback`).textContent = `✅ CORRECTE! +15 pts`;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    cont.querySelectorAll('.opcio')[p.ok].classList.add('correcta');
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`sit-${cat}-feedback`).textContent = '❌ FALLO';
    mostrarEmoji(false, el);
    registrarFallada('examen', p.subtema, p.pag);
  }
  actualizarMetricasCaso(cat, preguntaId, correcte);
  registrarHistorialPregunta(preguntaId, correcte);
  const btnSig = document.getElementById(`btn-sig-sit-${cat}`);
  btnSig.disabled = false;
  btnSig.style.opacity = '1';
  btnSig.style.cursor = 'pointer';
  actualitzarCoins();
  guardar();
}

function seguentSituacio(e, cat) {
  e.preventDefault();
  estat.sit[cat].idx++;
  carregarSituacio(cat);
}

function iniciarExamen(e) {
  if(!potFerTests()) return mostrarPopupPase();
  const totes = [...PREGUNTES.general,...PREGUNTES.senyals,...PREGUNTES.normes,...PREGUNTES.mecanica,...SITUACIONS.clima];
  if(totes.length < 30) { alert('Falten preguntes. Necessites 30 mínim.'); return; }
  estat.examen.preguntes = barrejarArray(totes).slice(0, 30);
  estat.examen.activa = true;
  estat.examen.index = 0;
  estat.examen.encerts = 0;
  estat.examen.fallos = 0;
  estat.examen.categoria = 'general';
  document.getElementById('btn-iniciar-examen').style.display = 'none';
  document.getElementById('btn-sig-examen').style.display = 'block';
  iniciarTimerExamen();
  carregarPreguntaExamen();
}

function iniciarTimerExamen() {
  clearInterval(estat.examen.timer);
  estat.examen.temps = 1800;
  estat.examen.timer = setInterval(() => {
    estat.examen.temps--;
    const min = Math.floor(estat.examen.temps / 60);
    const seg = estat.examen.temps % 60;
    document.getElementById('examen-timer').textContent = `${min.toString().padStart(2,'0')}:${seg.toString().padStart(2,'0')}`;
    if(estat.examen.temps <= 0) finalitzarExamen();
  }, 1000);
}

function carregarPreguntaExamen() {
  if(estat.examen.index >= 30) return finalitzarExamen();
  const pOriginal = estat.examen.preguntes[estat.examen.index];

  // V9.8.0 LIMPIO: Solo formato nuevo q,a,ok
  const opcionsOriginales = pOriginal.a;
  const indexCorrectaOriginal = pOriginal.ok;
  const textCorrecte = opcionsOriginales[indexCorrectaOriginal];

  const opcionsBarrejades = barrejarArray(opcionsOriginales);
  const nouIndexCorrecte = opcionsBarrejades.indexOf(textCorrecte);
  const p = {...pOriginal, a: opcionsBarrejades, ok: nouIndexCorrecte, q: pOriginal.q, id: pOriginal.id || ('examen_' + estat.examen.index)};
  estat.examen.preguntes[estat.examen.index] = p;

  pintarImatgeSiExisteix('examen', p);

  document.getElementById('examen-num').textContent = estat.examen.index + 1;
  document.getElementById('examen-aciertos').textContent = estat.examen.encerts;
  document.getElementById('examen-progress').style.width = `${(estat.examen.index/30)*100}%`;
  document.getElementById('examen-pregunta').textContent = p.q;
  const cont = document.getElementById('examen-opciones');
  cont.innerHTML = '';
  const btnSig = document.getElementById('btn-sig-examen');
  btnSig.disabled = true;
  btnSig.style.opacity = '0.4';
  btnSig.style.cursor = 'not-allowed';
  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { respondreExamen(i, this); };
    cont.appendChild(div);
  });
}

function respondreExamen(idx, el) {
  const p = estat.examen.preguntes[estat.examen.index];
  const cont = document.getElementById('examen-opciones');
  if(cont.querySelector('.correcta') || cont.querySelector('.incorrecta')) return;
  cont.querySelectorAll('.opcio').forEach(o => o.classList.add('bloquejada'));
  const correcte = idx === p.ok;
  if(correcte) {
    el.classList.add('correcta');
    estat.examen.encerts++;
    estat.coins += 20;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    cont.querySelectorAll('.opcio')[p.ok].classList.add('correcta');
    estat.examen.fallos++;
    mostrarEmoji(false, el);
    registrarFallada('examen', p.subtema, p.pag);
  }
  const btnSig = document.getElementById('btn-sig-examen');
  btnSig.disabled = false;
  btnSig.style.opacity = '1';
  btnSig.style.cursor = 'pointer';
  document.getElementById('examen-aciertos').textContent = estat.examen.encerts;
  actualitzarCoins();
  guardar();
}

function seguentPreguntaExamen(e) {
  e.preventDefault();
  estat.examen.index++;
  if(estat.examen.index >= 30) { finalitzarExamen(); }
  else { carregarPreguntaExamen(); }
}

function finalitzarExamen() {
  clearInterval(estat.examen.timer);
  estat.examen.activa = false;
  const nota = estat.examen.encerts;
  const aprovat = nota >= 27;
  PROGRESO.examen.realitzats++;
  if(aprovat) PROGRESO.examen.aprovats++;
  PROGRESO.examen.historial.push({data: estat.stats.diaActual, nota});
  guardar();
  const res = document.getElementById('examen-resultat');
  res.style.display = 'block';
  if(aprovat) {
    res.innerHTML = `<h2 style="color:#2ecc71">✅ APROVAT!</h2><p style="font-size:24px">${nota}/30</p><p>Encerts: ${nota} | Fallos: ${estat.examen.fallos}</p><p>Has guanyat +${nota*20} coins</p><button class="btn" onclick="reiniciarExamen()">Fer un altre examen</button>`;
    estat.coins += nota * 20;
  } else {
    res.innerHTML = `<h2 style="color:#e74c3c">❌ SUSPÈS</h2><p style="font-size:24px">${nota}/30</p><p>Encerts: ${nota} | Fallos: ${estat.examen.fallos}</p><p>Necessites 27 encerts mínim</p><button class="btn" onclick="reiniciarExamen()">Tornar a provar</button>`;
  }
  actualitzarCoins();
  guardar();
  actualitzarEstadistiques_V94();
}

function reiniciarExamen() {
  document.getElementById('examen-resultat').style.display = 'none';
  document.getElementById('btn-iniciar-examen').style.display = 'block';
  document.getElementById('btn-sig-examen').style.display = 'none';
  document.getElementById('examen-pregunta').textContent = "Prem Inicia l'Examen";
  document.getElementById('examen-opciones').innerHTML = '';
  document.getElementById('examen-num').textContent = '0';
  document.getElementById('examen-aciertos').textContent = '0';
  document.getElementById('examen-progress').style.width = '0%';
  document.getElementById('examen-timer').textContent = '30:00';
}

// ===== GARAGE, BOTIGA, TIPS, TEMARI =====
function carregarGaratge() {
  const cont = document.getElementById('garage-lista');
  cont.innerHTML = '';
  let hpTotal = 90;
  estat.accessoris.forEach(id => {
    const acc = ACCESSORIS.find(a => a.id === id);
    if(acc) hpTotal += acc.hp;
  });
  document.getElementById('garage-score').textContent = `🏎️ ${hpTotal} CV`;
  COTXES.forEach(cotxe => {
    const desbloquejat = estat.cotxes.includes(cotxe.id);
    const div = document.createElement('div');
    div.className = 'garage-car' + (desbloquejat? '' : ' locked');
    div.innerHTML = `<div style="font-size:40px; filter:${cotxe.color}">${cotxe.emoji}</div><div>${cotxe.nom}</div><div style="color:#667eea">${cotxe.cv} CV</div>${!desbloquejat? `<button class="btn-buy" onclick="comprarCotxe('${cotxe.id}')">Comprar ${cotxe.preu}💰</button>` : '<div style="color:#2ecc71">✓ Propietari</div>'}`;
    cont.appendChild(div);
  });
}

function comprarCotxe(id) {
  const cotxe = COTXES.find(c => c.id === id);
  if(!cotxe) return;
  if(estat.coins < cotxe.preu) { alert('No tens prous coins'); return; }
  estat.coins -= cotxe.preu;
  estat.cotxes.push(id);
  guardar();
  actualitzarCoins();
  carregarGaratge();
}

function carregarBotiga() {
  const cont = document.getElementById('emoji-tienda');
  cont.innerHTML = '';
  ACCESSORIS.forEach(acc => {
    const comprat = estat.accessoris.includes(acc.id);
    const div = document.createElement('div');
    div.className = 'emoji-item' + (comprat? ' locked' : '');
    div.innerHTML = `<div style="font-size:40px">${acc.emoji}</div><div>${acc.nom}</div><div style="color:#667eea">+${acc.hp} CV</div>${!comprat? `<button class="btn-buy" onclick="comprarAccessoris('${acc.id}')">Comprar ${acc.preu}💰</button>` : '<div style="color:#2ecc71">✓ Comprat</div>'}`;
    cont.appendChild(div);
  });
  EMOJI_BOTIGA.forEach(emoji => {
    const comprat = estat.emojis.includes(emoji.id);
    const div = document.createElement('div');
    div.className = 'emoji-item' + (comprat? ' locked' : '');
    div.innerHTML = `<div style="font-size:40px">${emoji.emoji}</div><div>${emoji.nom}</div><div style="color:#667eea">Cosmètic</div>${!comprat? `<button class="btn-buy" onclick="comprarEmoji('${emoji.id}')">Comprar ${emoji.preu}💰</button>` : '<div style="color:#2ecc71">✓ Comprat</div>'}`;
    cont.appendChild(div);
  });
}

function comprarAccessoris(id) {
  const acc = ACCESSORIS.find(a => a.id === id);
  if(!acc) return;
  if(estat.coins < acc.preu) { alert('No tens prous coins'); return; }
  estat.coins -= acc.preu;
  estat.accessoris.push(id);
  guardar();
  actualitzarCoins();
  carregarBotiga();
}

function comprarEmoji(id) {
  const emoji = EMOJI_BOTIGA.find(e => e.id === id);
  if(!emoji) return;
  if(estat.coins < emoji.preu) { alert('No tens prous coins'); return; }
  estat.coins -= emoji.preu;
  estat.emojis.push(id);
  guardar();
  actualitzarCoins();
  carregarBotiga();
}

function carregarTips() { tipsData = TIPS; currentTip = 0; mostrarTip(); }
function mostrarTip() { if (tipsData.length === 0) return; const tip = tipsData[currentTip]; document.getElementById('tip-content').innerHTML = `<div class="tip-emoji">${tip.emoji}</div><div class="tip-text">${tip.txt}</div>`; document.getElementById('tip-counter').textContent = `${currentTip + 1} / ${tipsData.length}`; }
function nextTip(e) { currentTip = (currentTip + 1) % tipsData.length; mostrarTip(); }
function prevTip(e) { currentTip = (currentTip - 1 + tipsData.length) % tipsData.length; mostrarTip(); }

function carregarTemari() {
  const container = document.getElementById('temari-lista');
  container.innerHTML = `
    <div class="temari-item" onclick="obrirPDF('./01_Senyals_Tomo_I_RD_465_2025.pdf')"><div style="font-size:40px">🚦</div><div>Senyals</div></div>
    <div class="temari-item" onclick="obrirPDF('./02_Normes_Circulacio_Tomo_II_Edicio_2024.pdf')"><div style="font-size:40px">📋</div><div>Normes</div></div>
    <div class="temari-item" onclick="obrirPDF('./03_Manual_IX_Primers_Auxilis_2025.pdf')"><div style="font-size:40px">🚑</div><div>Auxilis</div></div>
    <div class="temari-item" onclick="obrirPDF('./04_Manual_VIII_Mecanica_2024.pdf')"><div style="font-size:40px">⚙️</div><div>Mecanica</div></div>
    <div class="temari-item" onclick="obrirPDF('./05_Medi_Ambient_Distintius_DGT_2025.pdf')"><div style="font-size:40px">♻️</div><div>Medi Ambient</div></div>
  `;
}

function obrirPDF(ruta) {
  const modal = document.createElement('div');
  modal.id = 'pdf-modal';
  modal.style.cssText = `position:fixed;top:0;left:0;right:0;bottom:0;background:#0a0a0a;z-index:9999;display:flex;flex-direction:column;`;
  modal.innerHTML = `<div style="background:#1a1a1a;padding:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #333"><button onclick="tancarPDF()" style="background:none;border:none;color:#00D9FF;font-size:16px;font-weight:700">← Tornar</button><div style="color:#fff;font-size:15px;font-weight:700">Temari DGT</div><div style="width:60px"></div></div><iframe src="${ruta}" style="flex:1;border:none;width:100%"></iframe>`;
  document.body.appendChild(modal);
}

function tancarPDF() { const modal = document.getElementById('pdf-modal'); if(modal) modal.remove(); }

// ===== GRAFICA EVOLUCIO =====
function dibujarGraficaEvolucion() {
  const canvas = document.getElementById('grafica-evolucion');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const dades = getDadesEvolucio();
  if(canvas.width === 0) canvas.width = canvas.offsetWidth;
  if(canvas.height === 0) canvas.height = 200;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if(dades.length === 0){
    ctx.fillStyle = '#666'; ctx.font = '14px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('Fes tests 2 dies per veure l\'evolució', canvas.width/2, canvas.height/2); return;
  }
  ctx.strokeStyle = '#333'; ctx.lineWidth = 1;
  for(let i = 0; i <= 4; i++) {
    const y = 30 + (i * (canvas.height-60)/4);
    ctx.beginPath(); ctx.moveTo(30, y); ctx.lineTo(canvas.width-30, y); ctx.stroke();
    ctx.fillStyle = '#666'; ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText((100 - i*25) + '%', 5, y+3);
  }
  ctx.strokeStyle = '#00D9FF'; ctx.lineWidth = 3; ctx.beginPath();
  dades.forEach((d,i)=>{
    const x = 30 + (i * (canvas.width-60)/Math.max(1, dades.length-1));
    const y = canvas.height - 30 - (d.global/100 * (canvas.height-60));
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.stroke();
  dades.forEach((d,i)=>{
    const x = 30 + (i * (canvas.width-60)/Math.max(1, dades.length-1));
    const y = canvas.height - 30 - (d.global/100 * (canvas.height-60));
    ctx.fillStyle = '#00D9FF'; ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(d.dia, x, canvas.height-10); ctx.fillText(d.global+'%', x, y-10);
  });
}

function actualitzarMissatgeMotivacional() { const missatges = ["Vas per bon camí 💪","Cada fallo et fa més fort 🔥","L'examen DGT és teu 🚗","No paris ara 💎","Concentra't i aprovaràs 👑"]; const msg = missatges[Math.floor(Math.random() * missatges.length)]; const el = document.getElementById('motivacio'); if(el) el.textContent = msg; }

// ===== V9.8.0 FIX: CANVIAR TABS =====
function canviarTab_V94(e, tab) {
  const tabTemari = document.getElementById('tab-temari');
  if(tabTemari && tabTemari.classList.contains('active') && tempsIniciTemari!== null) {
    const minutsPassats = (Date.now() - tempsIniciTemari) / 1000 / 60;
    estat.stats.tempsEstudiatAvui += minutsPassats;
    tempsIniciTemari = null;
    guardar();
  }

  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  if(e) e.target.closest('.tab-btn').classList.add('active');

  if(tab === 'garage') carregarGaratge();
  if(tab === 'tienda') carregarBotiga();
  if(tab === 'tips') carregarTips();
  if(tab === 'temari') {
    carregarTemari();
    iniciarComptadorTemari();
  }
  if(tab === 'test') carregarPregunta('general');
  if(tab === 'situaciones') carregarSituacio(sitCategoriaActiva);
  if(tab === 'estadistiques') {
    actualitzarEstadistiques_V94();
    actualitzarPaseUI();
  }
  if(['test', 'situaciones', 'examen'].includes(tab) &&!potFerTests()) { mostrarPopupPase(); }
}

function canviarSubTab(e, tab, subtab) {
  const tabId = tab === 'sit'? 'situaciones' : tab === 'stats'? 'estadistiques' : tab;
  const contenidor = document.getElementById('tab-' + tabId);
  contenidor.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
  contenidor.querySelectorAll('.sub-content').forEach(c => c.classList.remove('active'));
  e.target.classList.add('active');
  document.getElementById(`${tab === 'test'? 'test' : tab === 'stats'? 'stats' : 'sit'}-${subtab}`).classList.add('active');
  if(tab === 'test') carregarPregunta(subtab);
  if(tab === 'sit') carregarSituacio(subtab);
  if(tab === 'stats') actualitzarEstadistiques_V94();
  if(tab === 'test' &&!potFerTests()) { setTimeout(() => { document.querySelectorAll('.opcio').forEach(o => o.style.pointerEvents = 'none'); }, 100); }
}

function mostrarEmoji(encert, element) {
  const llista = encert? EMOJIS_ENCERT : EMOJIS_FALLO;
  const emoji = llista[Math.floor(Math.random() * llista.length)];
  const span = document.createElement('span');
  span.textContent = emoji;
  span.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:32px;animation:bounceIn 0.4s;pointer-events:none;z-index:999;';
  element.style.position = 'relative';
  element.appendChild(span);
  setTimeout(() => span.remove(), 600);
  if(navigator.vibrate) navigator.vibrate(encert? [30,20,30] : 100);
}

// ===== SERVICE WORKER =====
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(reg => console.log('SW registrat')).catch(err => console.log('SW error:', err));
  });
}
