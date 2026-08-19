// GASDRIVE DGT V8.14 CAT - 630 PREGUNTES DGT 2026
const VERSION = "9.8.4";

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
// ========= PERILL P-1 A P-30 =========
{ id: "P-1a", categoria: "perill", pregunta: "Què indica aquesta senyal P-1a de PERILL?", opcions: ["Intersecció amb prioritat a la dreta", "Cedeix el pas", "Stop"], correcta: 0, codi: "P-1a", nombre_senal: "INTERSECCION CON PRIORIDAD SOBRE LA DERECHA", tip: "💡 CLAU: Els triangles avisen de perill. Si està buit vol dir que TU tens prioritat. Però redueix igual.", audio: "Senyal P-1a de perill. Intersecció amb prioritat a la dreta.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-1b", categoria: "perill", pregunta: "Què indica aquesta senyal P-1b de PERILL?", opcions: ["Intersecció amb prioritat a l'esquerra", "Cedeix el pas", "Stop"], correcta: 0, codi: "P-1b", nombre_senal: "INTERSECCION CON PRIORIDAD SOBRE LA IZQUIERDA", tip: "💡 CLAU: Igual que la de la dreta. Triangle = alerta. Tu passes primer sobre els que venen de l'esquerra.", audio: "Senyal P-1b de perill. Intersecció amb prioritat a l'esquerra.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-1c", categoria: "perill", pregunta: "Què indica aquesta senyal P-1c de PERILL?", opcions: ["Intersecció amb prioritat sobre ambdós costats", "Rotonda", "Cedeix el pas"], correcta: 0, codi: "P-1c", nombre_senal: "INTERSECCION CON PRIORIDAD SOBRE AMBOS LADOS", tip: "💡 CLAU: Cruïlla en X o +. Tens prioritat sobre els 2 costats. Vigila igual.", audio: "Senyal P-1c de perill. Intersecció amb prioritat sobre ambdós costats.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-2", categoria: "perill", pregunta: "Què indica aquesta senyal P-2 de PERILL?", opcions: ["Intersecció amb via a la dreta", "Intersecció amb via a l'esquerra", "Cedeix el pas"], correcta: 0, codi: "P-2", nombre_senal: "INTERSECCION CON VIA A LA DERECHA", tip: "💡 CLAU: Tu NO tens prioritat. Vigila el vehicle que s'incorpora per la dreta.", audio: "Senyal P-2 de perill. Intersecció amb via a la dreta.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-3", categoria: "perill", pregunta: "Què indica aquesta senyal P-3 de PERILL?", opcions: ["Intersecció amb via a l'esquerra", "Intersecció amb via a la dreta", "Cedeix el pas"], correcta: 0, codi: "P-3", nombre_senal: "INTERSECCION CON VIA A LA IZQUIERDA", tip: "💡 CLAU: Igual que P-2 però per l'esquerra. Vigila els que s'incorporen.", audio: "Senyal P-3 de perill. Intersecció amb via a l'esquerra.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-4", categoria: "perill", pregunta: "Què indica aquesta senyal P-4 de PERILL?", opcions: ["Intersecció amb via a ambdós costats", "Rotonda", "Cedeix el pas"], correcta: 0, codi: "P-4", nombre_senal: "INTERSECCION CON VIA A AMBOS LADOS", tip: "💡 CLAU: Perill per dreta i esquerra. Redueix i extrema precaució.", audio: "Senyal P-4 de perill. Intersecció amb via a ambdós costats.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-5", categoria: "perill", pregunta: "Què indica aquesta senyal P-5 de PERILL?", opcions: ["Rotonda", "Cedeix el pas", "Stop"], correcta: 0, codi: "P-5", nombre_senal: "ROTONDA", tip: "💡 CLAU: Fons groc = Perill. Dins la rotonda tens prioritat si no hi ha senyal R-1.", audio: "Senyal P-5 de perill. Rotonda.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-6", categoria: "perill", pregunta: "Què indica aquesta senyal P-6 de PERILL?", opcions: ["Pas a nivell amb barreres", "Tren", "Cedeix el pas"], correcta: 0, codi: "P-6", nombre_senal: "PASO A NIVEL CON BARRERAS", tip: "💡 CLAU: Parada obligatòria si baixen les barreres. Mai els adelantis.", audio: "Senyal P-6 de perill. Pas a nivell amb barreres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-7", categoria: "perill", pregunta: "Què indica aquesta senyal P-7 de PERILL?", opcions: ["Pas a nivell sense barreres", "Tren", "Cedeix el pas"], correcta: 0, codi: "P-7", nombre_senal: "PASO A NIVEL SIN BARRERAS", tip: "💡 CLAU: El més perillós. Has de mirar als 2 costats i parar si ve tren.", audio: "Senyal P-7 de perill. Pas a nivell sense barreres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-8", categoria: "perill", pregunta: "Què indica aquesta senyal P-8 de PERILL?", opcions: ["Aproximació a pas a nivell a 150 metres", "Tren", "150m"], correcta: 0, codi: "P-8", nombre_senal: "PROXIMIDAD DE PASO A NIVEL CON BARRERAS", tip: "💡 CLAU: Falta molt. 150m. Ves reduint poc a poc.", audio: "Senyal P-8 de perill. Aproximació a pas a nivell a 150 metres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-9a", categoria: "perill", pregunta: "Què indica aquesta senyal P-9a de PERILL?", opcions: ["Aproximació a pas a nivell a 50 metres", "Tren", "50m"], correcta: 0, codi: "P-9a", nombre_senal: "PROXIMIDAD DE PASO A NIVEL CON BARRERAS", tip: "💡 CLAU: Ja estàs a tocar. Atenció màxima i peu al fre.", audio: "Senyal P-9a de perill. Aproximació a pas a nivell a 50 metres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-9b", categoria: "perill", pregunta: "Què indica aquesta senyal P-9b de PERILL?", opcions: ["Aproximació a pas a nivell a 100 metres", "Tren", "100m"], correcta: 0, codi: "P-9b", nombre_senal: "PROXIMIDAD DE PASO A NIVEL CON BARRERAS", tip: "💡 CLAU: Queden 100m. Ja has de començar a reduir velocitat.", audio: "Senyal P-9b de perill. Aproximació a pas a nivell a 100 metres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-10a", categoria: "perill", pregunta: "Què indica aquesta senyal P-10a de PERILL?", opcions: ["Aproximació a pas a nivell a 150 metres", "Tren", "150m"], correcta: 0, codi: "P-10a", nombre_senal: "PROXIMIDAD DE PASO A NIVEL SIN BARRERAS", tip: "💡 CLAU: Igual que P-8 però sense barreres. Molt més perillós.", audio: "Senyal P-10a de perill. Aproximació a pas a nivell a 150 metres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-10b", categoria: "perill", pregunta: "Què indica aquesta senyal P-10b de PERILL?", opcions: ["Aproximació a pas a nivell a 100 metres", "Tren", "100m"], correcta: 0, codi: "P-10b", nombre_senal: "PROXIMIDAD DE PASO A NIVEL SIN BARRERAS", tip: "💡 CLAU: 100m i sense barreres. Prepara't per parar.", audio: "Senyal P-10b de perill. Aproximació a pas a nivell a 100 metres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-10c", categoria: "perill", pregunta: "Què indica aquesta senyal P-10c de PERILL?", opcions: ["Aproximació a pas a nivell a 50 metres", "Tren", "50m"], correcta: 0, codi: "P-10c", nombre_senal: "PROXIMIDAD DE PASO A NIVEL SIN BARRERAS", tip: "💡 CLAU: Últim avís. 50m. Peu al fre.", audio: "Senyal P-10c de perill. Aproximació a pas a nivell a 50 metres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-11", categoria: "perill", pregunta: "Què indica aquesta senyal P-11 de PERILL?", opcions: ["Aeroport", "Avions volant baix", "Zona de soroll"], correcta: 1, codi: "P-11", nombre_senal: "AVIONES VOLANDO A BAJA ALTURA", tip: "💡 CLAU: Sorpresa auditiva. Pot distreure. No et despistis.", audio: "Senyal P-11 de perill. Avions volant a baixa altura.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-12", categoria: "perill", pregunta: "Què indica aquesta senyal P-12 de PERILL?", opcions: ["Vent lateral", "Pont", "Zona oberta"], correcta: 0, codi: "P-12", nombre_senal: "VIENTO LATERAL", tip: "💡 CLAU: Agafa bé el volant. Afecta sobre tot a motos i camions.", audio: "Senyal P-12 de perill. Vent lateral.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-13a", categoria: "perill", pregunta: "Què indica aquesta senyal P-13a de PERILL?", opcions: ["Pas d'animals salvatges", "Zona ramadera", "Parc natural"], correcta: 0, codi: "P-13a", nombre_senal: "PASO DE ANIMALES EN LIBERTAD: CIERVOS", tip: "💡 CLAU: Zona de senglars i cérvols. Sobre tot de nit. Poden sortir de cop.", audio: "Senyal P-13a de perill. Pas d'animals salvatges.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-13b", categoria: "perill", pregunta: "Què indica aquesta senyal P-13b de PERILL?", opcions: ["Pas de bestiar", "Zona ramadera", "Granja"], correcta: 0, codi: "P-13b", nombre_senal: "PASO DE ANIMALES DOMESTICOS", tip: "💡 CLAU: Vaques, ovelles. Baixa velocitat i pita amb precaució.", audio: "Senyal P-13b de perill. Pas de bestiar.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-14a", categoria: "perill", pregunta: "Què indica aquesta senyal P-14a de PERILL?", opcions: ["Corba perillosa a la dreta", "Gir a la dreta", "Desviament"], correcta: 0, codi: "P-14a", nombre_senal: "CURVA PELIGROSA A LA DERECHA", tip: "💡 CLAU: Redueix abans de la corba. No frenis dins.", audio: "Senyal P-14a de perill. Corba perillosa a la dreta.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-14b", categoria: "perill", pregunta: "Què indica aquesta senyal P-14b de PERILL?", opcions: ["Corba perillosa a l'esquerra", "Gir a l'esquerra", "Desviament"], correcta: 0, codi: "P-14b", nombre_senal: "CURVA PELIGROSA A LA IZQUIERDA", tip: "💡 CLAU: Igual que P-14a però a l'esquerra. Vigila no envair carril contrari.", audio: "Senyal P-14b de perill. Corba perillosa a l'esquerra.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-15a", categoria: "perill", pregunta: "Què indica aquesta senyal P-15a de PERILL?", opcions: ["Corbes perilloses, la primera a la dreta", "Zig-zag", "Carretera sinuosa"], correcta: 0, codi: "P-15a", nombre_senal: "SUCESION DE CURVAS PELIGROSAS", tip: "💡 CLAU: Primera a la dreta. Després ve una a l'esquerra. No acceleris.", audio: "Senyal P-15a de perill. Successió de corbes perilloses.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-15b", categoria: "perill", pregunta: "Què indica aquesta senyal P-15b de PERILL?", opcions: ["Corbes perilloses, la primera a l'esquerra", "Zig-zag", "Carretera sinuosa"], correcta: 0, codi: "P-15b", nombre_senal: "SUCESION DE CURVAS PELIGROSAS", tip: "💡 CLAU: Primera a l'esquerra. Manté la dreta sempre.", audio: "Senyal P-15b de perill. Successió de corbes perilloses.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-16", categoria: "perill", pregunta: "Què indica aquesta senyal P-16 de PERILL?", opcions: ["Baixada amb pendent pronunciat", "Puja", "Frena"], correcta: 0, codi: "P-16", nombre_senal: "PENDIENTE PRONUNCIADA", tip: "💡 CLAU: Usa fre motor. Baixa marxa. No cremis els frens.", audio: "Senyal P-16 de perill. Baixada amb pendent pronunciat.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-17", categoria: "perill", pregunta: "Què indica aquesta senyal P-17 de PERILL?", opcions: ["Pujada amb pendent pronunciat", "Baixada", "Canvi de marxa"], correcta: 0, codi: "P-17", nombre_senal: "PENDIENTE PRONUNCIADA", tip: "💡 CLAU: Baixa marxa. Els vehicles pesats aniran molt lents.", audio: "Senyal P-17 de perill. Pujada amb pendent pronunciat.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-18", categoria: "perill", pregunta: "Què indica aquesta senyal P-18 de PERILL?", opcions: ["Estretament de calçada per la dreta", "Obres", "Desviament"], correcta: 0, codi: "P-18", nombre_senal: "ESTRECHAMIENTO DE CALZADA POR LA DERECHA", tip: "💡 CLAU: Cedeix el pas als que venen. Tanca't a l'esquerra.", audio: "Senyal P-18 de perill. Estretament de calçada per la dreta.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-19", categoria: "perill", pregunta: "Què indica aquesta senyal P-19 de PERILL?", opcions: ["Estretament de calçada per l'esquerra", "Obres", "Desviament"], correcta: 0, codi: "P-19", nombre_senal: "ESTRECHAMIENTO DE CALZADA POR LA IZQUIERDA", tip: "💡 CLAU: Tanca't a la dreta. Vigila no tocar vorera.", audio: "Senyal P-19 de perill. Estretament de calçada per l'esquerra.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-20", categoria: "perill", pregunta: "Què indica aquesta senyal P-20 de PERILL?", opcions: ["Estretament de calçada per ambdós costats", "Obres", "Pont"], correcta: 0, codi: "P-20", nombre_senal: "ESTRECHAMIENTO DE CALZADA", tip: "💡 CLAU: La calçada s'estreta pels 2 costats. Redueix i centra't.", audio: "Senyal P-20 de perill. Estretament de calçada per ambdós costats.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-21", categoria: "perill", pregunta: "Què indica aquesta senyal P-21 de PERILL?", opcions: ["Pont mòbil", "Pont", "Riu"], correcta: 0, codi: "P-21", nombre_senal: "PUENTE MOVIL", tip: "💡 CLAU: Es pot aixecar. Si hi ha llum vermella, parada obligatòria.", audio: "Senyal P-21 de perill. Pont mòbil.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-25", categoria: "perill", pregunta: "Què indica aquesta senyal P-25 de PERILL?", opcions: ["Túnel", "Pas inferior", "Il·luminació"], correcta: 0, codi: "P-25", nombre_senal: "TUNEL", tip: "💡 CLAU: Encén llums de curt abans d'entrar. Prohibit canviar carril.", audio: "Senyal P-25 de perill. Túnel.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-26", categoria: "perill", pregunta: "Què indica aquesta senyal P-26 de PERILL?", opcions: ["Sortida a un moll o riba", "Aigua", "Port"], correcta: 0, codi: "P-26", nombre_senal: "MUELLE", tip: "💡 CLAU: La carretera acaba a l'aigua. Perill extrem.", audio: "Senyal P-26 de perill. Sortida a un moll o riba.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-27", categoria: "perill", pregunta: "Què indica aquesta senyal P-27 de PERILL?", opcions: ["Glacera o neu", "Fred", "Muntanya"], correcta: 0, codi: "P-27", nombre_senal: "PAVIMENTO DESLIZANTE", tip: "💡 CLAU: Carretera lliscant. Baixa velocitat i sense frenades brusques.", audio: "Senyal P-27 de perill. Glacera o neu.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-28", categoria: "perill", pregunta: "Què indica aquesta senyal P-28 de PERILL?", opcions: ["Grava", "Obres", "Pedres"], correcta: 0, codi: "P-28", nombre_senal: "PROYECCION DE GRAVILLA", tip: "💡 CLAU: Augmenta distància. Et poden saltar pedres al parabrises.", audio: "Senyal P-28 de perill. Grava.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-29", categoria: "perill", pregunta: "Què indica aquesta senyal P-29 de PERILL?", opcions: ["Caiguda de pedres", "Muntanya", "Despreniments"], correcta: 0, codi: "P-29", nombre_senal: "DESPRENDIMIENTO", tip: "💡 CLAU: Vigila la muntanya. No pares a la zona.", audio: "Senyal P-29 de perill. Caiguda de pedres.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-30", categoria: "perill", pregunta: "Què indica aquesta senyal P-30 de PERILL?", opcions: ["Altres perills", "Perill genèric", "Atenció"], correcta: 0, codi: "P-30", nombre_senal: "OTROS PELIGROS", tip: "💡 CLAU: Perill no definit. Redueix i extrema precaució.", audio: "Senyal P-30 de perill. Altres perills.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// ========= REGLAMENTARIA R-1 A R-129 =========
{ id: "R-1", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-1 de REGLAMENTACIÓ?", opcions: ["Cedeix el pas", "Stop", "Prioritat"], correcta: 0, codi: "R-1", nombre_senal: "CEDA EL PASO", tip: "💡 CLAU: Triangle invertit. Has de reduir i cedir si ve algú.", audio: "Senyal R-1 de reglamentació. Cedeix el pas.", panel_id: "R-01", ruta_panel: "R-01_CEDA_STOP.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-2", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-2 de REGLAMENTACIÓ?", opcions: ["Stop", "Cedeix el pas", "Prohibit"], correcta: 0, codi: "R-2", nombre_senal: "STOP", tip: "💡 CLAU: Octàgon vermell. Parada OBLIGATÒRIA. Mira bé als 2 costats.", audio: "Senyal R-2 de reglamentació. Stop.", panel_id: "R-01", ruta_panel: "R-01_CEDA_STOP.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-3", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-3 de REGLAMENTACIÓ?", opcions: ["Prohibit passar sense parar", "Stop", "Cedeix el pas"], correcta: 0, codi: "R-3", nombre_senal: "PROHIBIDO PASAR SIN DETENERSE", tip: "💡 CLAU: Has de parar obligatori. Igual que stop però sense octàgon.", audio: "Senyal R-3 de reglamentació. Prohibit passar sense parar.", panel_id: "R-01", ruta_panel: "R-01_CEDA_STOP.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-4", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-4 de REGLAMENTACIÓ?", opcions: ["Prohibit girar a la dreta", "Gir obligatori", "Prohibit avançar"], correcta: 0, codi: "R-4", nombre_senal: "PROHIBIDO GIRAR A LA DERECHA", tip: "💡 CLAU: Cercle vermell = Prohibició. Fletxa dreta barrada.", audio: "Senyal R-4 de reglamentació. Prohibit girar a la dreta.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-5", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-5 de REGLAMENTACIÓ?", opcions: ["Prohibit girar a l'esquerra", "Gir obligatori", "Prohibit avançar"], correcta: 0, codi: "R-5", nombre_senal: "PROHIBIDO GIRAR A LA IZQUIERDA", tip: "💡 CLAU: Igual que R-4 però a l'esquerra. Vigila els canvis de sentit.", audio: "Senyal R-5 de reglamentació. Prohibit girar a l'esquerra.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-6", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-6 de REGLAMENTACIÓ?", opcions: ["Prohibit canviar de sentit", "Prohibit girar", "Prohibit avançar"], correcta: 0, codi: "R-6", nombre_senal: "PROHIBIDO DAR LA VUELTA", tip: "💡 CLAU: Fletxa en U barrada. No pots fer canvi de sentit aquí.", audio: "Senyal R-6 de reglamentació. Prohibit canviar de sentit.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
// ... R-101 hasta R-129 con rutas corregidas según tu carpeta ...
{ id: "R-101", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-101 de REGLAMENTACIÓ?", opcions: ["Entrada prohibida", "Prohibit avançar", "Sentit únic"], correcta: 0, codi: "R-101", nombre_senal: "ENTRADA PROHIBIDA", tip: "💡 CLAU: Cercle vermell ple. No pots entrar per aquí en cap cas.", audio: "Senyal R-101 de reglamentació. Entrada prohibida.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-102", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-102 de REGLAMENTACIÓ?", opcions: ["Circulació prohibida", "Carretera tallada", "Prohibit avançar"], correcta: 0, codi: "R-102", nombre_senal: "CIRCULACION PROHIBIDA", tip: "💡 CLAU: Cercle vermell buit. Prohibit circular a tot tipus de vehicles.", audio: "Senyal R-102 de reglamentació. Circulació prohibida.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-103", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-103 de REGLAMENTACIÓ?", opcions: ["Prohibit l'entrada a vehicles de motor", "Prohibit cotxes", "Prohibit motos"], correcta: 0, codi: "R-103", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS DE MOTOR", tip: "💡 CLAU: Afecta a cotxes i motos. Bicis i vianants sí poden.", audio: "Senyal R-103 de reglamentació. Prohibit l'entrada a vehicles de motor.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-200", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-200 de REGLAMENTACIÓ?", opcions: ["Prohibit avançar", "Prohibit girar", "Prohibit aparcar"], correcta: 0, codi: "R-200", nombre_senal: "PROHIBIDO ADELANTAR", tip: "💡 CLAU: Cercle vermell amb 2 cotxes. No pots avançar fins a R-502.", audio: "Senyal R-200 de reglamentació. Prohibit avançar.", panel_id: "R-04", ruta_panel: "R-04_ADELANTAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-201", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-201 de REGLAMENTACIÓ?", opcions: ["Prohibit avançar a camions", "Prohibit avançar", "Velocitat"], correcta: 0, codi: "R-201", nombre_senal: "PROHIBIDO ADELANTAR A CAMIONES", tip: "💡 CLAU: Només afecta a camions. Els turismes sí poden avançar.", audio: "Senyal R-201 de reglamentació. Prohibit avançar a camions.", panel_id: "R-04", ruta_panel: "R-04_ADELANTAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-301", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-301 de REGLAMENTACIÓ?", opcions: ["Velocitat màxima", "Velocitat mínima", "Velocitat recomanada"], correcta: 0, codi: "R-301", nombre_senal: "VELOCIDAD MAXIMA", tip: "💡 CLAU: Cercle vermell amb número. No pots superar aquesta velocitat.", audio: "Senyal R-301 de reglamentació. Velocitat màxima.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-302", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-302 de REGLAMENTACIÓ?", opcions: ["Velocitat mínima", "Velocitat màxima", "Velocitat recomanada"], correcta: 0, codi: "R-302", nombre_senal: "VELOCIDAD MINIMA", tip: "💡 CLAU: Cercle blau. No pots anar més lent d'això. Perill.", audio: "Senyal R-302 de reglamentació. Velocitat mínima.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-400a", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-400a de REGLAMENTACIÓ?", opcions: ["Sentit obligatori a la dreta", "Gir a la dreta", "Desviament"], correcta: 0, codi: "R-400a", nombre_senal: "SENTIDO OBLIGATORIO A LA DERECHA", tip: "💡 CLAU: Cercle blau. Només pots anar en la direcció de la fletxa.", audio: "Senyal R-400a de reglamentació. Sentit obligatori a la dreta.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-400b", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-400b de REGLAMENTACIÓ?", opcions: ["Sentit obligatori a l'esquerra", "Gir a l'esquerra", "Desviament"], correcta: 0, codi: "R-400b", nombre_senal: "SENTIDO OBLIGATORIO A LA IZQUIERDA", tip: "💡 CLAU: Igual que R-400a però a l'esquerra. Obligatori.", audio: "Senyal R-400b de reglamentació. Sentit obligatori a l'esquerra.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-401a", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-401a de REGLAMENTACIÓ?", opcions: ["Pas obligatori per la dreta", "Gir a la dreta", "Desviament"], correcta: 0, codi: "R-401a", nombre_senal: "PASO OBLIGATORIO POR LA DERECHA", tip: "💡 CLAU: Obstacle. Has de passar per la dreta del pal.", audio: "Senyal R-401a de reglamentació. Pas obligatori per la dreta.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-401b", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-401b de REGLAMENTACIÓ?", opcions: ["Pas obligatori per l'esquerra", "Gir a l'esquerra", "Desviament"], correcta: 0, codi: "R-401b", nombre_senal: "PASO OBLIGATORIO POR LA IZQUIERDA", tip: "💡 CLAU: Obstacle. Has de passar per l'esquerra del pal.", audio: "Senyal R-401b de reglamentació. Pas obligatori per l'esquerra.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-402", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-402 de REGLAMENTACIÓ?", opcions: ["Glorieta obligatòria", "Rotonda", "Cedeix el pas"], correcta: 0, codi: "R-402", nombre_senal: "GLORIETA", tip: "💡 CLAU: Cercle blau amb fletxes. Circulació giratòria obligatòria.", audio: "Senyal R-402 de reglamentació. Glorieta obligatòria.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-500", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-500 de REGLAMENTACIÓ?", opcions: ["Fi de prohibicions", "Final zona", "Velocitat lliure"], correcta: 0, codi: "R-500", nombre_senal: "FIN DE PROHIBICIONES", tip: "💡 CLAU: Barra diagonal negra. Anul·la totes les prohibicions anteriors.", audio: "Senyal R-500 de reglamentació. Fi de prohibicions.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-501", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-501 de REGLAMENTACIÓ?", opcions: ["Fi de limitació de velocitat", "Velocitat lliure", "Fi de prohibicions"], correcta: 0, codi: "R-501", nombre_senal: "FIN DE LIMITACION DE VELOCIDAD", tip: "💡 CLAU: Barra diagonal. Torna el límit genèric de la via.", audio: "Senyal R-501 de reglamentació. Fi de limitació de velocitat.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-502", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-502 de REGLAMENTACIÓ?", opcions: ["Fi de prohibició d'avançament", "Pots avançar", "Fi de prohibicions"], correcta: 0, codi: "R-502", nombre_senal: "FIN DE PROHIBICION DE ADELANTAMIENTO", tip: "💡 CLAU: Anul·la R-200. Ja pots avançar si no hi ha línia contínua.", audio: "Senyal R-502 de reglamentació. Fi de prohibició d'avançament.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-503", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-503 de REGLAMENTACIÓ?", opcions: ["Fi de prohibició d'avançament a camions", "Fi de prohibicions", "Pots avançar"], correcta: 0, codi: "R-503", nombre_senal: "FIN DE PROHIBICION DE ADELANTAMIENTO A CAMIONES", tip: "💡 CLAU: Anul·la R-201. Només els camions ja poden avançar.", audio: "Senyal R-503 de reglamentació. Fi de prohibició d'avançament a camions.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-504", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-504 de REGLAMENTACIÓ?", opcions: ["Fi de prohibició d'ús de senyals acústics", "Zona silenciosa", "Fi de prohibicions"], correcta: 0, codi: "R-504", nombre_senal: "FIN DE PROHIBICION DE USO DE SEÑALES ACUSTICAS", tip: "💡 CLAU: Ja pots tornar a pitar. Anul·la la prohibició anterior.", audio: "Senyal R-504 de reglamentació. Fi de prohibició d'ús de senyals acústics.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-505", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-505 de REGLAMENTACIÓ?", opcions: ["Fi de velocitat mínima", "Velocitat lliure", "Fi de prohibicions"], correcta: 0, codi: "R-505", nombre_senal: "FIN DE VELOCIDAD MINIMA", tip: "💡 CLAU: Anul·la R-302. Ja pots circular més lent si cal.", audio: "Senyal R-505 de reglamentació. Fi de velocitat mínima.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-307", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-307 de REGLAMENTACIÓ?", opcions: ["Prohibit aparcar", "Prohibit parar", "Zona blava"], correcta: 0, codi: "R-307", nombre_senal: "PROHIBIDO ESTACIONAR", tip: "💡 CLAU: Cercle blau amb 1 barra vermella. No pots deixar el cotxe.", audio: "Senyal R-307 de reglamentació. Prohibit aparcar.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-308a", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-308a de REGLAMENTACIÓ?", opcions: ["Prohibit parar i aparcar", "Prohibit aparcar", "Zona de càrrega"], correcta: 0, codi: "R-308a", nombre_senal: "PROHIBIDO PARAR Y ESTACIONAR", tip: "💡 CLAU: Cercle blau amb 2 barres vermelles. Ni parar 2 segons.", audio: "Senyal R-308a de reglamentació. Prohibit parar i aparcar.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-308b", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-308b de REGLAMENTACIÓ?", opcions: ["Prohibit parar els dies parells", "Prohibit aparcar", "Zona blava"], correcta: 0, codi: "R-308b", nombre_senal: "PROHIBIDO ESTACIONAR EN DIAS PARES", tip: "💡 CLAU: 1 barra. Només dies parells. Dias imparells sí pots.", audio: "Senyal R-308b de reglamentació. Prohibit parar els dies parells.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-308c", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-308c de REGLAMENTACIÓ?", opcions: ["Prohibit parar els dies imparells", "Prohibit aparcar", "Zona blava"], correcta: 0, codi: "R-308c", nombre_senal: "PROHIBIDO ESTACIONAR EN DIAS IMPARES", tip: "💡 CLAU: 2 barres. Només dies imparells. Dias parells sí pots.", audio: "Senyal R-308c de reglamentació. Prohibit parar els dies imparells.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-310", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-310 de REGLAMENTACIÓ?", opcions: ["Zona de càrrega i descàrrega", "Prohibit aparcar", "Aparcament"], correcta: 0, codi: "R-310", nombre_senal: "ZONA DE CARGA Y DESCARGA", tip: "💡 CLAU: Només vehicles de càrrega i en horari. Multa si no.", audio: "Senyal R-310 de reglamentació. Zona de càrrega i descàrrega.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-308", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-308 de REGLAMENTACIÓ?", opcions: ["Aparcament", "Prohibit aparcar", "Zona blava"], correcta: 0, codi: "R-308", nombre_senal: "ESTACIONAMIENTO", tip: "💡 CLAU: Quadrat blau amb P. Aquí sí pots aparcar.", audio: "Senyal R-308 de reglamentació. Aparcament.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-309", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-309 de REGLAMENTACIÓ?", opcions: ["Aparcament per a discapacitats", "Aparcament", "Prohibit aparcar"], correcta: 0, codi: "R-309", nombre_senal: "ESTACIONAMIENTO PARA DISCAPACITADOS", tip: "💡 CLAU: P amb cadira de rodes. Només amb targeta.", audio: "Senyal R-309 de reglamentació. Aparcament per a discapacitats.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
// ... R-413 hasta R-129 van aquí con panel_id R-10 a R-13 y rutas de tu carpeta ...
{ id: "R-100", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-100 de REGLAMENTACIÓ?", opcions: ["Fi de totes les prohibicions", "Fi de limitació", "Zona lliure"], correcta: 0, codi: "R-100", nombre_senal: "FIN DE PROHIBICIONES", tip: "💡 CLAU: Barra gris diagonal. Anul·la R-101, R-200, R-301, etc.", audio: "Senyal R-100 de reglamentació. Fi de totes les prohibicions.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-105", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-105 de REGLAMENTACIÓ?", opcions: ["Prohibit entrar a vehicles de més de 3.5m d'alçada", "Alçada màxima", "Pont baix"], correcta: 0, codi: "R-105", nombre_senal: "ALTURA MAXIMA", tip: "💡 CLAU: Cercle vermell amb alçada. Si el teu cotxe fa més, no passis.", audio: "Senyal R-105 de reglamentació. Prohibit entrar a vehicles de més de 3.5m d'alçada.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-106", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-106 de REGLAMENTACIÓ?", opcions: ["Prohibit entrar a vehicles de més de 2m d'amplada", "Amplada màxima", "Estretament"], correcta: 0, codi: "R-106", nombre_senal: "ANCHURA MAXIMA", tip: "💡 CLAU: Cercle vermell amb amplada. Camions grans no passen.", audio: "Senyal R-106 de reglamentació. Prohibit entrar a vehicles de més de 2m d'amplada.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-107", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-107 de REGLAMENTACIÓ?", opcions: ["Prohibit entrar a vehicles de més de 5000kg", "Pes màxim", "Pont"], correcta: 0, codi: "R-107", nombre_senal: "PESO MAXIMO", tip: "💡 CLAU: Cercle vermell amb kg. Si peses més, carretera alternativa.", audio: "Senyal R-107 de reglamentació. Prohibit entrar a vehicles de més de 5000kg.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-108", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-108 de REGLAMENTACIÓ?", opcions: ["Prohibit entrar a vehicles amb més de 2 eixos", "Pes per eix", "Camions"], correcta: 0, codi: "R-108", nombre_senal: "PESO MAXIMO POR EJE", tip: "💡 CLAU: Protegeix el ferm. Camions pesats per eix no.", audio: "Senyal R-108 de reglamentació. Prohibit entrar a vehicles amb més de 2 eixos.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-109", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-109 de REGLAMENTACIÓ?", opcions: ["Prohibit entrar a vehicles de més de 10m de longitud", "Longitud màxima", "Gir"], correcta: 0, codi: "R-109", nombre_senal: "LONGITUD MAXIMA", tip: "💡 CLAU: Camions articulats i autobusos llargs no poden entrar.", audio: "Senyal R-109 de reglamentació. Prohibit entrar a vehicles de més de 10m de longitud.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-110", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-110 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies explosives", "Prohibit camions", "Túnel"], correcta: 0, codi: "R-110", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS EXPLOSIVAS", tip: "💡 CLAU: ADR Classe 1. Bomba. Túnels i ponts principalment.", audio: "Senyal R-110 de reglamentació. Prohibit circular a vehicles amb mercaderies explosives.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-111", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-111 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies tòxiques", "Prohibit camions", "Zona urbana"], correcta: 0, codi: "R-111", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS TOXICAS", tip: "💡 CLAU: ADR Classe 6. Verí. Calavera i tibies.", audio: "Senyal R-111 de reglamentació. Prohibit circular a vehicles amb mercaderies tòxiques.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-112", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-112 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies radioactives", "Prohibit camions", "Zona nuclear"], correcta: 0, codi: "R-112", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS RADIOACTIVAS", tip: "💡 CLAU: Trèvol radioactiu groc. Perill extrem.", audio: "Senyal R-112 de reglamentació. Prohibit circular a vehicles amb mercaderies radioactives.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-113", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-113 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies inflamables", "Prohibit camions", "Gasolinera"], correcta: 0, codi: "R-113", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS INFLAMABLES", tip: "💡 CLAU: ADR Classe 3. Flama. Gasolina, alcohol.", audio: "Senyal R-113 de reglamentació. Prohibit circular a vehicles amb mercaderies inflamables.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-114", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-114 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies corrosives", "Prohibit camions", "Àcid"], correcta: 0, codi: "R-114", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS CORROSIVAS", tip: "💡 CLAU: ADR Classe 8. Mà i metall cremant-se.", audio: "Senyal R-114 de reglamentació. Prohibit circular a vehicles amb mercaderies corrosives.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-115", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-115 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies comburents", "Prohibit camions", "Oxigen"], correcta: 0, codi: "R-115", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS COMBURENTES", tip: "💡 CLAU: ADR Classe 5. Cercle amb flama. Oxigen, nitrats.", audio: "Senyal R-115 de reglamentació. Prohibit circular a vehicles amb mercaderies comburents.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-116", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-116 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies nocives", "Prohibit camions", "Calavera"], correcta: 0, codi: "R-116", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS NOCIVAS", tip: "💡 CLAU: ADR Classe 6.1. Calavera. Perjudicial per salut.", audio: "Senyal R-116 de reglamentació. Prohibit circular a vehicles amb mercaderies nocives.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-117", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-117 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies irritants", "Prohibit camions", "Gas"], correcta: 0, codi: "R-117", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS IRRITANTES", tip: "💡 CLAU: ADR Classe 8. Gas lacrimògen, irritants.", audio: "Senyal R-117 de reglamentació. Prohibit circular a vehicles amb mercaderies irritants.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-118", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-118 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies infeccioses", "Prohibit camions", "Biohazard"], correcta: 0, codi: "R-118", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS INFECCIOSAS", tip: "💡 CLAU: ADR Classe 6.2. 3 cercles. Residus hospitalaris.", audio: "Senyal R-118 de reglamentació. Prohibit circular a vehicles amb mercaderies infeccioses.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-119", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-119 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies radioactives categoria II", "Prohibit camions", "Radioactiu"], correcta: 0, codi: "R-119", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS RADIOACTIVAS CATEGORIA II", tip: "💡 CLAU: ADR Classe 7. 2 barres grogues. Nivell mig.", audio: "Senyal R-119 de reglamentació. Prohibit circular a vehicles amb mercaderies radioactives categoria II.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-120", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-120 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies radioactives categoria III", "Prohibit camions", "Radioactiu alt"], correcta: 0, codi: "R-120", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS RADIOACTIVAS CATEGORIA III", tip: "💡 CLAU: ADR Classe 7. 3 barres vermelles. Nivell alt.", audio: "Senyal R-120 de reglamentació. Prohibit circular a vehicles amb mercaderies radioactives categoria III.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-121", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-121 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies perilloses diverses", "Prohibit camions", "ADR"], correcta: 0, codi: "R-121", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS PELIGROSAS DIVERSAS", tip: "💡 CLAU: ADR Classe 9. Rombus ratllat. Diversos perills.", audio: "Senyal R-121 de reglamentació. Prohibit circular a vehicles amb mercaderies perilloses diverses.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-122", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-122 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies perilloses per al medi ambient", "Prohibit camions", "Peix mort"], correcta: 0, codi: "R-122", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS PELIGROSAS PARA EL MEDIO AMBIENTE", tip: "💡 CLAU: ADR Classe 9. Peix i arbre. Contaminant.", audio: "Senyal R-122 de reglamentació. Prohibit circular a vehicles amb mercaderies perilloses per al medi ambient.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-123", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-123 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies perilloses per a l'aigua", "Prohibit camions", "Gota"], correcta: 0, codi: "R-123", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS PELIGROSAS PARA EL AGUA", tip: "💡 CLAU: Igual R-416 però més específica. Protecció aqüífers.", audio: "Senyal R-123 de reglamentació. Prohibit circular a vehicles amb mercaderies perilloses per a l'aigua.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-124", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-124 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies perilloses per a l'aire", "Prohibit camions", "Núvol"], correcta: 0, codi: "R-124", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS PELIGROSAS PARA EL AIRE", tip: "💡 CLAU: Gasos tòxics. No passar per túnels urbans.", audio: "Senyal R-124 de reglamentació. Prohibit circular a vehicles amb mercaderies perilloses per a l'aire.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-125", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-125 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies perilloses per al sòl", "Prohibit camions", "Terra"], correcta: 0, codi: "R-125", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS PELIGROSAS PARA EL SUELO", tip: "💡 CLAU: Contaminació de terres. Zones agrícoles.", audio: "Senyal R-125 de reglamentació. Prohibit circular a vehicles amb mercaderies perilloses per al sòl.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-126", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-126 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies perilloses per a la vegetació", "Prohibit camions", "Arbre"], correcta: 0, codi: "R-126", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS PELIGROSAS PARA LA VEGETACION", tip: "💡 CLAU: Herbicides, plaguicides. Protegir boscos.", audio: "Senyal R-126 de reglamentació. Prohibit circular a vehicles amb mercaderies perilloses per a la vegetació.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-127", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-127 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies perilloses per a la fauna", "Prohibit camions", "Animal"], correcta: 0, codi: "R-127", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS PELIGROSAS PARA LA FAUNA", tip: "💡 CLAU: Tòxics per animals. Zones de parc natural.", audio: "Senyal R-127 de reglamentació. Prohibit circular a vehicles amb mercaderies perilloses per a la fauna.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-128", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-128 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies perilloses per a les persones", "Prohibit camions", "Persona"], correcta: 0, codi: "R-128", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS PELIGROSAS PARA LAS PERSONAS", tip: "💡 CLAU: Tòxics inhalables. Zona urbana densa.", audio: "Senyal R-128 de reglamentació. Prohibit circular a vehicles amb mercaderies perilloses per a les persones.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-129", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-129 de REGLAMENTACIÓ?", opcions: ["Prohibit circular a vehicles amb mercaderies perilloses per als béns", "Prohibit camions", "Caixa"], correcta: 0, codi: "R-129", nombre_senal: "PROHIBIDO EL ACCESO A VEHICULOS QUE TRANSPORTEN MERCANCIAS PELIGROSAS PARA LOS BIENES", tip: "💡 CLAU: Corrosius que fan malbé infraestructures.", audio: "Senyal R-129 de reglamentació. Prohibit circular a vehicles amb mercaderies perilloses per als béns.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// ========= INFORMACIÓ S-1 A S-80 =========
{ id: "S-1", categoria: "informacio", pregunta: "Què indica aquesta senyal S-1 d'INFORMACIÓ?", opcions: ["Autopista", "Via ràpida", "Carretera"], correcta: 0, codi: "S-1", nombre_senal: "AUTOPISTA", tip: "💡 CLAU: Fons BLAU = Informació. Rectangle blau = Autopista.", audio: "Senyal S-1 d'informació. Autopista.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-2", categoria: "informacio", pregunta: "Què indica aquesta senyal S-2 d'INFORMACIÓ?", opcions: ["Autovia", "Via ràpida", "Carretera"], correcta: 0, codi: "S-2", nombre_senal: "AUTOVIA", tip: "💡 CLAU: Fons BLAU amb 2 ponts = Autovia. Pot tenir encreuaments.", audio: "Senyal S-2 d'informació. Autovia.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-3", categoria: "informacio", pregunta: "Què indica aquesta senyal S-3 d'INFORMACIÓ?", opcions: ["Carretera convencional", "Autopista", "Via ràpida"], correcta: 0, codi: "S-3", nombre_senal: "CARRETERA CONVENCIONAL", tip: "💡 CLAU: Fons BLAU. Carretera d'1 carril per sentit. 90km/h.", audio: "Senyal S-3 d'informació. Carretera convencional.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-4", categoria: "informacio", pregunta: "Què indica aquesta senyal S-4 d'INFORMACIÓ?", opcions: ["Via reservada per a automòbils", "Autopista", "Carretera"], correcta: 0, codi: "S-4", nombre_senal: "VIA RESERVADA PER A AUTOMOVILS", tip: "💡 CLAU: Fons BLAU amb cotxe blanc. Prohibit vianants, bicis, ciclomotors.", audio: "Senyal S-4 d'informació. Via reservada per a automòbils.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-5", categoria: "informacio", pregunta: "Què indica aquesta senyal S-5 d'INFORMACIÓ?", opcions: ["Fi d'autopista", "Fi de via ràpida", "Fi de carretera"], correcta: 0, codi: "S-5", nombre_senal: "FIN DE AUTOPISTA", tip: "💡 CLAU: Fons BLAU amb barra gris. Torna límit genèric.", audio: "Senyal S-5 d'informació. Fi d'autopista.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-6", categoria: "informacio", pregunta: "Què indica aquesta senyal S-6 d'INFORMACIÓ?", opcions: ["Fi d'autovia", "Fi de via ràpida", "Fi de carretera"], correcta: 0, codi: "S-6", nombre_senal: "FIN DE AUTOVIA", tip: "💡 CLAU: Igual S-5 però per autovia. Atenció als encreuaments.", audio: "Senyal S-6 d'informació. Fi d'autovia.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-7", categoria: "informacio", pregunta: "Què indica aquesta senyal S-7 d'INFORMACIÓ?", opcions: ["Fi de via reservada per a automòbils", "Fi de carretera", "Fi de via ràpida"], correcta: 0, codi: "S-7", nombre_senal: "FIN DE VIA RESERVADA PER A AUTOMOVILS", tip: "💡 CLAU: Ja poden entrar vianants i bicis si hi ha carril.", audio: "Senyal S-7 d'informació. Fi de via reservada per a automòbils.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-8", categoria: "informacio", pregunta: "Què indica aquesta senyal S-8 d'INFORMACIÓ?", opcions: ["Sentit únic", "Prohibit entrar", "Direcció obligatòria"], correcta: 0, codi: "S-8", nombre_senal: "SENTIDO UNICO", tip: "💡 CLAU: Fletxa blanca sobre fons blau. Només 1 sentit.", audio: "Senyal S-8 d'informació. Sentit únic.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-9", categoria: "informacio", pregunta: "Què indica aquesta senyal S-9 d'INFORMACIÓ?", opcions: ["Fi de sentit únic", "Doble sentit", "Intersecció"], correcta: 0, codi: "S-9", nombre_senal: "FIN DE SENTIDO UNICO", tip: "💡 CLAU: Fletxa amb barra gris. A partir d'aquí doble sentit.", audio: "Senyal S-9 d'informació. Fi de sentit únic.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-10", categoria: "informacio", pregunta: "Què indica aquesta senyal S-10 d'INFORMACIÓ?", opcions: ["Túnel", "Pas inferior", "Il·luminació"], correcta: 0, codi: "S-10", nombre_senal: "TUNEL", tip: "💡 CLAU: Fons BLAU. Encén llums de curt obligatori.", audio: "Senyal S-10 d'informació. Túnel.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-11", categoria: "informacio", pregunta: "Què indica aquesta senyal S-11 d'INFORMACIÓ?", opcions: ["Pas inferior", "Túnel", "Pont"], correcta: 0, codi: "S-11", nombre_senal: "PASO INFERIOR", tip: "💡 CLAU: Passes per sota d'una altra via. Vigila alçada.", audio: "Senyal S-11 d'informació. Pas inferior.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-12", categoria: "informacio", pregunta: "Què indica aquesta senyal S-12 d'INFORMACIÓ?", opcions: ["Pas superior", "Pont", "Túnel"], correcta: 0, codi: "S-12", nombre_senal: "PASO SUPERIOR", tip: "💡 CLAU: Passes per sobre d'una altra via.", audio: "Senyal S-12 d'informació. Pas superior.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-13", categoria: "informacio", pregunta: "Què indica aquesta senyal S-13 d'INFORMACIÓ?", opcions: ["Lloc per a girar", "Canvi de sentit", "Desviament"], correcta: 0, codi: "S-13", nombre_senal: "LUGAR HABILITADO PARA EFECTUAR CAMBIO DE SENTIDO", tip: "💡 CLAU: U en fons blau. Únic lloc legal per fer el canvi.", audio: "Senyal S-13 d'informació. Lloc per a girar.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-14", categoria: "informacio", pregunta: "Què indica aquesta senyal S-14 d'INFORMACIÓ?", opcions: ["Aparcament", "Zona blava", "Prohibit aparcar"], correcta: 0, codi: "S-14", nombre_senal: "APARCAMIENTO", tip: "💡 CLAU: Quadrat blau amb P blanca. Aquí sí pots.", audio: "Senyal S-14 d'informació. Aparcament.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-15", categoria: "informacio", pregunta: "Què indica aquesta senyal S-15 d'INFORMACIÓ?", opcions: ["Hospital", "Creu roja", "Centre mèdic"], correcta: 0, codi: "S-15", nombre_senal: "HOSPITAL", tip: "💡 CLAU: Quadrat blau amb H. Baixa velocitat i silenci.", audio: "Senyal S-15 d'informació. Hospital.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-16", categoria: "informacio", pregunta: "Què indica aquesta senyal S-16 d'INFORMACIÓ?", opcions: ["Centre d'auxili", "Taller", "Gasolinera"], correcta: 0, codi: "S-16", nombre_senal: "CENTRO DE AUXILIO", tip: "💡 CLAU: Quadrat blau amb creu. Ajuda mecànica i mèdica.", audio: "Senyal S-16 d'informació. Centre d'auxili.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-17", categoria: "informacio", pregunta: "Què indica aquesta senyal S-17 d'INFORMACIÓ?", opcions: ["Telèfon de socors", "Taller", "Informació"], correcta: 0, codi: "S-17", nombre_senal: "TELEFONO DE SOCORRO", tip: "💡 CLAU: Quadrat blau amb telèfon. Per emergències a autopista.", audio: "Senyal S-17 d'informació. Telèfon de socors.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-18", categoria: "informacio", pregunta: "Què indica aquesta senyal S-18 d'INFORMACIÓ?", opcions: ["Gasolinera", "Taller", "Àrea de servei"], correcta: 0, codi: "S-18", nombre_senal: "ESTACION DE SERVICIO", tip: "💡 CLAU: Quadrat blau amb bomba. Combustible.", audio: "Senyal S-18 d'informació. Gasolinera.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-19", categoria: "informacio", pregunta: "Què indica aquesta senyal S-19 d'INFORMACIÓ?", opcions: ["Taller de reparacions", "Gasolinera", "ITV"], correcta: 0, codi: "S-19", nombre_senal: "TALLER DE REPARACIONES", tip: "💡 CLAU: Quadrat blau amb clau anglesa. Mecànic.", audio: "Senyal S-19 d'informació. Taller de reparacions.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-20", categoria: "informacio", pregunta: "Què indica aquesta senyal S-20 d'INFORMACIÓ?", opcions: ["Restaurant", "Bar", "Hotel"], correcta: 0, codi: "S-20", nombre_senal: "RESTAURANTE", tip: "💡 CLAU: Quadrat blau amb ganivet i forquilla.", audio: "Senyal S-20 d'informació. Restaurant.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-21", categoria: "informacio", pregunta: "Què indica aquesta senyal S-21 d'INFORMACIÓ?", opcions: ["Hotel", "Restaurant", "Càmping"], correcta: 0, codi: "S-21", nombre_senal: "HOTEL", tip: "💡 CLAU: Quadrat blau amb llit. Pernoctar.", audio: "Senyal S-21 d'informació. Hotel.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-22", categoria: "informacio", pregunta: "Què indica aquesta senyal S-22 d'INFORMACIÓ?", opcions: ["Càmping", "Hotel", "Àrea de descans"], correcta: 0, codi: "S-22", nombre_senal: "CAMPING", tip: "💡 CLAU: Quadrat blau amb tenda de campanya.", audio: "Senyal S-22 d'informació. Càmping.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-23", categoria: "informacio", pregunta: "Què indica aquesta senyal S-23 d'INFORMACIÓ?", opcions: ["Terreny per a caravanes", "Càmping", "Aparcament"], correcta: 0, codi: "S-23", nombre_senal: "TERRENO PARA CARAVANAS", tip: "💡 CLAU: Quadrat blau amb caravana. Per aparcar caravanes.", audio: "Senyal S-23 d'informació. Terreny per a caravanes.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-24", categoria: "informacio", pregunta: "Què indica aquesta senyal S-24 d'INFORMACIÓ?", opcions: ["Àrea de descans", "Àrea de servei", "Gasolinera"], correcta: 0, codi: "S-24", nombre_senal: "AREA DE DESCANSO", tip: "💡 CLAU: Quadrat blau amb banc. Para i estira les cames.", audio: "Senyal S-24 d'informació. Àrea de descans.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-25", categoria: "informacio", pregunta: "Què indica aquesta senyal S-25 d'INFORMACIÓ?", opcions: ["Mirador", "Paisatge", "Parada turística"], correcta: 0, codi: "S-25", nombre_senal: "MIRADOR", tip: "💡 CLAU: Quadrat blau amb prismàtics. Vistes.", audio: "Senyal S-25 d'informació. Mirador.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-26", categoria: "informacio", pregunta: "Què indica aquesta senyal S-26 d'INFORMACIÓ?", opcions: ["Passos de vianants", "Escola", "Zona urbana"], correcta: 0, codi: "S-26", nombre_senal: "PASO PARA PEATONES", tip: "💡 CLAU: Quadrat blau amb vianants. Cedeix sempre.", audio: "Senyal S-26 d'informació. Passos de vianants.", panel_id: "S-04", ruta_panel: "S-12_A_S-15_DIRECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-27", categoria: "informacio", pregunta: "Què indica aquesta senyal S-27 d'INFORMACIÓ?", opcions: ["Carril bici", "Prohibit bicis", "Via ciclista"], correcta: 0, codi: "S-27", nombre_senal: "CARRIL BICI", tip: "💡 CLAU: Quadrat blau amb bici blanca. Només bicis.", audio: "Senyal S-27 d'informació. Carril bici.", panel_id: "S-04", ruta_panel: "S-12_A_S-15_DIRECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-28", categoria: "informacio", pregunta: "Què indica aquesta senyal S-28 d'INFORMACIÓ?", opcions: ["Via per a vianants", "Zona peatonal", "Prohibit cotxes"], correcta: 0, codi: "S-28", nombre_senal: "VIA PARA PEATONES", tip: "💡 CLAU: Quadrat blau amb vianant. Prohibit cotxes.", audio: "Senyal S-28 d'informació. Via per a vianants.", panel_id: "S-04", ruta_panel: "S-12_A_S-15_DIRECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-29", categoria: "informacio", pregunta: "Què indica aquesta senyal S-29 d'INFORMACIÓ?", opcions: ["Via per a vianants i bicicletes", "Carril bici", "Zona peatonal"], correcta: 0, codi: "S-29", nombre_senal: "VIA PARA PEATONES Y CICLISTAS", tip: "💡 CLAU: Quadrat blau amb vianant i bici. Compartit.", audio: "Senyal S-29 d'informació. Via per a vianants i bicicletes.", panel_id: "S-04", ruta_panel: "S-12_A_S-15_DIRECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-30", categoria: "informacio", pregunta: "Què indica aquesta senyal S-30 d'INFORMACIÓ?", opcions: ["Fi de via per a vianants", "Fi zona peatonal", "Fi de carril bici"], correcta: 0, codi: "S-30", nombre_senal: "FIN DE VIA PARA PEATONES", tip: "💡 CLAU: Quadrat blau amb barra gris. Torna calçada.", audio: "Senyal S-30 d'informació. Fi de via per a vianants.", panel_id: "S-04", ruta_panel: "S-12_A_S-15_DIRECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-31", categoria: "informacio", pregunta: "Què indica aquesta senyal S-31 d'INFORMACIÓ?", opcions: ["Fi de carril bici", "Fi de via ciclista", "Fi zona peatonal"], correcta: 0, codi: "S-31", nombre_senal: "FIN DE CARRIL BICI", tip: "💡 CLAU: Quadrat blau amb bici i barra. Compte amb cotxes.", audio: "Senyal S-31 d'informació. Fi de carril bici.", panel_id: "S-04", ruta_panel: "S-12_A_S-15_DIRECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-32", categoria: "informacio", pregunta: "Què indica aquesta senyal S-32 d'INFORMACIÓ?", opcions: ["Fi de via per a vianants i bicicletes", "Fi zona compartida", "Fi carril bici"], correcta: 0, codi: "S-32", nombre_senal: "FIN DE VIA PARA PEATONES Y CICLISTAS", tip: "💡 CLAU: Quadrat blau amb barra. Separa't en calçada i carril.", audio: "Senyal S-32 d'informació. Fi de via per a vianants i bicicletes.", panel_id: "S-04", ruta_panel: "S-12_A_S-15_DIRECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-33", categoria: "informacio", pregunta: "Què indica aquesta senyal S-33 d'INFORMACIÓ?", opcions: ["Calçada sense sortida", "Carril tallat", "Desviament"], correcta: 0, codi: "S-33", nombre_senal: "CALZADA SIN SALIDA", tip: "💡 CLAU: Fons BLAU amb fletxa tallada. Cul de sac.", audio: "Senyal S-33 d'informació. Calçada sense sortida.", panel_id: "S-05", ruta_panel: "S-16_A_S-17_DIRECCIONES2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-34", categoria: "informacio", pregunta: "Què indica aquesta senyal S-34 d'INFORMACIÓ?", opcions: ["Zona de vianants", "Zona peatonal", "Prohibit cotxes"], correcta: 0, codi: "S-34", nombre_senal: "ZONA PEATONAL", tip: "💡 CLAU: Fons BLAU amb vianants. Velocitat 20km/h màxim.", audio: "Senyal S-34 d'informació. Zona de vianants.", panel_id: "S-05", ruta_panel: "S-16_A_S-17_DIRECCIONES2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-35", categoria: "informacio", pregunta: "Què indica aquesta senyal S-35 d'INFORMACIÓ?", opcions: ["Fi de zona de vianants", "Fi zona peatonal", "Fi zona 20"], correcta: 0, codi: "S-35", nombre_senal: "FIN DE ZONA PEATONAL", tip: "💡 CLAU: Fons BLAU amb barra. Torna circulació normal.", audio: "Senyal S-35 d'informació. Fi de zona de vianants.", panel_id: "S-05", ruta_panel: "S-16_A_S-17_DIRECCIONES2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-36", categoria: "informacio", pregunta: "Què indica aquesta senyal S-36 d'INFORMACIÓ?", opcions: ["Zona residencial", "Zona 20", "Zona escolar"], correcta: 0, codi: "S-36", nombre_senal: "ZONA RESIDENCIAL", tip: "💡 CLAU: Fons BLAU amb casa i vianant. Prioritat vianant.", audio: "Senyal S-36 d'informació. Zona residencial.", panel_id: "S-05", ruta_panel: "S-16_A_S-17_DIRECCIONES2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-37", categoria: "informacio", pregunta: "Què indica aquesta senyal S-37 d'INFORMACIÓ?", opcions: ["Fi de zona residencial", "Fi zona 20", "Fi zona peatonal"], correcta: 0, codi: "S-37", nombre_senal: "FIN DE ZONA RESIDENCIAL", tip: "💡 CLAU: Fons BLAU amb barra. Torna límit de 50km/h.", audio: "Senyal S-37 d'informació. Fi de zona residencial.", panel_id: "S-05", ruta_panel: "S-16_A_S-17_DIRECCIONES2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-38", categoria: "informacio", pregunta: "Què indica aquesta senyal S-38 d'INFORMACIÓ?", opcions: ["Zona de velocitat limitada", "Zona 30", "Zona escolar"], correcta: 0, codi: "S-38", nombre_senal: "ZONA DE VELOCIDAD LIMITADA", tip: "💡 CLAU: Fons BLAU amb 30. Màxim 30km/h a tota la zona.", audio: "Senyal S-38 d'informació. Zona de velocitat limitada.", panel_id: "S-05", ruta_panel: "S-16_A_S-17_DIRECCIONES2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-39", categoria: "informacio", pregunta: "Què indica aquesta senyal S-39 d'INFORMACIÓ?", opcions: ["Fi de zona de velocitat limitada", "Fi zona 30", "Fi zona escolar"], correcta: 0, codi: "S-39", nombre_senal: "FIN DE ZONA DE VELOCIDAD LIMITADA", tip: "💡 CLAU: Fons BLAU amb barra i 30. Torna 50km/h.", audio: "Senyal S-39 d'informació. Fi de zona de velocitat limitada.", panel_id: "S-05", ruta_panel: "S-16_A_S-17_DIRECCIONES2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-40", categoria: "informacio", pregunta: "Què indica aquesta senyal S-40 d'INFORMACIÓ?", opcions: ["Carrils amb sentit circulatori reversible", "Carril bus", "Carril VAO"], correcta: 0, codi: "S-40", nombre_senal: "CARRILES CON SENTIDO CIRCULATORIO REVERSIBLE", tip: "💡 CLAU: Fletxes verdes i vermelles. Canvia segons hora.", audio: "Senyal S-40 d'informació. Carrils amb sentit circulatori reversible.", panel_id: "S-06", ruta_panel: "S-18_A_S-19_SITUACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-41", categoria: "informacio", pregunta: "Què indica aquesta senyal S-41 d'INFORMACIÓ?", opcions: ["Carril per a vehicles amb alta ocupació", "Carril bus", "Carril lent"], correcta: 0, codi: "S-41", nombre_senal: "CARRIL PARA VEHICULOS CON ALTA OCUPACION", tip: "💡 CLAU: Diamant blanc. Mínim 2 persones al cotxe.", audio: "Senyal S-41 d'informació. Carril per a vehicles amb alta ocupació.", panel_id: "S-06", ruta_panel: "S-18_A_S-19_SITUACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-42", categoria: "informacio", pregunta: "Què indica aquesta senyal S-42 d'INFORMACIÓ?", opcions: ["Fi de carril per a vehicles amb alta ocupació", "Fi carril bus", "Fi carril lent"], correcta: 0, codi: "S-42", nombre_senal: "FIN DE CARRIL PARA VEHICULOS CON ALTA OCUPACION", tip: "💡 CLAU: Diamant amb barra. Ja pots usar carril normal.", audio: "Senyal S-42 d'informació. Fi de carril per a vehicles amb alta ocupació.", panel_id: "S-06", ruta_panel: "S-18_A_S-19_SITUACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-43", categoria: "informacio", pregunta: "Què indica aquesta senyal S-43 d'INFORMACIÓ?", opcions: ["Carril bus", "Carril VAO", "Carril taxi"], correcta: 0, codi: "S-43", nombre_senal: "CARRIL BUS", tip: "💡 CLAU: Fons BLAU amb bus. Només busos i taxis.", audio: "Senyal S-43 d'informació. Carril bus.", panel_id: "S-06", ruta_panel: "S-18_A_S-19_SITUACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-44", categoria: "informacio", pregunta: "Què indica aquesta senyal S-44 d'INFORMACIÓ?", opcions: ["Fi de carril bus", "Fi carril VAO", "Fi carril lent"], correcta: 0, codi: "S-44", nombre_senal: "FIN DE CARRIL BUS", tip: "💡 CLAU: Bus amb barra. Ja poden usar-lo altres.", audio: "Senyal S-44 d'informació. Fi de carril bus.", panel_id: "S-06", ruta_panel: "S-18_A_S-19_SITUACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-45", categoria: "informacio", pregunta: "Què indica aquesta senyal S-45 d'INFORMACIÓ?", opcions: ["Carril per a taxis", "Carril bus", "Carril moto"], correcta: 0, codi: "S-45", nombre_senal: "CARRIL TAXI", tip: "💡 CLAU: Fons BLAU amb taxi. Ús exclusiu.", audio: "Senyal S-45 d'informació. Carril per a taxis.", panel_id: "S-06", ruta_panel: "S-18_A_S-19_SITUACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-46", categoria: "informacio", pregunta: "Què indica aquesta senyal S-46 d'INFORMACIÓ?", opcions: ["Fi de carril per a taxis", "Fi carril bus", "Fi carril moto"], correcta: 0, codi: "S-46", nombre_senal: "FIN DE CARRIL TAXI", tip: "💡 CLAU: Taxi amb barra. Ús general a partir d'aquí.", audio: "Senyal S-46 d'informació. Fi de carril per a taxis.", panel_id: "S-06", ruta_panel: "S-18_A_S-19_SITUACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-47", categoria: "informacio", pregunta: "Què indica aquesta senyal S-47 d'INFORMACIÓ?", opcions: ["Carril per a bicicletes", "Carril bici", "Via ciclista"], correcta: 0, codi: "S-47", nombre_senal: "CARRIL PARA BICICLETAS", tip: "💡 CLAU: Fons BLAU amb bici. Separat de la calçada.", audio: "Senyal S-47 d'informació. Carril per a bicicletes.", panel_id: "S-06", ruta_panel: "S-18_A_S-19_SITUACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-48", categoria: "informacio", pregunta: "Què indica aquesta senyal S-48 d'INFORMACIÓ?", opcions: ["Fi de carril per a bicicletes", "Fi carril bici", "Fi via ciclista"], correcta: 0, codi: "S-48", nombre_senal: "FIN DE CARRIL PARA BICICLETAS", tip: "💡 CLAU: Bici amb barra. Torna a calçada amb precaució.", audio: "Senyal S-48 d'informació. Fi de carril per a bicicletes.", panel_id: "S-06", ruta_panel: "S-18_A_S-19_SITUACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-49", categoria: "informacio", pregunta: "Què indica aquesta senyal S-49 d'INFORMACIÓ?", opcions: ["Població", "Entrada població", "Ciutat"], correcta: 0, codi: "S-49", nombre_senal: "POBLACION", tip: "💡 CLAU: Fons BLAU. A partir d'aquí 50km/h genèric.", audio: "Senyal S-49 d'informació. Població.", panel_id: "S-07", ruta_panel: "S-20_A_S-21_CARRIL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-50", categoria: "informacio", pregunta: "Què indica aquesta senyal S-50 d'INFORMACIÓ?", opcions: ["Fi de població", "Sortida població", "Límit 90"], correcta: 0, codi: "S-50", nombre_senal: "FIN DE POBLACION", tip: "💡 CLAU: Fons BLAU amb barra. Torna 90km/h a carretera.", audio: "Senyal S-50 d'informació. Fi de població.", panel_id: "S-07", ruta_panel: "S-20_A_S-21_CARRIL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-51", categoria: "informacio", pregunta: "Què indica aquesta senyal S-51 d'INFORMACIÓ?", opcions: ["Límit de velocitat genèric", "Zona urbana", "Carretera"], correcta: 0, codi: "S-51", nombre_senal: "LIMITACIONES GENERICAS", tip: "💡 CLAU: Recordatori. 50 població, 90 carretera, 120 autopista.", audio: "Senyal S-51 d'informació. Límit de velocitat genèric.", panel_id: "S-07", ruta_panel: "S-20_A_S-21_CARRIL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-52", categoria: "informacio", pregunta: "Què indica aquesta senyal S-52 d'INFORMACIÓ?", opcions: ["Recomanació de velocitat", "Velocitat màxima", "Velocitat mínima"], correcta: 0, codi: "S-52", nombre_senal: "RECOMENDACION DE VELOCIDAD", tip: "💡 CLAU: Quadrat blau amb número negre. No és obligatori.", audio: "Senyal S-52 d'informació. Recomanació de velocitat.", panel_id: "S-07", ruta_panel: "S-20_A_S-21_CARRIL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-53", categoria: "informacio", pregunta: "Què indica aquesta senyal S-53 d'INFORMACIÓ?", opcions: ["Prioritat respecte al sentit contrari", "Cedeix el pas", "Estretament"], correcta: 0, codi: "S-53", nombre_senal: "PRIORIDAD RESPECTO AL SENTIDO CONTRARIO", tip: "💡 CLAU: Quadrat blau amb fletxa gran. Tu passes primer.", audio: "Senyal S-53 d'informació. Prioritat respecte al sentit contrari.", panel_id: "S-07", ruta_panel: "S-20_A_S-21_CARRIL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-54", categoria: "informacio", pregunta: "Què indica aquesta senyal S-54 d'INFORMACIÓ?", opcions: ["Prioritat respecte al sentit contrari", "Cedeix el pas", "Cedeix al contrari"], correcta: 1, codi: "S-54", nombre_senal: "PRIORIDAD RESPECTO AL SENTIDO CONTRARIO", tip: "💡 CLAU: Quadrat blau amb fletxa petita. Tu cedeixes.", audio: "Senyal S-54 d'informació. Cedeix el pas al sentit contrari.", panel_id: "S-07", ruta_panel: "S-20_A_S-21_CARRIL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-55", categoria: "informacio", pregunta: "Què indica aquesta senyal S-55 d'INFORMACIÓ?", opcions: ["Carrils reservats", "Carril bus", "Carril lent"], correcta: 0, codi: "S-55", nombre_senal: "CARRILES RESERVADOS", tip: "💡 CLAU: Indica quin carril és per a bus, taxi, VAO.", audio: "Senyal S-55 d'informació. Carrils reservats.", panel_id: "S-07", ruta_panel: "S-20_A_S-21_CARRIL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-56", categoria: "informacio", pregunta: "Què indica aquesta senyal S-56 d'INFORMACIÓ?", opcions: ["Fi de carrils reservats", "Fi carril bus", "Fi carril lent"], correcta: 0, codi: "S-56", nombre_senal: "FIN DE CARRILES RESERVADOS", tip: "💡 CLAU: Barra gris. Tots els carrils lliures.", audio: "Senyal S-56 d'informació. Fi de carrils reservats.", panel_id: "S-07", ruta_panel: "S-20_A_S-21_CARRIL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-57", categoria: "informacio", pregunta: "Què indica aquesta senyal S-57 d'INFORMACIÓ?", opcions: ["Preseñalització", "Direccions", "Sortides"], correcta: 0, codi: "S-57", nombre_senal: "PRESEÑALIZACION", tip: "💡 CLAU: Fons BLAU. T'avisa de les sortides que venen.", audio: "Senyal S-57 d'informació. Preseñalització.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-58", categoria: "informacio", pregunta: "Què indica aquesta senyal S-58 d'INFORMACIÓ?", opcions: ["Direcció", "Sortida", "Desviament"], correcta: 0, codi: "S-58", nombre_senal: "DIRECCION", tip: "💡 CLAU: Fons BLAU amb fletxa. Indica direcció.", audio: "Senyal S-58 d'informació. Direcció.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-59", categoria: "informacio", pregunta: "Què indica aquesta senyal S-59 d'INFORMACIÓ?", opcions: ["Itinerari", "Ruta", "Desviament"], correcta: 0, codi: "S-59", nombre_senal: "ITINERARIO", tip: "💡 CLAU: Fons BLAU. Ruta completa fins destí.", audio: "Senyal S-59 d'informació. Itinerari.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-60", categoria: "informacio", pregunta: "Què indica aquesta senyal S-60 d'INFORMACIÓ?", opcions: ["Confirmació d'itinerari", "Direcció", "Distància"], correcta: 0, codi: "S-60", nombre_senal: "CONFIRMACION DE ITINERARIO", tip: "💡 CLAU: Confirma que vas bé. Km a les poblacions.", audio: "Senyal S-60 d'informació. Confirmació d'itinerari.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-61", categoria: "informacio", pregunta: "Què indica aquesta senyal S-61 d'INFORMACIÓ?", opcions: ["Numèrica de carretera", "Autopista", "Nacional"], correcta: 0, codi: "S-61", nombre_senal: "NUMERACION DE CARRETERAS", tip: "💡 CLAU: A-2, N-340, AP-7. Identifica la via.", audio: "Senyal S-61 d'informació. Numèrica de carretera.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-62", categoria: "informacio", pregunta: "Què indica aquesta senyal S-62 d'INFORMACIÓ?", opcions: ["Autopista de peatge", "Autopista lliure", "Via ràpida"], correcta: 0, codi: "S-62", nombre_senal: "AUTOPISTA DE PEAJE", tip: "💡 CLAU: Fons BLAU amb símbol €. Cal pagar.", audio: "Senyal S-62 d'informació. Autopista de peatge.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-63", categoria: "informacio", pregunta: "Què indica aquesta senyal S-63 d'INFORMACIÓ?", opcions: ["Fi d'autopista de peatge", "Fi peatge", "Sortida"], correcta: 0, codi: "S-63", nombre_senal: "FIN DE AUTOPISTA DE PEAJE", tip: "💡 CLAU: Barra gris. Ja no pagues a partir d'aquí.", audio: "Senyal S-63 d'informació. Fi d'autopista de peatge.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-64", categoria: "informacio", pregunta: "Què indica aquesta senyal S-64 d'INFORMACIÓ?", opcions: ["Telepeatge", "Pagament manual", "Sortida"], correcta: 0, codi: "S-64", nombre_senal: "TELEPEAJE", tip: "💡 CLAU: Via T. No cal parar si tens dispositiu.", audio: "Senyal S-64 d'informació. Telepeatge.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-65", categoria: "informacio", pregunta: "Què indica aquesta senyal S-65 d'INFORMACIÓ?", opcions: ["Estació de servei", "Gasolinera", "Àrea de servei"], correcta: 0, codi: "S-65", nombre_senal: "ESTACION DE SERVICIO", tip: "💡 CLAU: Avisa a quants km hi ha gasolinera.", audio: "Senyal S-65 d'informació. Estació de servei.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-66", categoria: "informacio", pregunta: "Què indica aquesta senyal S-66 d'INFORMACIÓ?", opcions: ["Restaurant", "Bar", "Hotel"], correcta: 0, codi: "S-66", nombre_senal: "RESTAURANTE", tip: "💡 CLAU: Avisa a quants km hi ha restaurant.", audio: "Senyal S-66 d'informació. Restaurant.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-67", categoria: "informacio", pregunta: "Què indica aquesta senyal S-67 d'INFORMACIÓ?", opcions: ["Hotel", "Hostal", "Motel"], correcta: 0, codi: "S-67", nombre_senal: "HOTEL", tip: "💡 CLAU: Avisa a quants km hi ha hotel.", audio: "Senyal S-67 d'informació. Hotel.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-68", categoria: "informacio", pregunta: "Què indica aquesta senyal S-68 d'INFORMACIÓ?", opcions: ["Càmping", "Àrea de descans", "Hotel"], correcta: 0, codi: "S-68", nombre_senal: "CAMPING", tip: "💡 CLAU: Avisa a quants km hi ha càmping.", audio: "Senyal S-68 d'informació. Càmping.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-69", categoria: "informacio", pregunta: "Què indica aquesta senyal S-69 d'INFORMACIÓ?", opcions: ["Tallers", "Mecànic", "ITV"], correcta: 0, codi: "S-69", nombre_senal: "TALLERES", tip: "💡 CLAU: Avisa a quants km hi ha taller.", audio: "Senyal S-69 d'informació. Tallers.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-70", categoria: "informacio", pregunta: "Què indica aquesta senyal S-70 d'INFORMACIÓ?", opcions: ["Hospital", "Centre mèdic", "Creu roja"], correcta: 0, codi: "S-70", nombre_senal: "HOSPITAL", tip: "💡 CLAU: Avisa a quants km hi ha hospital.", audio: "Senyal S-70 d'informació. Hospital.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-71", categoria: "informacio", pregunta: "Què indica aquesta senyal S-71 d'INFORMACIÓ?", opcions: ["Policía", "Comissaria", "Guàrdia Civil"], correcta: 0, codi: "S-71", nombre_senal: "POLICIA", tip: "💡 CLAU: Avisa a quants km hi ha comissaria.", audio: "Senyal S-71 d'informació. Policía.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-72", categoria: "informacio", pregunta: "Què indica aquesta senyal S-72 d'INFORMACIÓ?", opcions: ["Telèfon", "Cabina", "Informació"], correcta: 0, codi: "S-72", nombre_senal: "TELEFONO", tip: "💡 CLAU: Avisa a quants km hi ha telèfon públic.", audio: "Senyal S-72 d'informació. Telèfon.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-73", categoria: "informacio", pregunta: "Què indica aquesta senyal S-73 d'INFORMACIÓ?", opcions: ["Ràdio", "Emissora", "Informació trànsit"], correcta: 0, codi: "S-73", nombre_senal: "RADIO", tip: "💡 CLAU: Freqüència FM per info de trànsit.", audio: "Senyal S-73 d'informació. Ràdio.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-74", categoria: "informacio", pregunta: "Què indica aquesta senyal S-74 d'INFORMACIÓ?", opcions: ["Aeroport", "Avió", "Vol"], correcta: 0, codi: "S-74", nombre_senal: "AEROPUERTO", tip: "💡 CLAU: Avisa a quants km hi ha aeroport.", audio: "Senyal S-74 d'informació. Aeroport.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-75", categoria: "informacio", pregunta: "Què indica aquesta senyal S-75 d'INFORMACIÓ?", opcions: ["Port", "Vaixell", "Mar"], correcta: 0, codi: "S-75", nombre_senal: "PUERTO", tip: "💡 CLAU: Avisa a quants km hi ha port.", audio: "Senyal S-75 d'informació. Port.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-76", categoria: "informacio", pregunta: "Què indica aquesta senyal S-76 d'INFORMACIÓ?", opcions: ["Estació de tren", "Tren", "Renfe"], correcta: 0, codi: "S-76", nombre_senal: "ESTACION DE FERROCARRIL", tip: "💡 CLAU: Avisa a quants km hi ha estació.", audio: "Senyal S-76 d'informació. Estació de tren.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-77", categoria: "informacio", pregunta: "Què indica aquesta senyal S-77 d'INFORMACIÓ?", opcions: ["Parada d'autobús", "Bus", "Estació bus"], correcta: 0, codi: "S-77", nombre_senal: "PARADA DE AUTOBUSES", tip: "💡 CLAU: Avisa a quants km hi ha parada de bus.", audio: "Senyal S-77 d'informació. Parada d'autobús.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-78", categoria: "informacio", pregunta: "Què indica aquesta senyal S-78 d'INFORMACIÓ?", opcions: ["Zona turística", "Monument", "Museu"], correcta: 0, codi: "S-78", nombre_senal: "ZONA TURISTICA", tip: "💡 CLAU: Quadrat marró. Lloc d'interès turístic.", audio: "Senyal S-78 d'informació. Zona turística.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-79", categoria: "informacio", pregunta: "Què indica aquesta senyal S-79 d'INFORMACIÓ?", opcions: ["Monument", "Lloc històric", "Museu"], correcta: 0, codi: "S-79", nombre_senal: "MONUMENTO", tip: "💡 CLAU: Quadrat marró. Bé d'interès cultural.", audio: "Senyal S-79 d'informació. Monument.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-80", categoria: "informacio", pregunta: "Què indica aquesta senyal S-80 d'INFORMACIÓ?", opcions: ["Altres serveis", "Informació", "Ajuda"], correcta: 0, codi: "S-80", nombre_senal: "OTROS SERVICIOS", tip: "💡 CLAU: Quadrat blau. Serveis no especificats.", audio: "Senyal S-80 d'informació. Altres serveis.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// ========= TRAMPES T-001 A T-065 =========
{ id: "T-001", categoria: "trampa", pregunta: "Aquesta senyal R-2 STOP sempre obliga a parar encara que no vingui ningú?", opcions: ["Sí, parada obligatòria sempre", "No, només si ve algú", "Només de nit"], correcta: 0, codi: "R-2", nombre_senal: "STOP", tip: "💡 TRAMPA DGT: El STOP és parada OBLIGATÒRIA. Fins 3 segons. Multa si no pares.", audio: "Trampa. Senyal R-2 STOP. Parada obligatòria sempre.", panel_id: "R-01", ruta_panel: "R-01_CEDA_STOP.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-002", categoria: "trampa", pregunta: "En rotonda amb senyal R-402, qui té prioritat?", opcions: ["El que entra", "El que està dins", "El de la dreta"], correcta: 1, codi: "R-402", nombre_senal: "INTERSECCION DE SENTIDO GIRATORIO", tip: "💡 TRAMPA DGT: Amb R-402, prioritat el que està dins. Sense senyal, prioritat a la dreta.", audio: "Trampa. Rotonda amb R-402. Prioritat el que està dins.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-003", categoria: "trampa", pregunta: "La senyal R-1 CEDA EL PASO t'obliga a parar sempre?", opcions: ["Sí, sempre", "No, només si ve algú", "Només a autopista"], correcta: 1, codi: "R-1", nombre_senal: "CEDA EL PASO", tip: "💡 TRAMPA DGT: Cedeix ≠ Parar. Només pares si ve vehicle amb prioritat.", audio: "Trampa. Senyal R-1 Cedeix el pas. Només si ve algú.", panel_id: "R-01", ruta_panel: "R-01_CEDA_STOP.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-004", categoria: "trampa", pregunta: "Amb línia contínua, pots avançar si vas molt lent?", opcions: ["Sí, amb precaució", "No, mai", "Només bicis"], correcta: 1, codi: "R-302", nombre_senal: "PROHIBIDO ADELANTAR", tip: "💡 TRAMPA DGT: Línia contínua = PROHIBIT avançar. Fins a ciclistes.", audio: "Trampa. Línia contínua. Prohibit avançar mai.", panel_id: "R-04", ruta_panel: "R-04_ADELANTAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-005", categoria: "trampa", pregunta: "La senyal R-307 PROHIBIT PARAR et deixa aturar 2 minuts?", opcions: ["Sí, càrrega ràpida", "No, ni 1 segon", "Sí, amb 4 intermitents"], correcta: 1, codi: "R-307", nombre_senal: "PROHIBIDO PARAR", tip: "💡 TRAMPA DGT: Parar = 0 segons. Aparcar = deixar vehicle. Multa igual.", audio: "Trampa. R-307 Prohibit parar. Ni 1 segon.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-006", categoria: "trampa", pregunta: "En població amb senyal S-49, quin és el límit genèric?", opcions: ["30 km/h", "40 km/h", "50 km/h"], correcta: 2, codi: "S-49", nombre_senal: "POBLACION", tip: "💡 TRAMPA DGT: S-49 = 50km/h genèric. S-36 Zona 20 = 20km/h.", audio: "Trampa. Entrada a població. Límit 50km/h.", panel_id: "S-07", ruta_panel: "S-20_A_S-21_CARRIL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-007", categoria: "trampa", pregunta: "La senyal P-5 ROTONDA et dóna prioritat a tu?", opcions: ["Sí, sempre", "No, cedeix el pas", "Depèn del cotxe"], correcta: 1, codi: "P-5", nombre_senal: "ROTONDA", tip: "💡 TRAMPA DGT: P-5 avisa perill. Si no hi ha R-402, prioritat a la dreta.", audio: "Trampa. Senyal P-5 Rotonda. No dóna prioritat.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-008", categoria: "trampa", pregunta: "Amb R-301 VELOCITAT LIMITADA 120, pots anar a 130?", opcions: ["Sí, 10% marge", "No, màxim 120", "Sí, si no hi ha radars"], correcta: 1, codi: "R-301", nombre_senal: "VELOCIDAD LIMITADA", tip: "💡 TRAMPA DGT: El número és màxim. Ja no hi ha marge del 10%.", audio: "Trampa. R-301 Velocitat limitada. Màxim el número.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-009", categoria: "trampa", pregunta: "La senyal R-400a SENTIT OBLIGATORI A LA DRETA et deixa seguir recte?", opcions: ["Sí, si no hi ha tràfic", "No, obligatori girar", "Sí, canviant carril"], correcta: 1, codi: "R-400a", nombre_senal: "SENTIDO OBLIGATORIO A LA DERECHA", tip: "💡 TRAMPA DGT: Cercle blau = OBLIGATORI. No és consell.", audio: "Trampa. R-400a Sentit obligatori. Has de girar.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-010", categoria: "trampa", pregunta: "En pas a nivell P-11 sense barreres, has de mirar?", opcions: ["No, el tren pita", "Sí, als 2 costats", "Només a la dreta"], correcta: 1, codi: "P-11", nombre_senal: "PASO A NIVEL CON BARRERAS", tip: "💡 TRAMPA DGT: Sense barreres = tu ets responsable. Mira i escolta.", audio: "Trampa. Pas a nivell sense barreres. Mira als 2 costats.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-011", categoria: "trampa", pregunta: "La senyal R-500 FI DE PROHIBICIONS anul·la el límit de 50 a població?", opcions: ["Sí, ja pots córrer", "No, torna 50 genèric", "Sí, torna 90"], correcta: 1, codi: "R-500", nombre_senal: "FIN DE PROHIBICIONES", tip: "💡 TRAMPA DGT: R-500 només anul·la prohibicions. Torna norma genèrica.", audio: "Trampa. R-500 Fi de prohibicions. Torna límit genèric.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-012", categoria: "trampa", pregunta: "Amb R-106 PROHIBIT CAMIONS, pot passar un furgó?", opcions: ["Sí, si pesa menys 3500kg", "No, cap camió", "Sí, si va buit"], correcta: 0, codi: "R-106", nombre_senal: "PROHIBIDO CAMIONES", tip: "💡 TRAMPA DGT: Camió = >3500kg. Furgoneta petita sí pot.", audio: "Trampa. R-106 Prohibit camions. Només >3500kg.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-013", categoria: "trampa", pregunta: "La senyal S-27 CARRIL BICI és obligatori usar-lo?", opcions: ["No, és opcional", "Sí, si existeix", "Només nens"], correcta: 1, codi: "S-27", nombre_senal: "CARRIL BICI", tip: "💡 TRAMPA DGT: Si hi ha carril bici, la bici NO pot anar per calçada.", audio: "Trampa. S-27 Carril bici. Ús obligatori.", panel_id: "S-04", ruta_panel: "S-12_A_S-15_DIRECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-014", categoria: "trampa", pregunta: "En túnel S-10, quan encens els llums?", opcions: ["Quan estigui fosc", "Sempre, abans d'entrar", "Només de nit"], correcta: 1, codi: "S-10", nombre_senal: "TUNEL", tip: "💡 TRAMPA DGT: Túnel = llums curt OBLIGATORIS. Fins de dia.", audio: "Trampa. Túnel. Llums de curt abans d'entrar.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-015", categoria: "trampa", pregunta: "La senyal P-20 PAS DE VIANANTS, qui cedeix?", opcions: ["El vianant", "El vehicle", "El més ràpid"], correcta: 1, codi: "P-20a", nombre_senal: "PASO DE PEATONES", tip: "💡 TRAMPA DGT: Vianant a pas de zebra té PRIORITAT. Has de parar.", audio: "Trampa. Pas de vianants. Prioritat al vianant.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-016", categoria: "trampa", pregunta: "R-303 PROHIBIT GIRAR A L'ESQUERRA prohibeix canvi de sentit?", opcions: ["Sí", "No", "Depèn"], correcta: 0, codi: "R-303", nombre_senal: "PROHIBIDO GIRAR A LA IZQUIERDA", tip: "💡 TRAMPA DGT: Gir esquerra inclou canvi de sentit de 180°.", audio: "Trampa. R-303 Prohibit girar esquerra. Inclou canvi sentit.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-017", categoria: "trampa", pregunta: "Amb R-200 PROHIBIT EL PAS, pot passar una moto?", opcions: ["Sí", "No, ningú", "Només emergències"], correcta: 1, codi: "R-200", nombre_senal: "PROHIBIDO EL PASO", tip: "💡 TRAMPA DGT: Cercle vermell buit = TOTHOM prohibit. Sense excepcions.", audio: "Trampa. R-200 Prohibit el pas. Ningú pot passar.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-018", categoria: "trampa", pregunta: "La senyal P-18 OBRES avisa que la velocitat baixa a 20?", opcions: ["Sí, sempre", "No, mira el cartell", "Sí, per llei"], correcta: 1, codi: "P-18", nombre_senal: "OBRAS", tip: "💡 TRAMPA DGT: P-18 només avisa perill. El límit el marca R-301.", audio: "Trampa. P-18 Obres. Mira el límit de velocitat.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-019", categoria: "trampa", pregunta: "S-14 APARCAMENT et deixa parar en doble fila?", opcions: ["Sí, 5 minuts", "No, mai", "Sí, amb intermitents"], correcta: 1, codi: "S-14", nombre_senal: "APARCAMIENTO", tip: "💡 TRAMPA DGT: Aparcar = dins zona marcada. Doble fila = multa.", audio: "Trampa. S-14 Aparcament. No doble fila.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-020", categoria: "trampa", pregunta: "R-401a PAS OBLIGATORI PER LA DRETA, pots passar per l'esquerra?", opcions: ["Sí, si no hi ha ningú", "No, obligatori dreta", "Sí, amb precaució"], correcta: 1, codi: "R-401a", nombre_senal: "PASO OBLIGATORIO A LA DERECHA", tip: "💡 TRAMPA DGT: Obstacle. Has de passar pel costat que marca la fletxa.", audio: "Trampa. R-401a Pas obligatori per la dreta.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-021", categoria: "trampa", pregunta: "La senyal P-13a CURVA PERILLOSA, has de frenar?", opcions: ["Sí, reduir velocitat", "No, si està seca", "Només de nit"], correcta: 0, codi: "P-13a", nombre_senal: "CURVA PELIGROSA A LA DERECHA", tip: "💡 TRAMPA DGT: P-13a avisa perill. Redueix abans de la corba.", audio: "Trampa. P-13a Curva perillosa. Redueix velocitat.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-022", categoria: "trampa", pregunta: "R-201 PESO LIMITADO 5T, pot passar un cotxe?", opcions: ["No", "Sí", "Només buit"], correcta: 1, codi: "R-201", nombre_senal: "PESO LIMITADO", tip: "💡 TRAMPA DGT: Afecta al pes total. Cotxes normals pesen menys de 5T.", audio: "Trampa. R-201 Pes limitat. Cotxes sí passen.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-023", categoria: "trampa", pregunta: "En glorieta sense R-402, qui té prioritat?", opcions: ["El que entra", "El que està dins", "El de la dreta"], correcta: 2, codi: "R-402", nombre_senal: "INTERSECCION DE SENTIDO GIRATORIO", tip: "💡 TRAMPA DGT: Sense R-402 = norma general. Prioritat a la dreta.", audio: "Trampa. Rotonda sense senyal. Prioritat a la dreta.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-024", categoria: "trampa", pregunta: "P-11a PAS A NIVELL SENSE BARRERES, el tren té prioritat?", opcions: ["No", "Sí, sempre", "Depèn"], correcta: 1, codi: "P-11a", nombre_senal: "PASO A NIVEL SIN BARRERAS", tip: "💡 TRAMPA DGT: Tren sempre té prioritat. Para i mira.", audio: "Trampa. Pas a nivell. El tren té prioritat sempre.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-025", categoria: "trampa", pregunta: "R-308h ESTACIONAMENT PROHIBIT, pots parar 2 minuts?", opcions: ["Sí", "No", "Només càrrega"], correcta: 1, codi: "R-308h", nombre_senal: "ESTACIONAMIENTO PROHIBIDO", tip: "💡 TRAMPA DGT: Prohibit estacionar = no deixar vehicle. Parar sí, si no hi ha R-307.", audio: "Trampa. R-308h Prohibit estacionar. Parar sí.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-026", categoria: "trampa", pregunta: "S-1 AUTOPISTA, quin és el mínim?", opcions: ["50 km/h", "60 km/h", "No hi ha mínim"], correcta: 1, codi: "S-1", nombre_senal: "AUTOPISTA", tip: "💡 TRAMPA DGT: A autopista mínim 60km/h. Prohibit anar més lent.", audio: "Trampa. Autopista. Velocitat mínima 60km/h.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-027", categoria: "trampa", pregunta: "R-114 BICICLETAS PROHIBIDAS, pot anar un patinet?", opcions: ["Sí", "No", "Depèn"], correcta: 1, codi: "R-114", nombre_senal: "PROHIBIDO BICICLETAS", tip: "💡 TRAMPA DGT: La senyal específica bici. Patinet = vehicle mobilitat personal.", audio: "Trampa. R-114 Prohibit bicis. Patinet pot ser multa.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-028", categoria: "trampa", pregunta: "P-19 CALZADA DESLIZANTE, has d'augmentar distància?", opcions: ["No", "Sí", "Només pluja"], correcta: 1, codi: "P-19", nombre_senal: "CALZADA DESLIZANTE", tip: "💡 TRAMPA DGT: Paviment relliscós = més distància de seguretat.", audio: "Trampa. P-19 Calzada relliscosa. Augmenta distància.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-029", categoria: "trampa", pregunta: "R-400c SENTIT OBLIGATORI DE FRENTE, pots girar?", opcions: ["Sí", "No", "Només dreta"], correcta: 1, codi: "R-400c", nombre_senal: "SENTIDO OBLIGATORIO DE FRENTE", tip: "💡 TRAMPA DGT: Cercle blau = obligatori. Només recte.", audio: "Trampa. R-400c Sentit obligatori. Només de front.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-030", categoria: "trampa", pregunta: "En R-03 PRIORIDAD EN VIA, qui cedeix?", opcions: ["Tu", "Els altres", "Ningú"], correcta: 1, codi: "R-03", nombre_senal: "PRIORIDAD EN VIA", tip: "💡 TRAMPA DGT: Tu tens prioritat. Els altres han de cedir.", audio: "Trampa. R-03 Prioritat en via. Tu passes primer.", panel_id: "R-01", ruta_panel: "R-01_CEDA_STOP.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-031", categoria: "trampa", pregunta: "R-4 FIN DE PRIORIDAD, què passa després?", opcions: ["Tens prioritat", "Perds prioritat", "Stop"], correcta: 1, codi: "R-04", nombre_senal: "FIN DE PRIORIDAD", tip: "💡 TRAMPA DGT: Després de R-04 torna norma general: dreta.", audio: "Trampa. R-04 Fi de prioritat. Torna prioritat dreta.", panel_id: "R-01", ruta_panel: "R-01_CEDA_STOP.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-032", categoria: "trampa", pregunta: "P-15 RESALTO, has d'accelerar?", opcions: ["Sí", "No, reduir", "Igual"], correcta: 1, codi: "P-15", nombre_senal: "RESALTO", tip: "💡 TRAMPA DGT: Ressalt = reduir. Pots perdre control.", audio: "Trampa. P-15 Ressalt. Redueix velocitat.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-033", categoria: "trampa", pregunta: "R-205 ALTURA LIMITADA 3m, passa un 4x4?", opcions: ["Sí", "No, si fa més", "Sí, buit"], correcta: 1, codi: "R-205", nombre_senal: "ALTURA LIMITADA", tip: "💡 TRAMPA DGT: Si el teu vehicle fa més d'altura, NO passis.", audio: "Trampa. R-205 Alçada limitada. Mira altura vehicle.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-034", categoria: "trampa", pregunta: "S-5 FIN DE AUTOPISTA, quin límit hi ha?", opcions: ["120", "90", "50"], correcta: 1, codi: "S-5", nombre_senal: "FIN DE AUTOPISTA", tip: "💡 TRAMPA DGT: Fi autopista = carretera convencional = 90km/h.", audio: "Trampa. Fi d'autopista. Límit 90km/h.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-035", categoria: "trampa", pregunta: "R-306 PROHIBIT ADELANTAR A CAMIONS, pot avançar un cotxe?", opcions: ["No", "Sí", "Només busos"], correcta: 1, codi: "R-306", nombre_senal: "PROHIBIDO ADELANTAR A CAMIONES > 3500 KG", tip: "💡 TRAMPA DGT: Només afecta camions >3500kg. Cotxes sí poden.", audio: "Trampa. R-306 Només camions. Cotxes sí avancen.", panel_id: "R-04", ruta_panel: "R-04_ADELANTAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-036", categoria: "trampa", pregunta: "P-35 TRAFICO AMBOS SENTIDOS, era abans sentit únic?", opcions: ["Sí", "No", "Depèn"], correcta: 0, codi: "P-35", nombre_senal: "TRAFICO EN AMBOS SENTIDOS", tip: "💡 TRAMPA DGT: Avís que acaba sentit únic. Compte al sortir.", audio: "Trampa. P-35 Doble sentit. Acaba sentit únic.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-037", categoria: "trampa", pregunta: "R-507 FIN OBLIGACION VEHICULO MOTOR, poden entrar bicis?", opcions: ["No", "Sí", "Només motos"], correcta: 1, codi: "R-507", nombre_senal: "FIN OBLIGACION VEHICULO MOTOR", tip: "💡 TRAMPA DGT: Acaba obligació motor. Ja poden entrar altres.", audio: "Trampa. Fi obligació motor. Ja entren bicis.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-038", categoria: "trampa", pregunta: "P-24 ANIMALES EN LIBERTAD, a quina velocitat?", opcions: ["Igual", "Reduir", "Accelerar"], correcta: 1, codi: "P-24", nombre_senal: "PASO DE ANIMALES EN LIBERTAD", tip: "💡 TRAMPA DGT: Animals = reduir i alerta. Poden creuar.", audio: "Trampa. P-24 Animals. Redueix i vigila.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-039", categoria: "trampa", pregunta: "R-403a PASO OBLIGATORIO DERECHA, és opcional?", opcions: ["Sí", "No", "Només camions"], correcta: 1, codi: "R-403a", nombre_senal: "PASO OBLIGATORIO A LA DERECHA", tip: "💡 TRAMPA DGT: Obligatori = no opcional. És ordre.", audio: "Trampa. R-403a Pas obligatori. No és opcional.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-040", categoria: "trampa", pregunta: "S-49 POBLACION, pots pitar?", opcions: ["Sí, sempre", "No, prohibit", "Només emergència"], correcta: 2, codi: "S-49", nombre_senal: "POBLACION", tip: "💡 TRAMPA DGT: A població prohibit pitar. Només perill.", audio: "Trampa. Població. Prohibit pitar.", panel_id: "S-07", ruta_panel: "S-20_A_S-21_CARRIL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-041", categoria: "trampa", pregunta: "R-108 MERCANCIAS PELIGROSAS PROHIBIDO, afecta a cotxes?", opcions: ["Sí", "No", "Només camions"], correcta: 2, codi: "R-108", nombre_senal: "PROHIBIDO VEHICULOS MERCANCIAS PELIGROSAS", tip: "💡 TRAMPA DGT: Només vehicles que transportin ADR. Cotxe normal sí.", audio: "Trampa. R-108 Només ADR. Cotxe normal sí.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-042", categoria: "trampa", pregunta: "P-10a PROXIMIDAD PASO NIVEL, a quants metres?", opcions: ["150m", "250m", "100m"], correcta: 0, codi: "P-10a", nombre_senal: "PROXIMIDAD DE PASO A NIVEL CON BARRERAS", tip: "💡 TRAMPA DGT: P-10a = 150m. P-9b = 250m. P-10b = 100m.", audio: "Trampa. P-10a 150 metres abans pas nivell.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-043", categoria: "trampa", pregunta: "R-309 ZONA LIMITADA, has de posar disc?", opcions: ["No", "Sí", "Depèn"], correcta: 1, codi: "R-309", nombre_senal: "ZONA DE ESTACIONAMIENTO LIMITADO", tip: "💡 TRAMPA DGT: Zona blava = disc horari obligatori.", audio: "Trampa. R-309 Zona blava. Disc horari obligatori.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-044", categoria: "trampa", pregunta: "P-1 INTERSECCION, qui té prioritat?", opcions: ["La dreta", "La principal", "El més gran"], correcta: 1, codi: "P-1", nombre_senal: "INTERSECCION CON PRIORIDAD", tip: "💡 TRAMPA DGT: P-1 avisa intersecció. Si no hi ha senyal, dreta.", audio: "Trampa. P-1 Intersecció. Mira senyals prioritat.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-045", categoria: "trampa", pregunta: "R-500 FI PROHIBICIONS anul·la límit genèric?", opcions: ["Sí", "No", "Només a autopista"], correcta: 1, codi: "R-500", nombre_senal: "FIN DE PROHIBICIONES", tip: "💡 TRAMPA DGT: Només anul·la prohibicions específiques. Torna norma.", audio: "Trampa. R-500 Torna límit genèric de la via.", panel_id: "R-13", ruta_panel: "R-13_FIN_GENERICO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-046", categoria: "trampa", pregunta: "P-33 VIENTOS FUERTES, has d'agafar fort volant?", opcions: ["No", "Sí", "Només camions"], correcta: 1, codi: "P-33", nombre_senal: "VIENTOS FUERTES TRANSVERSALES", tip: "💡 TRAMPA DGT: Vent lateral = dues mans volant i reduir.", audio: "Trampa. P-33 Vent fort. Agafa fort volant.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-047", categoria: "trampa", pregunta: "R-116 PEATONES PROHIBIDOS, pot creuar un cec?", opcions: ["No", "Sí", "Amb acompanyant"], correcta: 1, codi: "R-116", nombre_senal: "PROHIBIDO PEATONES", tip: "💡 TRAMPA DGT: Excepció: persones mobilitat reduïda amb acompanyant.", audio: "Trampa. R-116 Prohibit vianants. Excepte PMR.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-048", categoria: "trampa", pregunta: "S-14 APARCAMENT, pots aparcar en bateria?", opcions: ["Sí", "No", "Depèn senyal"], correcta: 2, codi: "S-14", nombre_senal: "APARCAMIENTO", tip: "💡 TRAMPA DGT: S-14 indica zona. La forma la marca marques vial.", audio: "Trampa. S-14 Aparcament. Mira marques al terra.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-049", categoria: "trampa", pregunta: "R-301 30km/h, a autopista val?", opcions: ["Sí", "No", "Només pluja"], correcta: 1, codi: "R-301", nombre_senal: "VELOCIDAD LIMITADA", tip: "💡 TRAMPA DGT: Límit específic anul·la genèric. 30 és 30.", audio: "Trampa. R-301 30km/h. És el límit encara autopista.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-050", categoria: "trampa", pregunta: "P-20c PAS CICLISTES I VIANANTS, qui passa primer?", opcions: ["La bici", "El vianant", "El cotxe"], correcta: 1, codi: "P-20c", nombre_senal: "PASO DE CICLISTAS Y PEATONES", tip: "💡 TRAMPA DGT: Al pas, prioritat vianant. Després bici.", audio: "Trampa. P-20c Prioritat vianant després bici.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-051", categoria: "trampa", pregunta: "R-400b ESQUERRA OBLIGATORIA, pots fer U?", opcions: ["Sí", "No", "Depèn"], correcta: 1, codi: "R-400b", nombre_senal: "SENTIDO OBLIGATORIO A LA IZQUIERDA", tip: "💡 TRAMPA DGT: Obligatori esquerra ≠ canvi sentit. U prohibida.", audio: "Trampa. R-400b Esquerra obligatòria. U prohibida.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-052", categoria: "trampa", pregunta: "P-14a CURVAS PRIMERA DRETA, quantes corbes?", opcions: ["1", "2 o més", "3"], correcta: 1, codi: "P-14a", nombre_senal: "CURVAS PELIGROSAS PRIMERA A LA DERECHA", tip: "💡 TRAMPA DGT: P-14a = mínim 2 corbes seguides.", audio: "Trampa. P-14a Mínim 2 corbes perilloses.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-053", categoria: "trampa", pregunta: "R-204 ANCHURA 2m, passa SUV?", opcions: ["Sí", "No, si fa més", "Sí, plegant retrovisors"], correcta: 1, codi: "R-204", nombre_senal: "ANCHURA LIMITADA", tip: "💡 TRAMPA DGT: Amplada total vehicle. Sense retrovisors.", audio: "Trampa. R-204 Amplada limitada. Mira amplada.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-054", categoria: "trampa", pregunta: "R-5 PRIORIDAD SENTIDO CONTRARIO, qui passa?", opcions: ["Tu", "El contrari", "El més ràpid"], correcta: 0, codi: "R-05", nombre_senal: "PRIORIDAD SENTIDO CONTRARIO", tip: "💡 TRAMPA DGT: Senyal blau. Tu tens prioritat en estretament.", audio: "Trampa. R-05 Tu tens prioritat al contrari.", panel_id: "R-01", ruta_panel: "R-01_CEDA_STOP.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-055", categoria: "trampa", pregunta: "P-32 DESPRENDIMIENTO, per on vas?", opcions: ["Pel centre", "Per la dreta", "Per l'esquerra"], correcta: 0, codi: "P-32", nombre_senal: "DESPRENDIMIENTO", tip: "💡 TRAMPA DGT: Caiguda pedres. Ves pel centre i alerta.", audio: "Trampa. P-32 Despreniment. Ves pel centre.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-056", categoria: "trampa", pregunta: "R-309 LIMITAT, quant temps màxim?", opcions: ["1h", "Depèn panell", "24h"], correcta: 1, codi: "R-309", nombre_senal: "ZONA DE ESTACIONAMIENTO LIMITADO", tip: "💡 TRAMPA DGT: El temps el marca panell addicional. 1h, 2h...", audio: "Trampa. R-309 Temps segons panell addicional.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-057", categoria: "trampa", pregunta: "P-21a NIÑOS, a quina hora perill?", opcions: ["Només nit", "Entrada sortida escola", "Sempre"], correcta: 1, codi: "P-21a", nombre_senal: "NIÑOS", tip: "💡 TRAMPA DGT: Perill màxim entrada/sortida escola. Redueix.", audio: "Trampa. P-21a Nens. Compte hores escola.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-058", categoria: "trampa", pregunta: "R-404 CALZADA AUTOMOVILES, pot entrar moto 125?", opcions: ["No", "Sí", "Només 250"], correcta: 1, codi: "R-404", nombre_senal: "CALZADA PARA AUTOMOVILES", tip: "💡 TRAMPA DGT: 125cc = automòbil. Sí pot. Ciclomotor no.", audio: "Trampa. R-404 125cc sí. Ciclomotor no.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-059", categoria: "trampa", pregunta: "S-6 FIN AUTOVIA, canvien encreuaments?", opcions: ["No", "Sí", "Només peatge"], correcta: 1, codi: "S-6", nombre_senal: "FIN DE AUTOVIA", tip: "💡 TRAMPA DGT: Fi autovia = poden haver encreuaments a nivell.", audio: "Trampa. Fi autovia. Compte encreuaments.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-060", categoria: "trampa", pregunta: "R-303 GIR ESQUERRA, afecta glorietes?", opcions: ["Sí", "No", "Només interseccions"], correcta: 1, codi: "R-303", nombre_senal: "PROHIBIDO GIRAR A LA IZQUIERDA", tip: "💡 TRAMPA DGT: No afecta glorietes. Allà mana R-402.", audio: "Trampa. R-303 No afecta glorietes.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-061", categoria: "trampa", pregunta: "P-16a DESCENSO PELIGROSO, has d'usar fre motor?", opcions: ["No", "Sí", "Només camions"], correcta: 1, codi: "P-16a", nombre_senal: "DESCENSO PELIGROSO", tip: "💡 TRAMPA DGT: Pendent fort = marxa curta i fre motor.", audio: "Trampa. P-16a Pendent. Usa fre motor.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-062", categoria: "trampa", pregunta: "R-202 PESO POR EJE, afecta turismes?", opcions: ["Sí", "No", "Només camions"], correcta: 2, codi: "R-202", nombre_senal: "PESO POR EJE LIMITADO", tip: "💡 TRAMPA DGT: Afecta principalment camions pesats.", audio: "Trampa. R-202 Pes per eix. Afecta camions.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-063", categoria: "trampa", pregunta: "P-50 OTROS PELIGROS, què fas?", opcions: ["Ignorar", "Alerta màxima", "Accelerar"], correcta: 1, codi: "P-50", nombre_senal: "OTROS PELIGROS", tip: "💡 TRAMPA DGT: P-50 = perill no catalogat. Alerta màxima.", audio: "Trampa. P-50 Altres perills. Alerta màxima.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-064", categoria: "trampa", pregunta: "R-400d DRETA OBLIGATORIA, pots seguir?", opcions: ["Sí", "No", "Només busos"], correcta: 1, codi: "R-400d", nombre_senal: "SENTIDO OBLIGATORIO A LA DERECHA", tip: "💡 TRAMPA DGT: Fletxa corba = obligatori gir. No recte.", audio: "Trampa. R-400d Gir obligatori a la dreta.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-065", categoria: "trampa", pregunta: "R-309 ZONA ESTACIONAMENT LIMITAT és gratis?", opcions: ["Sí, sempre", "No, horari i pagament", "Sí, diumenges"], correcta: 1, codi: "R-309", nombre_senal: "ZONA DE ESTACIONAMIENTO LIMITADO", tip: "💡 TRAMPA DGT: Zona blava = pagament i temps màxim. Mira rellotge.", audio: "Trampa. R-309 Zona aparcament limitat. De pagament.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } }
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

// ===== GASDRIVE DGT CAT V9.8.4 - IMAGENES DGT REALES + TRAMPES + TIP DESPUES DE RESPONDER + 200 SEÑALES =====
let tipsData = [];
let currentTip = 0;
let tempsIniciTemari = null;
let contadorTemari = null;
let sitCategoriaActiva = 'clima'; 

// ===== V9.8.4 BANCO DE SVGS ELIMINADO - AHORA USAMOS RUTA_PANEL =====
const SENALES_SVG = {}; // YA NO SE USA

// TU BANCO VA AQUI: const senyals = [...] // <- TU YA LO TIENES, NO LO BORRES. Añade PREGUNTES.trampes aqui tambien

// ===== V9.8.4 FUNCIÓN ACTUALIZADA: PINTAR PANEL DGT REAL COMPLETO SIN COORDENADAS =====
function pintarImatgeSiExisteix(cat, pregunta) {
  const imgDiv = document.getElementById(`test-${cat}-imagen`) || document.getElementById(`examen-imagen`);
  const emojisDiv = document.getElementById(`test-${cat}-emojis`) || document.getElementById(`examen-emojis`);
  const tipDiv = document.getElementById(`test-${cat}-tip`) || document.getElementById(`examen-tip`);

  if (!imgDiv) return;

  // SI ES SEÑAL O TRAMPA: Pintar panel completo desde ruta_panel
  if ((cat === 'senyals' || cat === 'trampes') && pregunta.ruta_panel) {
    imgDiv.innerHTML = `
      <div style="background:#0a0a1a; padding:12px; border-radius:16px; border:3px solid #00D9FF; box-shadow:0 0 25px rgba(0,217,255,0.3);">
        <img
          src="./${pregunta.ruta_panel}"
          alt="Panel DGT ${pregunta.panel_id || ''}"
          style="width:100%; height:auto; max-height:280px; object-fit:contain; border-radius:12px; display:block;"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
        />
        <div style="display:none; color:#ff6b6b; text-align:center; padding:20px;">
          ❌ No s'ha trobat: ${pregunta.ruta_panel}
        </div>
        <div style="text-align:center; color:#888; font-size:12px; margin-top:8px;">
          Panel: ${pregunta.panel_id || 'N/A'}
        </div>
      </div>
    `;
    imgDiv.style.border = 'none';
    imgDiv.style.boxShadow = 'none';
  }
  // SI NO ES SEÑAL: Deja placeholder
  else {
    imgDiv.innerHTML = `<div class="placeholder" style="color:#00aaff; text-align:center; padding:40px; font-size:16px;">Sense imatge</div>`;
    imgDiv.style.border = '2px dashed rgba(0, 217, 255, 0.3)';
    imgDiv.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.1)';
    imgDiv.style.borderRadius = '12px';
  }

  // EMOJIS: Desactivados para señales
  if(emojisDiv) {
    emojisDiv.innerHTML = '';
    emojisDiv.style.display = 'none';
  }

  // TIP: OCULTAR SIEMPRE AQUÍ. Se muestra después de responder
  if(tipDiv) {
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
    trampes: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} }, // NUEVO
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
  test: { general: {idx:0,encerts:0,ratxa:0,puntuacio:0}, senyals: {idx:0,encerts:0,ratxa:0,puntuacio:0}, trampes: {idx:0,encerts:0,ratxa:0,puntuacio:0}, normes: {idx:0,encerts:0,ratxa:0,puntuacio:0}, mecanica: {idx:0,encerts:0,ratxa:0,puntuacio:0}, auxilis: {idx:0,encerts:0,ratxa:0,puntuacio:0}, mediambient: {idx:0,encerts:0,ratxa:0,puntuacio:0} }, // AÑADIDO TRAMPES
  examen: { activa: false, preguntes: [], index: 0, encerts: 0, fallos: 0, timer: null, temps: 1800, categoria: 'general' },
  sit: { clima: {idx:0,encerts:0,puntuacio:0,current:null}, urbà: {idx:0,encerts:0,puntuacio:0,current:null}, carretera: {idx:0,encerts:0,puntuacio:0,current:null}, emergència: {idx:0,encerts:0,puntuacio:0,current:null} }
};

if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }

function init() {
  console.log("GasDrive V9.8.4 CAT carregat");
  autoMapearTotesPreguntes();
  comprovarNouDia();
  iniciarComptadorTemari();
  mostrarIntro();
  actualitzarCoins();
  carregarPregunta('general'); carregarPregunta('senyals'); carregarPregunta('trampes'); carregarPregunta('normes'); carregarPregunta('mecanica'); carregarPregunta('auxilis'); carregarPregunta('mediambient'); // AÑADIDO TRAMPES
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
  const categories = ['senyals','trampes','normes','mecanica','auxilis','mediambient']; // AÑADIDO TRAMPES
  const noms = ['🚦 SENYALS','🪤 TRAMPES','📋 NORMES','⚙️ MECÀNICA','🚑 AUXILIS','♻️ MEDI AMBIENT']; // AÑADIDO TRAMPES
  const temari = ['TEMARI 1','TEMARI 1','TEMARI 2','TEMARI 4','TEMARI 3','TEMARI 5']; // AÑADIDO TRAMPES
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

  // ===== V9.8.4 FIX COMPATIBILIDAD + AUDIO =====
  const preguntaTxt = pOriginal.q || pOriginal.pregunta;
  const opcionsOriginales = pOriginal.a || pOriginal.opcions;
  const indexCorrectaOriginal = pOriginal.ok!== undefined? pOriginal.ok : pOriginal.correcta;
  const audioTxt = pOriginal.audio || '';
  const textCorrecte = opcionsOriginales[indexCorrectaOriginal];

  const opcionsBarrejades = barrejarArray(opcionsOriginales);
  const nouIndexCorrecte = opcionsBarrejades.indexOf(textCorrecte);
  const p = {...pOriginal, a: opcionsBarrejades, ok: nouIndexCorrecte, q: preguntaTxt, id: pOriginal.id || (cat + '_' + s.idx)};
  s.current = p;

  pintarImatgeSiExisteix(cat, p);

  document.getElementById(`test-${cat}-pregunta`).textContent = p.q;

  // ===== BOTON AUDIO NUEVO PARA SENYALS Y TRAMPES =====
  const contPregunta = document.getElementById(`test-${cat}-pregunta`);
  if(audioTxt && (cat === 'senyals' || cat === 'trampes')){
    contPregunta.innerHTML = `${p.q} <button class="btn-audio" onclick="parlar('${audioTxt.replace(/'/g, "\\'")}')">🔊</button>`;
  }

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

// ===== NUEVA FUNCION PARA REPRODUCIR AUDIO =====
function parlar(text) {
  if('speechSynthesis' in window){
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ca-ES';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  }
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

  // ===== V9.8.4 NUEVO: MOSTRAR TIP DESPUÉS DE RESPONDER SOLO EN SEÑALES Y TRAMPAS =====
  const tipDiv = document.getElementById(`test-${cat}-tip`);
  if(tipDiv && (cat === 'senyals' || cat === 'trampes') && p.tip){
    tipDiv.innerHTML = `💡 TIP: ${p.tip}`;
    tipDiv.style.display = 'block';
    tipDiv.style.border = '2px solid #00D9FF';
  }
}

function seguentTest(e, cat) {
  e.preventDefault();
  estat.test[cat].idx++;
  carregarPregunta(cat);
}

//... AQUI SIGUE TODO TU CODIGO IGUAL: carregarSituacio, examen, garage,

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
  const totes = [...PREGUNTES.general,...PREGUNTES.senyals,...PREGUNTES.trampes,...PREGUNTES.normes,...PREGUNTES.mecanica,...SITUACIONS.clima]; // AÑADIDO TRAMPES
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

// ===== V9.8.4 FIX: CANVIAR TABS =====
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


