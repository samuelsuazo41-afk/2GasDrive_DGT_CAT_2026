// GASDRIVE DGT V8.14 CAT - 630 PREGUNTES DGT 2026
const VERSION = "9.8.5";

// COMBO DOPAMINA
const EMOJIS_ENCERT = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎','🎯','💥','🌟','🎉'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫','💩','🤡','💥','😤'];

// INTRO SCREEN - Apareix SEMPRE al obrir
function mostrarIntro(){
  document.body.insertAdjacentHTML('afterbegin', `
    <div id="intro-screen" style="position:fixed;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,#1a1a2e,#16213e);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;padding:20px">
      <div style="font-size:64px;margin-bottom:20px">🚗</div>
      <h1 style="font-size:32px;margin:0 0 10px">GasDrive DGT CAT 2026</h1>
      <p style="font-size:18px;opacity:0.8;margin:0 0 10px">Aprèn el carnet en 20 min al dia</p>
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
// ===== BLOQUE 1: PREGUNTAS SEÑALES V2.2 PRO - 52 PREGUNTAS - CON P-01B =====
  // --- P-01 INTERSECCIONES 7 ---
  { id: "P-1", categoria: "PELIGRO", codi: "P-1", nombre_senal: "INTERSECCION CON PRIORIDAD A LA DERECHA", pregunta: "Arribes a una cruïlla sense semàfors ni Stop i veus aquesta senyal. Qui té prioritat?", opcions: ["Jo cedeixo al que ve per la meva DRETA", "Jo tinc prioritat sobre tots", "Cedeixo al de l'ESQUERRA"], correcta: 0, tip: "💡 APREN PER SEMPRE: P-1 = Creu negra. Cruïlla sense regular. Regla d'or DGT: PRIORITAT A LA DRETA. Truc: Rellotge, les 3h és la teva dreta. OJO: No val dins glorieta P-2.", audio: "P-1. Creu negra. Prioritat a la dreta. Cedeix al que ve per la dreta.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-1a", categoria: "PELIGRO", codi: "P-1a", nombre_senal: "INTERSECCION CON PRIORIDAD A LA IZQUIERDA", pregunta: "Veus aquesta senyal amb la creu desplaçada. Quin és el canvi respecte la P-1?", opcions: ["Aquí la prioritat la té el que ve per l'ESQUERRA", "És igual que la P-1, prioritat a la dreta", "Indica que s'acaba la prioritat"], correcta: 0, tip: "💡 TRAMPA ÚNICA DGT: P-1a és l'ÚNICA senyal de tot Espanya on tens prioritat per l'ESQUERRA. Si la veus a l'examen, és ella.", audio: "P-1a. L'única amb prioritat a l'esquerra.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-1b", categoria: "PELIGRO", codi: "P-1b", nombre_senal: "INCORPORACION POR LA DERECHA", pregunta: "Conduint per autovia veus aquesta senyal. Què hauràs de fer?", opcions: ["Vigilar, s'incorporarà un vehicle per la meva dreta", "Jo m'he d'incorporar a la dreta", "La carretera es divideix"], correcta: 0, tip: "💡 APREN: P-1b = Fletxa entra per DRETA. Tu segueixes recte, però vigila el retrovisor i cedeix si cal.", audio: "P-1b. Incorporació per la dreta.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-1c", categoria: "PELIGRO", codi: "P-1c", nombre_senal: "INCORPORACION POR LA IZQUIERDA", pregunta: "Aquesta senyal és poc habitual. Què indica?", opcions: ["Un carril s'incorpora per l'ESQUERRA", "Un carril s'incorpora per la dreta", "Prohibeix incorporar-se per l'esquerra"], correcta: 0, tip: "💡 APREN: P-1c = Entrada per ESQUERRA. Molt rara. Normalment és en vies d'un sol sentit o autopista amb entrada esquerra.", audio: "P-1c. Incorporació per l'esquerra.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-1d", categoria: "PELIGRO", codi: "P-1d", nombre_senal: "CONFLUENCIA POR LA DERECHA", pregunta: "Quina diferència hi ha entre Incorporació i Confluència?", opcions: ["Confluència: 2 carrils es fan 1 i has de cedir, no hi ha carril d'acceleració", "Són iguals", "Incorporació és més perillosa"], correcta: 0, tip: "💡 CLAU EXAMEN: P-1d Confluència = NO hi ha carril d'acceleració. 2 es fan 1 de cop. Has de negociar qui passa.", audio: "P-1d. Confluència per la dreta. Dos carrils es fan un.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-1e", categoria: "PELIGRO", codi: "P-1e", nombre_senal: "CONFLUENCIA POR LA IZQUIERDA", pregunta: "Veus P-1e. Què faries si circules pel carril esquerre?", opcions: ["M'he d'incorporar a la dreta cedint el pas", "Tinc prioritat", "He de parar"], correcta: 0, tip: "💡 APREN: P-1e = La confluència ve per ESQUERRA. Si vas per l'esquerra, ets tu qui es queda sense carril.", audio: "P-1e. Confluència per l'esquerra.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-2", categoria: "PELIGRO", codi: "P-2", nombre_senal: "GLORIETA", pregunta: "Veus P-2 de Glorieta. Quina és la norma actual de la DGT 2024?", opcions: ["Prioritat el que JA CIRCULA dins la glorieta", "Prioritat el que arriba per la dreta", "Prioritat el més ràpid"], correcta: 0, tip: "💡 TRAMPA MORTAL DGT: P-2 = Glorieta. Llei nova: EL DE DINS MANA. El de fora cedeix SEMPRE, encara que vingui per la dreta. P-1 queda anul·lada aquí.", audio: "P-2. Glorieta. Prioritat el que circula dins.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // --- P-01B SEMAFOROS GLORIETA PUENTE TRANVIA 4 - NUEVO V2.1 ---
  { id: "P-3", categoria: "PELIGRO", codi: "P-3", nombre_senal: "SEMÁFOROS", pregunta: "Veus P-3 de semàfors. Què esperes 150m després?", opcions: ["Un semàfor regulant la circulació, pot estar en vermell", "Un pas a nivell", "Una glorieta"], correcta: 0, tip: "💡 APREN: P-3 = Semàfor proper. Aixeca el peu de l'accelerador i cobreix el fre. Si està en groc fix, frena. TRUC: Si el semàfor es veu de lluny, és que ve vermell.", audio: "P-3. Semàfors. Possible semàfor en vermell.", panel_id: "P-01B", ruta_panel: "P-01B_SEMAFOROS_GLORIETA_PUENTE_MOVIL_TRANVIA_P3-P6.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-4", categoria: "PELIGRO", codi: "P-4", nombre_senal: "GLORIETA", pregunta: "P-4 de glorieta. És el mateix que P-2?", opcions: ["Sí, avisa de glorieta propera, prioritat els de dins", "No, P-4 és intersecció normal", "P-4 és Stop"], correcta: 0, tip: "💡 CLAU DGT 2024: P-4 = Glorieta a prop. P-2 i P-4 són bessones. Norma: EL DE DINS MANA. Tu cedeixes sempre. Intermitent només per sortir, mai per entrar.", audio: "P-4. Glorieta. Prioritat el que circula dins.", panel_id: "P-01B", ruta_panel: "P-01B_SEMAFOROS_GLORIETA_PUENTE_MOVIL_TRANVIA_P3-P6.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-5", categoria: "PELIGRO", codi: "P-5", nombre_senal: "PUENTE MÓVIL", pregunta: "Veus P-5 de pont mòbil. Quin és el perill real?", opcions: ["El pont pot estar obert o en moviment, risc de caure a l'aigua", "Un pas a nivell", "Un badén"], correcta: 0, tip: "💡 APREN: P-5 = Pont que s'aixeca per deixar passar vaixells. Si està obert, has d'esperar com a un pas a nivell. Mai avançar al pont.", audio: "P-5. Pont mòbil. Pot estar obert.", panel_id: "P-01B", ruta_panel: "P-01B_SEMAFOROS_GLORIETA_PUENTE_MOVIL_TRANVIA_P3-P6.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-6", categoria: "PELIGRO", codi: "P-6", nombre_senal: "CRUCE DE TRANVÍA", pregunta: "P-6 de tramvia. Qui té prioritat en aquest encreuament?", opcions: ["El tramvia SEMPRE, encara que tu vinguis per la dreta", "Jo, si vinc per la dreta", "El més ràpid"], correcta: 0, tip: "💡 TRAMPA MORTAL DGT: P-6 = Tramvia. Pesa 40 tones i no pot girar ni frenar curt. Regla DGT: TRAMVIA TÉ PRIORITAT SEMPRE sobre cotxes. Tu cedeixes.", audio: "P-6. Creuament de tramvia. El tramvia té prioritat.", panel_id: "P-01B", ruta_panel: "P-01B_SEMAFOROS_GLORIETA_PUENTE_MOVIL_TRANVIA_P3-P6.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // --- P-02 PASO A NIVEL 6 ---
  { id: "P-9b", categoria: "PELIGRO", codi: "P-9b", nombre_senal: "PASO A NIVEL CON BARRERAS", pregunta: "Veus P-9b. Què trobaràs 150m després?", opcions: ["Un pas a nivell AMB barreres que baixen", "Un pas a nivell SENSE barreres", "Un pont"], correcta: 0, tip: "💡 APREN: P-9b = TREN amb barrera. Tanca amb llums vermelles. NO creuis si baixa.", audio: "P-9b. Pas a nivell amb barreres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-9c", categoria: "PELIGRO", codi: "P-9c", nombre_senal: "PASO A NIVEL SIN BARRERAS", pregunta: "P-9c sense barreres. Quin perill extra té respecte P-9b?", opcions: ["Has de parar, mirar i escoltar. No hi ha barrera que et salvi", "És menys perillós", "Només has de reduir"], correcta: 0, tip: "💡 CLAU: Sense barreres = Creu de Sant Andreu. Tu ets la barrera. Para totalment, mira 2 cops.", audio: "P-9c. Pas a nivell sense barreres. Para i mira.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-10a", categoria: "PELIGRO", codi: "P-10a", nombre_senal: "PROXIMIDAD PASO A NIVEL 150M", pregunta: "Comptes les ratlles vermelles del pal. 3 ratlles, què vol dir?", opcions: ["Estic a 150m del pas a nivell", "Estic a 100m", "Estic a 50m"], correcta: 0, tip: "💡 TRUC: 3 ratlles = 150m, 2 ratlles = 100m, 1 ratlla = 50m. Van baixant.", audio: "P-10a. 3 ratlles. A 150 metres del pas.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-10b", categoria: "PELIGRO", codi: "P-10b", nombre_senal: "PROXIMIDAD PASO A NIVEL 100M", pregunta: "2 ratlles al pal de proximitat. A quina distància?", opcions: ["A 100 metres", "A 150 metres", "A 50 metres"], correcta: 0, tip: "💡 APREN: 2 ratlles = 100m. Ja has de reduir i treure la música.", audio: "P-10b. 2 ratlles. A 100 metres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-10c", categoria: "PELIGRO", codi: "P-10c", nombre_senal: "PROXIMIDAD PASO A NIVEL 50M", pregunta: "1 ratlla al pal. On ets?", opcions: ["A 50 metres del pas a nivell, a tocar", "A 150 metres", "A 100 metres"], correcta: 0, tip: "💡 APREN: 1 ratlla = 50m. Últim avís abans de les vies.", audio: "P-10c. 1 ratlla. A 50 metres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-11a", categoria: "PELIGRO", codi: "P-11a", nombre_senal: "SALIDA DE AVIONES", pregunta: "Veus un avió dibuixat baixant. Quin perill real hi ha?", opcions: ["Avions volant baix per enlairar/aterrar, soroll i vent sobtat", "Que caigui un avió", "Prohibit avions"], correcta: 0, tip: "💡 APREN: P-11a = Avió BAIXANT. Prop d'aeroport. El vent de l'avió et pot desestabilitzar.", audio: "P-11a. Avions baixos. Atenció al vent.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // --- P-03 CURVAS 6 ---
  { id: "P-12", categoria: "PELIGRO", codi: "P-12", nombre_senal: "AEROPUERTO", pregunta: "P-12 Avió horitzontal. Què indica?", opcions: ["Proximitat d'aeroport, trànsit intens i possible boira de querosè", "Zona de caiguda d'avions", "Prohibit l'entrada a aeroport"], correcta: 0, tip: "💡 APREN: P-12 = Aeroport proper. No confondre amb P-11a. P-12 és genèric, P-11a és avió baixant.", audio: "P-12. Aeroport proper.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-13a", categoria: "PELIGRO", codi: "P-13a", nombre_senal: "CURVA PELIGROSA A LA DERECHA", pregunta: "Corba a la dreta. Com la prens si plou?", opcions: ["Freno ABANS de la corba, no dins", "Freno dins la corba", "Accelero per sortir ràpid"], correcta: 0, tip: "💡 TRAMPA DGT: P-13a = Fletxa dreta. Sempre frenar abans. Si frenes dins, derrapes.", audio: "P-13a. Corba perillosa a la dreta. Frena abans.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-13b", categoria: "PELIGRO", codi: "P-13b", nombre_senal: "CURVA PELIGROSA A LA IZQUIERDA", pregunta: "P-13b vs P-13a, com les distingim?", opcions: ["P-13b fletxa esquerra, P-13a fletxa dreta", "Són iguals", "P-13b és doble corba"], correcta: 0, tip: "💡 TRUC: Mira la punta de la fletxa. P-13a apunta dreta, P-13b esquerra. Senzill però cau molta gent.", audio: "P-13b. Corba perillosa a l'esquerra.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-14a", categoria: "PELIGRO", codi: "P-14a", nombre_senal: "DOBLE CURVA PRIMERA A LA DERECHA", pregunta: "Doble corba primera a la dreta. Quina és la primera que trobaràs?", opcions: ["Primer dreta, després esquerra", "Primer esquerra, després dreta", "Dues corbes a la dreta"], correcta: 0, tip: "💡 APREN: P-14a = Llegeix de baix a dalt. La primera fletxa de baix mana. Si apunta dreta, primer dreta.", audio: "P-14a. Doble corba, primer a la dreta.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-14b", categoria: "PELIGRO", codi: "P-14b", nombre_senal: "DOBLE CURVA PRIMERA A LA IZQUIERDA", pregunta: "Doble corba primera a l'esquerra. Què esperes?", opcions: ["Primer esquerra, després dreta", "Primer dreta, després esquerra", "Una S"], correcta: 0, tip: "💡 APREN: P-14b = Primer esquerra. És una S. Redueix i no avançis.", audio: "P-14b. Doble corba, primer a l'esquerra.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-15", categoria: "PELIGRO", codi: "P-15", nombre_senal: "RESALTO", pregunta: "Resalt vs Badén, com els diferencies?", opcions: ["P-15 Resalt és MUNTANYA cap amunt, P-15a Badén és VALL cap avall", "Són iguals", "Resalt és més petit"], correcta: 0, tip: "💡 TRUC VISUAL: P-15 = gepa dalt. P-15a = forat baix. Resalt et fa saltar, badén et fa caure.", audio: "P-15. Resalt. Gepa a la carretera.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // --- P-04 TUNEL PENDIENTES 6 ---
  { id: "P-15a", categoria: "PELIGRO", codi: "P-15a", nombre_senal: "BADEN", pregunta: "Veus P-15a Badén. Què pot passar?", opcions: ["El cotxe pot tocar a baix si vas ràpid o carregat", "Saltes com al resalt", "Res"], correcta: 0, tip: "💡 APREN: P-15a = VALL. Si vas ràpid, toques amb els baixos. Redueix.", audio: "P-15a. Badén. Depressió a la calçada.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-15b", categoria: "PELIGRO", codi: "P-15b", nombre_senal: "DESCENSO PELIGROSO", pregunta: "Descens perillós llarg. Com baixes per no cremar frens?", opcions: ["Amb marxa curta i fre motor", "En punt mort", "Frenant tota l'estona"], correcta: 0, tip: "💡 CLAU CONDUCCIÓ: P-15b = Baixada. Mai punt mort. Marxa curta. Si cremes frens, et quedes sense.", audio: "P-15b. Descens perillós. Usa el fre motor.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-16a", categoria: "PELIGRO", codi: "P-16a", nombre_senal: "SUBIDA PELIGROSA", pregunta: "Pujada perillosa amb camions. Què fas?", opcions: ["Augmento distància, perdran velocitat", "M'enganxo darrere", "Els avanço a la pujada sí o sí"], correcta: 0, tip: "💡 APREN: P-16a = Pujada. Camions a 20km/h. Paciència i no et posis a l'esquerra si no pots avançar ràpid.", audio: "P-16a. Pujada perillosa.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-16b", categoria: "PELIGRO", codi: "P-16b", nombre_senal: "ESTRECHAMIENTO POR LA DERECHA", pregunta: "S'estreta per la dreta. Qui ho pateix?", opcions: ["El de la dreta es queda sense carril", "El de l'esquerra", "Tots dos igual"], correcta: 0, tip: "💡 TRAMPA: P-16b = Dreta s'estreta. Si vas per la dreta, ets tu qui s'ha d'incorporar cedint.", audio: "P-16b. Estretament per la dreta.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-17", categoria: "PELIGRO", codi: "P-17", nombre_senal: "ESTRECHAMIENTO", pregunta: "P-17 vs P-17a vs P-16b, quina s'estreta pels dos costats?", opcions: ["P-17", "P-17a", "P-16b"], correcta: 0, tip: "💡 APREN DEFINITIU: P-17 = 2 fletxes, els 2 costats. P-17a = només esquerra. P-16b = només dreta.", audio: "P-17. Estretament pels dos costats.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-17a", categoria: "PELIGRO", codi: "P-17a", nombre_senal: "ESTRECHAMIENTO POR LA IZQUIERDA", pregunta: "S'estreta per l'esquerra. Què fas si vas per l'esquerra?", opcions: ["M'incorporo a la dreta amb precaució", "Tinc prioritat", "Accelero"], correcta: 0, tip: "💡 APREN: P-17a = Tu carril esquerre desapareix. Intermitent i cedeix.", audio: "P-17a. Estretament per l'esquerra.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // --- P-05 OBRAS 6 ---
  { id: "P-17b", categoria: "PELIGRO", codi: "P-17b", nombre_senal: "TUNEL", pregunta: "Veus senyal de túnel. Què és obligatori fer?", opcions: ["Encendre llums d'encreuament i treure ulleres de sol", "Només clàxon", "Apagar llums"], correcta: 0, tip: "💡 APREN: P-17b = Túnel proper. Llums ON, no parar dins, mantenir distància. OJO: Prohibit anar marxa enrere.", audio: "P-17b. Túnel proper. Encén els llums.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-18", categoria: "PELIGRO", codi: "P-18", nombre_senal: "OBRAS", pregunta: "Senyal d'obres groga. És més important que la blanca?", opcions: ["Sí, la groga provisional mana sobre la blanca fixa", "No, mana la blanca", "Són iguals"], correcta: 0, tip: "💡 TRAMPA EXAMEN: Senyalització groga d'obres = PRIORITÀRIA. Anul·la la blanca.", audio: "P-18. Obres. La senyalització groga mana.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-19", categoria: "PELIGRO", codi: "P-19", nombre_senal: "PAVIMENTO DESLIZANTE", pregunta: "Paviment lliscant per què pot ser?", opcions: ["Pluja primerenca, oli, fulles. Distància de frenada x2", "Només per gel", "Només per obres"], correcta: 0, tip: "💡 APREN: P-19 = Coche derrapant. Quan plou després de dies sense ploure, el ferm és sabó. No frenades brusques.", audio: "P-19. Paviment lliscant. Ves amb compte.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-20a", categoria: "PELIGRO", codi: "P-20a", nombre_senal: "PEATONES", pregunta: "Zona amb senyal P-20a de vianants. Què esperes?", opcions: ["Gent creuant fora de pas de vianants", "Només gent al voral", "Cap perill"], correcta: 0, tip: "💡 APREN: P-20a = Vianants a la calçada. Redueix i cobreix el fre.", audio: "P-20a. Perill vianants.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-20b", categoria: "PELIGRO", codi: "P-20b", nombre_senal: "NIÑOS", pregunta: "Veus P-20b de nens jugant. On és el màxim perill?", opcions: ["A l'entrada i sortida d'escola", "De nit", "Al migdia"], correcta: 0, tip: "💡 TRAMPA REAL DGT: P-20b = NENS. Resposta sempre ENTRADA/SORTIDA ESCOLA. Poden sortir corrents entre cotxes.", audio: "P-20b. Nens. Perill a entrada i sortida escola.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-20c", categoria: "PELIGRO", codi: "P-20c", nombre_senal: "CICLISTAS", pregunta: "P-20c ciclistes. Quina separació lateral mínima en avançar fora poblat?", opcions: ["1,5 metres", "1 metre", "0,5 metres"], correcta: 0, tip: "💡 LLEI: 1,5m SEMPRE fora poblat. Si no pots deixar-ho, no avancis. Multa de 200€ i 6 punts.", audio: "P-20c. Ciclistes. Deixa 1,5 metres.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // --- P-06 ESCUELA ANIMALES 7 ---
  { id: "P-21a", categoria: "PELIGRO", codi: "P-21a", nombre_senal: "PASO DE ANIMALES DOMESTICOS", pregunta: "Vaca a la senyal. Què fas si veus un ramat?", opcions: ["Paro motor i espero que passin, no toco clàxon", "Toco clàxon fort", "Accelero"], correcta: 0, tip: "💡 APREN: P-21a = Domèstics. No clàxon, els espantes i es descontrolen. Para i espera.", audio: "P-21a. Animals domèstics. No toquis clàxon.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-21b", categoria: "PELIGRO", codi: "P-21b", nombre_senal: "PASO DE ANIMALES SALVAJES", pregunta: "Cérvol a la senyal. Quan és més perillós?", opcions: ["A l'alba i al capvespre, surten a menjar", "Al migdia", "Només a l'hivern"], correcta: 0, tip: "💡 APREN: P-21b = Salvatges. Surten de cop al capvespre. Si veus un, n'hi haurà més darrere. Llums llargues als vorals.", audio: "P-21b. Animals salvatges. Atenció al capvespre.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-22a", categoria: "PELIGRO", codi: "P-22a", nombre_senal: "VIENTO TRANSVERSAL", pregunta: "Vent lateral fort. A qui afecta més?", opcions: ["Motos, furgonetes altes i camions buits", "Turismes baixos", "Tots igual"], correcta: 0, tip: "💡 APREN: P-22a = Mànega de vent. Agafa fort el volant quan surtis del túnel o avancis camió.", audio: "P-22a. Vent transversal fort.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-22b", categoria: "PELIGRO", codi: "P-22b", nombre_senal: "PROYECCION DE GRAVILLA", pregunta: "Gravilla projectada. Què fas?", opcions: ["Augmento distància de seguretat per no trencar parabrisa", "M'acosto més", "Fre a fons"], correcta: 0, tip: "💡 APREN: P-22b = Pedretes. El del davant les llança. Separa't 2x.", audio: "P-22b. Projecció de gravilla.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-23", categoria: "PELIGRO", codi: "P-23", nombre_senal: "CIRCULACION EN LOS DOS SENTIDOS", pregunta: "Venies per calçada única i veus P-23. Què canvia?", opcions: ["Ara venen cotxes de cara, s'acaba l'autovia de sentit únic", "Res", "S'acaba la prioritat"], correcta: 0, tip: "💡 APREN: P-23 = DOBLE SENTIT. Fi de carril únic. Ara et pots trobar cotxes de front. No envaeixis l'altre carril.", audio: "P-23. Doble sentit. Compte, venen de cara.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-24", categoria: "PELIGRO", codi: "P-24", nombre_senal: "EMBOTELLAMIENTO", pregunta: "Veus P-24 d'embús. Què fas?", opcions: ["Redueixo suau i poso warning si freno fort", "Accelero per passar abans", "Canvio de carril ràpid"], correcta: 0, tip: "💡 APREN: P-24 = Cua propera. Frena progressiu i mira retrovisor per evitar alcanc.", audio: "P-24. Embús. Redueix i alerta.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-24a", categoria: "PELIGRO", codi: "P-24a", nombre_senal: "ACCIDENTE", pregunta: "P-24a d'accident. Què pots trobar?", opcions: ["Vehicles parats, gent a calçada, ambulàncies", "Només curiositat", "Res"], correcta: 0, tip: "💡 APREN: P-24a = Accident recent. Redueix, no miris, facilita pas a emergències. Corredor de seguretat.", audio: "P-24a. Accident. Facilita el pas.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // --- P-07 OTROS 5 ---
  { id: "P-32", categoria: "PELIGRO", codi: "P-32", nombre_senal: "PELIGRO", pregunta: "Triangle amb admiració !. Què vol dir P-32?", opcions: ["Perill genèric que no té senyal específica, estigues atent", "Altres perills", "És el mateix que P-50"], correcta: 0, tip: "💡 APREN: P-32 = !. Perill no catalogat. Estigues alerta a panell complementari sota.", audio: "P-32. Perill genèric. Admiració.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-33", categoria: "PELIGRO", codi: "P-33", nombre_senal: "PAVIMENTO DESLIZANTE POR HIELO", pregunta: "Floc de neu a la senyal P-33. Què faries?", opcions: ["Cadenes o pneumàtics d'hivern, conducció suau sense cops de volant", "Anar més ràpid per no relliscar", "Frenar fort"], correcta: 0, tip: "💡 APREN: P-33 = Gel. Ponts i zones ombra primer es gelen. No frenis, deixa anar gas.", audio: "P-33. Gel o neu a la calçada.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-34", categoria: "PELIGRO", codi: "P-34", nombre_senal: "NIEBLA", pregunta: "P-34 boira. Quins llums poses?", opcions: ["Encreuament + antiboira davanter i darrere si cal, mai llargues", "Llargues per veure més", "Cap"], correcta: 0, tip: "💡 LLEI: Boira = Llums antiboira darrere OBLIGATORI si boira espessa. Llargues prohibides, fan paret blanca.", audio: "P-34. Boira. Encén antiboira.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-35", categoria: "PELIGRO", codi: "P-35", nombre_senal: "AVERIA", pregunta: "P-35 amb cotxe i triangle. Què indica?", opcions: ["Zona on freqüentment hi ha vehicles avariats al voral", "Taller proper", "Prohibit avariar-se"], correcta: 0, tip: "💡 APREN: P-35 = Avaries freqüents. Vigila voral, poden obrir porta de cop.", audio: "P-35. Zona d'avaries freqüents.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-50", categoria: "PELIGRO", codi: "P-50", nombre_senal: "OTROS PELIGROS", pregunta: "Triangle buit P-50. Què vol dir?", opcions: ["Un altre perill no definit a les altres P, mira panell sota", "Cap perill", "És igual que P-32"], correcta: 0, tip: "💡 TRAMPA: P-50 = Triangle BUIT. És el calaix de sastre de perill. P-32 és amb !, P-50 és buit. Tots dos són genèrics.", audio: "P-50. Altres perills. Triangle buit.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // --- TRAMPAS 5 ---
  { id: "T-P03", categoria: "TRAMPA", codi: "P-13a", nombre_senal: "TRAMPA CURVA DERECHA", pregunta: "EXAMEN: P-13a vs P-13b. Quina és la corba a la DRETA?", opcions: ["P-13a", "P-13b", "Les dues"], correcta: 0, tip: "💡 TRUCO EXAMEN: P-13a = a = dreta per ordre alfabètic. P-13a dreta, P-13b esquerra.", audio: "Trampa corbes. P-13a dreta.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-P04", categoria: "TRAMPA", codi: "P-18", nombre_senal: "TRAMPA OBRAS", pregunta: "Veus P-18 obres però no veus cap obrer. Redueixes?", opcions: ["Sí, sempre", "No, si no hi ha ningú", "Només de nit"], correcta: 0, tip: "💡 TRAMPA DGT: OBRAS = Redueix SEMPRE. Hi pot haver forats, grava, maquinària.", audio: "Trampa obres. Sempre reduir.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-P05", categoria: "TRAMPA", codi: "P-20b", nombre_senal: "TRAMPA NIÑOS", pregunta: "TRAMPA REAL: P-20b Nens. Quan hi ha més risc d'atropellament?", opcions: ["A l'entrada i sortida del col·legi", "De nit", "Al migdia"], correcta: 0, tip: "💡 RESPOSTA DGT OFICIAL: ENTRADA I SORTIDA ESCOLA. Surten corrents entre cotxes.", audio: "Trampa nens. Entrada i sortida escola.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-P06", categoria: "TRAMPA", codi: "P-17", nombre_senal: "TRAMPA ESTRECHAMIENTO", pregunta: "TRAMPA: Quina senyal indica estretament pels DOS costats?", opcions: ["P-17", "P-17a", "P-16b"], correcta: 0, tip: "💡 RESUM: P-17 = 2 costats. P-17a = esquerra. P-16b = dreta.", audio: "Trampa estretament. P-17 dos costats.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-P07", categoria: "TRAMPA", codi: "P-10c", nombre_senal: "TRAMPA PROXIMIDAD", pregunta: "Quin pal està MÉS A PROP del pas a nivell?", opcions: ["P-10c amb 1 ratlla", "P-10b amb 2 ratlles", "P-10a amb 3 ratlles"], correcta: 0, tip: "💡 LÒGICA: Menys ratlles = més a prop. 3=150m, 2=100m, 1=50m. P-10c és l'últim avís.", audio: "Trampa proximitat. 1 ratlla és més a prop.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// ===== BLOQUE 2 PREGUNTES V2 PRO - 59 BASE + 30 TRAMPES =====
  // R-01
  { id: "R-1", categoria: "REGLAMENTARIA", codi: "R-1", nombre_senal: "CEDA EL PASO", pregunta: "R-1 triangle invertit. Has de parar si no ve ningú?", opcions: ["No, només cedeixo si ve vehicle, si no segueixo", "Sí, 3 segons sempre", "Només si hi ha Stop pintat"], correcta: 0, tip: "💡 APREN: R-1 = Punta avall = deixa passar. No és Stop. No cal parar en buit.", audio: "R-1. Cedeix el pas.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-2", categoria: "REGLAMENTARIA", codi: "R-2", nombre_senal: "DETENCION OBLIGATORIA STOP", pregunta: "R-2 octàgon vermell. Què fas?", opcions: ["Parada total abans línia, 1a marxa, mires", "Redueixo i segueixo", "Només si ve cotxe"], correcta: 0, tip: "💡 TRAMPA: R-2 = STOP = Parada obligatòria encara que vagis sol. 200€ i 4 punts.", audio: "R-2. Stop.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-3", categoria: "REGLAMENTARIA", codi: "R-3", nombre_senal: "PRIORIDAD EN ESTRECHAMIENTO", pregunta: "R-3 fletxa negra gran cap a tu. Qui passa?", opcions: ["Jo tinc prioritat", "Jo cedeixo", "El més ràpid"], correcta: 0, tip: "💡 TRUC: Negra gran cap a tu = TU MANES. Vermella gran = TU CEDEIXES.", audio: "R-3. Prioritat teva.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-4", categoria: "REGLAMENTARIA", codi: "R-4", nombre_senal: "FIN DE PRIORIDAD", pregunta: "Veus R-4 després de R-3. Què passa?", opcions: ["Perdo la prioritat, ara norma general", "Mantinc prioritat", "Ara Stop"], correcta: 0, tip: "💡 APREN: R-4 = R-3 ratllat. S'acaba prioritat.", audio: "R-4. Fi de prioritat.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-5", categoria: "REGLAMENTARIA", codi: "R-5", nombre_senal: "CEDA EN ESTRECHAMIENTO", pregunta: "R-5 fletxa vermella gran cap a tu. Què fas?", opcions: ["Cedeixo jo", "Passo jo", "Toco clàxon"], correcta: 0, tip: "💡 TRUC: Vermell gran = TU CEDEIXES.", audio: "R-5. Cedeixes tu.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // R-02
  { id: "R-101", categoria: "REGLAMENTARIA", codi: "R-101", nombre_senal: "ENTRADA PROHIBIDA", pregunta: "Cercle vermell buit R-101. Pots entrar?", opcions: ["No, prohibit a TOTS els vehicles", "Sí, només cotxes", "Sí, només motos"], correcta: 0, tip: "💡 APREN: R-101 = Cercle vermell buit = No entra ningú. Ni bici.", audio: "R-101. Entrada prohibida.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-106", categoria: "REGLAMENTARIA", codi: "R-106", nombre_senal: "PROHIBIDO VEHICULOS DE MOTOR", pregunta: "R-106 amb cotxe i moto. Afecta bici?", opcions: ["No, bicis i VMP poden passar", "Sí, també bicis", "Sí, tots"], correcta: 0, tip: "💡 CLAU: R-106 = Motor. Bici no és motor, passa.", audio: "R-106. Prohibit motor.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-107", categoria: "REGLAMENTARIA", codi: "R-107", nombre_senal: "PROHIBIDO CAMIONES", pregunta: "R-107 camió. Pot passar furgoneta de 3000kg?", opcions: ["Sí, només >3500kg", "No, cap furgoneta", "Sí, totes"], correcta: 0, tip: "💡 APREN: R-107 = Camions >3500kg. Lleugers sí.", audio: "R-107. Prohibit camions.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-108", categoria: "REGLAMENTARIA", codi: "R-108", nombre_senal: "PROHIBIDO MOTOS", pregunta: "R-108 moto. Pot passar ciclomotor?", opcions: ["No, prohibeix moto i ciclomotor", "Sí, ciclomotor sí", "Només elèctriques"], correcta: 0, tip: "💡 TRAMPA: Moto inclou ciclomotor. Tot lo de 2 rodes motor prohibit.", audio: "R-108. Prohibit motos.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-109", categoria: "REGLAMENTARIA", codi: "R-109", nombre_senal: "PROHIBIDO CICLOMOTORES", pregunta: "R-109 ciclomotor. Pot passar moto 125?", opcions: ["Sí, moto gran sí pot", "No", "Només si va a peu"], correcta: 0, tip: "💡 APREN: R-109 = Només 50cc. Moto gran sí.", audio: "R-109. Prohibit ciclomotors.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // R-03 OFICIAL R-110 A R-115
  { id: "R-110", categoria: "REGLAMENTARIA", codi: "R-110", nombre_senal: "MERCANCIAS PELIGROSAS AGUA", pregunta: "R-110 cisterna taronja sobre aigua. A qui afecta?", opcions: ["A cisternes que contaminen aigua", "A tots els camions", "A tots els cotxes"], correcta: 0, tip: "💡 APREN: R-110 = Mercaderia perillosa per l'aigua. Només ells.", audio: "R-110. Prohibit mercaderies perilloses aigua.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-111", categoria: "REGLAMENTARIA", codi: "R-111", nombre_senal: "TRACTOR AGRICOLA", pregunta: "R-111 tractor petit amb conductor. Pots passar amb cotxe?", opcions: ["Sí, jo sí", "No", "Només moto"], correcta: 0, tip: "💡 APREN: R-111 = Només tractor agrícola petit. Turismes sí.", audio: "R-111. Prohibit tractor.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-112", categoria: "REGLAMENTARIA", codi: "R-112", nombre_senal: "REMOLQUE PESADO", pregunta: "R-112 cotxe amb remolque 2t. Quin pes compta?", opcions: ["MMA del remolque superior a xifra indicada", "Pes total conjunt", "Pes del cotxe"], correcta: 0, tip: "💡 CLAU: R-112 = Només MMA remolque. Si diu 2t i el teu remolque és 2,5t no entres.", audio: "R-112. Prohibit cotxe amb remolque pesat.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-113", categoria: "REGLAMENTARIA", codi: "R-113", nombre_senal: "TRACCION ANIMAL", pregunta: "R-113 carro cavall amb conductor. Prohibeix cavall solt?", opcions: ["No, només vehicle de tracció animal amb conductor", "Sí, també animal solt", "Prohibit tots els animals"], correcta: 0, tip: "💡 APREN: R-113 = Carro amb persona. Animal solt és altra.", audio: "R-113. Prohibit tracció animal.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-114", categoria: "REGLAMENTARIA", codi: "R-114", nombre_senal: "PROHIBIDO BICICLETAS", pregunta: "R-114 bici. Pot passar patinet?", opcions: ["No, ha d'anar a calçada/carril bici", "Sí", "Només si plega"], correcta: 0, tip: "💡 TRAMPA: R-114 = Cicles. VMP no pot usar vorera si prohibeix bici.", audio: "R-114. Prohibit bicis.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-115", categoria: "REGLAMENTARIA", codi: "R-115", nombre_senal: "CARROS DE MANO", pregunta: "R-115 persona amb carro de caixes. Què és?", opcions: ["Prohibit carros de mà de repartiment", "Prohibit carretó obra", "Prohibit peatons"], correcta: 0, tip: "💡 APREN: R-115 = Carro de transport empenyut. Diferent de R-117 que és carretó d'una roda d'obra.", audio: "R-115. Prohibit carros de mà.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // R-04
  { id: "R-116", categoria: "REGLAMENTARIA", codi: "R-116", nombre_senal: "VEHICULOS AGRICOLAS GRANDES", pregunta: "R-116 tractor gran. Diferència amb R-111?", opcions: ["R-116 és tractor gran, R-111 petit", "Són iguals", "R-116 és cotxe"], correcta: 0, tip: "💡 APREN: R-111 petit agrícola, R-116 gran. Tots dos tractors però DGT els separa.", audio: "R-116. Prohibit agrícola gran.", panel_id: "R-04", ruta_panel: "R-04_PROHIBICION_PEATONES_ANIMALES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-117", categoria: "REGLAMENTARIA", codi: "R-117", nombre_senal: "CARRETILLA DE MANO OBRA", pregunta: "R-117 carretó d'obra d'una roda. Pots passar?", opcions: ["Sí, amb cotxe sí", "No", "Només a peu"], correcta: 0, tip: "💡 APREN: R-117 = Carretó obra. Només prohibeix això.", audio: "R-117. Prohibit carretó mà.", panel_id: "R-04", ruta_panel: "R-04_PROHIBICION_PEATONES_ANIMALES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-118", categoria: "REGLAMENTARIA", codi: "R-118", nombre_senal: "PROHIBIDO PEATONES", pregunta: "R-118 peatón. Pots anar a peu per autovia?", opcions: ["No, prohibit vianants", "Sí", "Només per voral"], correcta: 0, tip: "💡 APREN: R-118 = No vianants. Autovia i autopista.", audio: "R-118. Prohibit peatons.", panel_id: "R-04", ruta_panel: "R-04_PROHIBICION_PEATONES_ANIMALES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-119", categoria: "REGLAMENTARIA", codi: "R-119", nombre_senal: "PROHIBIDO ANIMALES DE MONTA", pregunta: "R-119 cavall amb genet. Què prohibeix?", opcions: ["Animals de munta", "Tracció animal", "Tots els animals"], correcta: 0, tip: "💡 APREN: R-119 = Cavall amb genet a sobre. Muntar. R-113 era carro.", audio: "R-119. Prohibit animals de munta.", panel_id: "R-04", ruta_panel: "R-04_PROHIBICION_PEATONES_ANIMALES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-120", categoria: "REGLAMENTARIA", codi: "R-120", nombre_senal: "PROHIBIDO ANIMALES SUELTOS", pregunta: "R-120 vaca. Què prohibeix?", opcions: ["Entrada a animals solts o ramats sense pastor", "Prohibit carn", "Prohibit tracció"], correcta: 0, tip: "💡 APREN: R-120 = Animal solt sense control.", audio: "R-120. Prohibit animals solts.", panel_id: "R-04", ruta_panel: "R-04_PROHIBICION_PEATONES_ANIMALES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // R-05 LIMITACIONES
  { id: "R-200", categoria: "REGLAMENTARIA", codi: "R-200", nombre_senal: "LIMITACION ANCHURA", pregunta: "R-200 2,5m. Què prohibeix?", opcions: ["Prohibit vehicles més amples de 2,5m", "Prohibit menys de 2,5m", "Prohibit alts"], correcta: 0, tip: "💡 TRUC: R-200 = 2 cotxes laterals = AMPLADA. R-201 = camió altura.", audio: "R-200. Limitació amplada.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-201", categoria: "REGLAMENTARIA", codi: "R-201", nombre_senal: "LIMITACION ALTURA", pregunta: "R-201 3,5m. Què passa si el teu camió fa 4m?", opcions: ["No pots passar, tocaries pont", "Sí pots, a poc a poc", "Només si vas buit"], correcta: 0, tip: "💡 APREN: R-201 = Alçada. Si superes, no entres.", audio: "R-201. Limitació alçada.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-202", categoria: "REGLAMENTARIA", codi: "R-202", nombre_senal: "LIMITACION PESO", pregunta: "R-202 5,5t. Què prohibeix?", opcions: ["Prohibit vehicles que pesen més de 5,5t reals", "Prohibit MMA", "Prohibit llargs"], correcta: 0, tip: "💡 CLAU: R-202 = Pes REAL en bàscula. R-203 = Pes per eix.", audio: "R-202. Limitació pes.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-203", categoria: "REGLAMENTARIA", codi: "R-203", nombre_senal: "LIMITACION PESO POR EJE", pregunta: "R-203 2 eixos amb pes. Què és?", opcions: ["Prohibit pes per eix superior a indicat", "Prohibit pes total", "Prohibit llarg"], correcta: 0, tip: "💡 APREN: R-203 = Per eix. Ponts fràgils.", audio: "R-203. Limitació pes per eix.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-204", categoria: "REGLAMENTARIA", codi: "R-204", nombre_senal: "LIMITACION LONGITUD", pregunta: "R-204 llargada 10m. Pots amb articulat de 16m?", opcions: ["No", "Sí", "Només marxa enrere"], correcta: 0, tip: "💡 APREN: R-204 = Longitud màxima.", audio: "R-204. Limitació longitud.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-205", categoria: "REGLAMENTARIA", codi: "R-205", nombre_senal: "LIMITACION SONORA", pregunta: "R-205 altaveu. Què prohibeix?", opcions: ["Prohibit superar nivell sonor indicat, clàxon", "Prohibit música", "Prohibit motors"], correcta: 0, tip: "💡 APREN: R-205 = Soroll. Zones hospital.", audio: "R-205. Limitació sonora.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // R-06 PROHIBICION MANIOBRAS
  { id: "R-300", categoria: "REGLAMENTARIA", codi: "R-300", nombre_senal: "SEPARACION MINIMA", pregunta: "R-300 2 cotxes amb 70m. Què obliga?", opcions: ["Deixar 70m mínim entre vehicles", "Velocitat 70", "Prohibit 70m"], correcta: 0, tip: "💡 APREN: R-300 = Distància entre cotxes. Túnels.", audio: "R-300. Separació mínima.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-301", categoria: "REGLAMENTARIA", codi: "R-301", nombre_senal: "VELOCIDAD MAXIMA", pregunta: "R-301 40 vermell. Pots anar a 50?", opcions: ["No, 40 és màxim", "Sí", "Només moto"], correcta: 0, tip: "💡 TRAMPA: R-301 = Cercle vermell = MÀXIM. No superar mai.", audio: "R-301. Velocitat màxima 40.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-302", categoria: "REGLAMENTARIA", codi: "R-302", nombre_senal: "GIRO DERECHA PROHIBIDO", pregunta: "R-302 fletxa dreta creuada. Pots fer canvi sentit a la dreta?", opcions: ["No, tampoc canvi sentit cap a dreta", "Sí, canvi sí", "Només moto"], correcta: 0, tip: "💡 APREN: Gir prohibit inclou canvi sentit cap a eixe costat.", audio: "R-302. Prohibit gir dreta.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-303", categoria: "REGLAMENTARIA", codi: "R-303", nombre_senal: "GIRO IZQUIERDA PROHIBIDO", pregunta: "R-303 esquerra prohibit. Pots girar a l'esquerra?", opcions: ["No", "Sí, si no ve ningú", "Només de nit"], correcta: 0, tip: "💡 APREN: R-303 = Esquerra prohibit.", audio: "R-303. Prohibit gir esquerra.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-304", categoria: "REGLAMENTARIA", codi: "R-304", nombre_senal: "MEDIA VUELTA PROHIBIDA", pregunta: "R-304 U creuada. Què prohibeix?", opcions: ["Canvi de sentit, mitja volta", "Gir esquerra", "Gir dreta"], correcta: 0, tip: "💡 TRAMPA: R-304 = Només canvi sentit. Girs sí es poden.", audio: "R-304. Prohibit mitja volta.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-305", categoria: "REGLAMENTARIA", codi: "R-305", nombre_senal: "ADELANTAMIENTO PROHIBIDO", pregunta: "R-305 2 cotxes vermell i negre. Pots avançar moto?", opcions: ["No, prohibit avançar a TOTS inclòs motos i bicis", "Sí, moto sí", "Sí, bici sí"], correcta: 0, tip: "💡 TRAMPA MORTAL: R-305 = Prohibit avançar a QUALSEVOL. Ni moto ni bici.", audio: "R-305. Prohibit avançar.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "R-306", categoria: "REGLAMENTARIA", codi: "R-306", nombre_senal: "ADELANTAMIENTO CAMIONES PROHIBIDO", pregunta: "R-306 camió vermell. Pots avançar tu amb turisme?", opcions: ["Sí, jo sí puc, només camions >3500 no poden", "No", "Només si va lent"], correcta: 0, tip: "💡 CLAU: R-306 = Només camions pesats no poden avançar. Tu sí.", audio: "R-306. Prohibit avançar camions.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

// R-07, R-08, R-09, R-10, R-11, R-12 - COMPLET V2 PRO DES DE LINIA VERMELLA
  { id: "R-307", categoria: "REGLAMENTARIA", codi: "R-307", nombre_senal: "PARADA Y ESTACIONAMIENTO PROHIBIDO", pregunta: "R-307 creu amb 2 barres vermelles. Pots parar 5 segons a deixar algú?", opcions: ["No, prohibit parar i estacionar ni 1 segon", "Sí, parar 5 segons sí", "Sí, si poses warning"], correcta: 0, tip: "💡 APREN PER SEMPRE: R-307 = 2 barres creu = NI PARAR. R-307a = 1 barra = Pots parar <2min però no aparcar. Truc: 2 barres = 2 prohibicions.", audio: "R-307. Prohibit parar i estacionar.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-307a", categoria: "REGLAMENTARIA", codi: "R-307a", nombre_senal: "ESTACIONAMIENTO PROHIBIDO", pregunta: "R-307a 1 barra diagonal. Estàs descarregant 1 minut. És legal?", opcions: ["Sí, parar per carregar/descargar <2 min sí, estacionar no", "No, res", "Només si ets resident"], correcta: 0, tip: "💡 APREN: R-307a = 1 barra = Prohibit aparcar, parar sí momentàniament. No deixis cotxe i te'n vagis.", audio: "R-307a. Prohibit estacionar.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-308", categoria: "REGLAMENTARIA", codi: "R-308", nombre_senal: "ESTACIONAMIENTO PROHIBIDO DIAS IMPARES", pregunta: "R-308 E blava amb I. Quan no pots aparcar?", opcions: ["Els dies senars del mes (1,3,5...)", "Els dies parells", "Mai"], correcta: 0, tip: "💡 TRUC: R-308 I = Imparells. R-308a II = Parells. Mira número de barres blaves.", audio: "R-308. Prohibit dies imparells.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-308a", categoria: "REGLAMENTARIA", codi: "R-308a", nombre_senal: "ESTACIONAMIENTO PROHIBIDO DIAS PARES", pregunta: "R-308a EE. Quan aplica?", opcions: ["Els dies parells (2,4,6...)", "Els senars", "Tots"], correcta: 0, tip: "💡 TRUC: II = 2 = Parells.", audio: "R-308a. Prohibit dies parells.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-308b", categoria: "REGLAMENTARIA", codi: "R-308b", nombre_senal: "ESTACIONAMIENTO PROHIBIDO 1a QUINCENA", pregunta: "R-308b 1a quincena. Quins dies no pots?", opcions: ["De l'1 al 15 de cada mes", "Del 16 al 31", "Tot el mes"], correcta: 0, tip: "💡 APREN: R-308b = 1. Primera meitat mes. R-308c = 2 segona meitat.", audio: "R-308b. Prohibit 1a quincena.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-308c", categoria: "REGLAMENTARIA", codi: "R-308c", nombre_senal: "ESTACIONAMIENTO PROHIBIDO 2a QUINCENA", pregunta: "R-308c 2a quincena. Quins dies?", opcions: ["Del 16 al final de mes", "De l'1 al 15", "Tot"], correcta: 0, tip: "💡 APREN: R-308c = 2a quincena.", audio: "R-308c. Prohibit 2a quincena.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-308d", categoria: "REGLAMENTARIA", codi: "R-308d", nombre_senal: "ESTACIONAMIENTO PROHIBIDO HORARIO", pregunta: "R-308d amb horari sota. Quan aplica la prohibició?", opcions: ["Només en l'horari indicat al panell", "Sempre", "Mai"], correcta: 0, tip: "💡 APREN: Si hi ha panell horari, només eixes hores. Fora d'horari, sí pots.", audio: "R-308d. Prohibit en horari.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-308e", categoria: "REGLAMENTARIA", codi: "R-308e", nombre_senal: "ESTACIONAMIENTO PROHIBIDO ZONA", pregunta: "R-308e zona blava. Què indica?", opcions: ["Zona d'estacionament regulat amb tiquet", "Prohibit sempre", "Lliure"], correcta: 0, tip: "💡 APREN: R-308e = P blava. Zona ORA.", audio: "R-308e. Zona estacionament regulat.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-400a", categoria: "REGLAMENTARIA", codi: "R-400a", nombre_senal: "SENTIDO OBLIGATORIO RECTO", pregunta: "Fletxa blava recte R-400a. Pots girar?", opcions: ["No, obligatori recte", "Sí, dreta", "Sí, esquerra"], correcta: 0, tip: "💡 APREN: Blau = Obligació. Has d'anar recte.", audio: "R-400a. Sentit obligatori recte.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-400b", categoria: "REGLAMENTARIA", codi: "R-400b", nombre_senal: "GIRO OBLIGATORIO DERECHA", pregunta: "R-400b fletxa dreta blava. Què fas a la cruïlla?", opcions: ["Girar a la dreta obligatòriament", "Puc anar recte", "Prohibit dreta"], correcta: 0, tip: "💡 APREN: R-400b = Només dreta a la cruïlla.", audio: "R-400b. Gir obligatori dreta.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-400c", categoria: "REGLAMENTARIA", codi: "R-400c", nombre_senal: "GIRO OBLIGATORIO IZQUIERDA", pregunta: "R-400c fletxa esquerra blava. Què fas?", opcions: ["Girar a l'esquerra obligatòriament", "Recte", "Dreta"], correcta: 0, tip: "💡 APREN: R-400c = Només esquerra.", audio: "R-400c. Gir obligatori esquerra.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-400d", categoria: "REGLAMENTARIA", codi: "R-400d", nombre_senal: "FRENTE OBLIGATORIO", pregunta: "R-400d dues opcions recte. Què pots fer?", opcions: ["Recte o gir permès segons fletxes, prohibit altres", "Qualsevol direcció", "Només dreta"], correcta: 0, tip: "💡 APREN: R-400d = Et dona opcions obligatòries. Tria una.", audio: "R-400d. Direccions obligatòries.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-400e", categoria: "REGLAMENTARIA", codi: "R-400e", nombre_senal: "GIRO OBLIGATORIO DERECHA IZQUIERDA", pregunta: "R-400e dreta o esquerra. Pots anar recte?", opcions: ["No, només dreta o esquerra", "Sí", "Només recte"], correcta: 0, tip: "💡 APREN: R-400e = Recte prohibit.", audio: "R-400e. Gir dreta o esquerra.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-401a", categoria: "REGLAMENTARIA", codi: "R-401a", nombre_senal: "PASO OBLIGATORIO DERECHA", pregunta: "R-401a fletxa cap avall dreta amb obstacle. Què fas?", opcions: ["Passar per la dreta de l'obstacle", "Girar a la dreta a la cruïlla", "Passar per l'esquerra"], correcta: 0, tip: "💡 TRAMPA: R-401a = Obstacle, passa per dreta. No és gir cruïlla, és sortejar.", audio: "R-401a. Pas obligatori per dreta.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-401b", categoria: "REGLAMENTARIA", codi: "R-401b", nombre_senal: "PASO OBLIGATORIO IZQUIERDA", pregunta: "R-401b obstacle per esquerra. Què fas?", opcions: ["Passar per l'esquerra", "Passar per la dreta", "Girar"], correcta: 0, tip: "💡 APREN: R-401b = Obstacle per esquerra.", audio: "R-401b. Pas per esquerra.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-401c", categoria: "REGLAMENTARIA", codi: "R-401c", nombre_senal: "PASO POR AMBOS LADOS", pregunta: "R-401c dues fletxes. Per on passes?", opcions: ["Pots passar per dreta o esquerra, els dos costats", "Només dreta", "Només esquerra"], correcta: 0, tip: "💡 APREN: R-401c = Pots triar costat.", audio: "R-401c. Pas per ambdós costats.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-402", categoria: "REGLAMENTARIA", codi: "R-402", nombre_senal: "GLORIETA OBLIGATORIA", pregunta: "R-402 fletxes circulars. Qui té prioritat?", opcions: ["El que JA CIRCULA dins la glorieta", "El que entra", "El més ràpid"], correcta: 0, tip: "💡 LLEI 2024: R-402 = Glorieta. DINS MANA. No posis intermitent per entrar, sí per sortir.", audio: "R-402. Glorieta obligatòria.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-403a", categoria: "REGLAMENTARIA", codi: "R-403a", nombre_senal: "DIRECCION OBLIGATORIA DERECHA", pregunta: "R-403a fletxa dreta en panell blau. Quan aplica?", opcions: ["En la pròxima intersecció, gir obligatori", "Ara mateix canviar carril", "Prohibit dreta"], correcta: 0, tip: "💡 APREN: R-403 = Direcció obligatòria en pròxima cruïlla.", audio: "R-403a. Direcció obligatòria dreta.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-403b", categoria: "REGLAMENTARIA", codi: "R-403b", nombre_senal: "DIRECCION OBLIGATORIA IZQUIERDA", pregunta: "R-403b esquerra. Què fas?", opcions: ["Girar esquerra en pròxima cruïlla obligatòriament", "Ara mateix", "Recte"], correcta: 0, tip: "💡 APREN: R-403b = Esquerra obligatòria pròxima.", audio: "R-403b. Direcció obligatòria esquerra.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-500", categoria: "REGLAMENTARIA", codi: "R-500", nombre_senal: "FIN DE PROHIBICIONES", pregunta: "R-500 cercle blanc amb ratlles negres. Què vol dir?", opcions: ["Fi de totes les prohibicions anteriors", "Prohibició nova", "Fi de velocitat només"], correcta: 0, tip: "💡 APREN PER SEMPRE: R-500 = Cercle blanc ratllat = S'acaben prohibicions. Torna norma general.", audio: "R-500. Fi de prohibicions.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-501", categoria: "REGLAMENTARIA", codi: "R-501", nombre_senal: "FIN DE VELOCIDAD MAXIMA", pregunta: "R-501 80 ratllat. Què passa?", opcions: ["Fi del límit 80, torna límit genèric via", "Prohibit 80", "Obligatori 80"], correcta: 0, tip: "💡 APREN: R-501 = Fi de límit específic. Ara genèric 90/120.", audio: "R-501. Fi de velocitat màxima.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-502", categoria: "REGLAMENTARIA", codi: "R-502", nombre_senal: "FIN DE ADELANTAMIENTO PROHIBIDO", pregunta: "R-502 cotxes ratllats. Pots avançar?", opcions: ["Sí, ara ja pots avançar", "No, segueix prohibit", "Només camions"], correcta: 0, tip: "💡 APREN: R-502 = Fi de R-305. Ja pots avançar.", audio: "R-502. Fi de prohibit avançar.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-503", categoria: "REGLAMENTARIA", codi: "R-503", nombre_senal: "FIN DE ADELANTAMIENTO CAMIONES", pregunta: "R-503 camió ratllat. Qui pot avançar ara?", opcions: ["Camions ja poden avançar de nou", "Ningú", "Només turismes"], correcta: 0, tip: "💡 APREN: R-503 = Fi de R-306.", audio: "R-503. Fi de prohibit avançar camions.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-504", categoria: "REGLAMENTARIA", codi: "R-504", nombre_senal: "FIN DE PROHIBICION SONORA", pregunta: "R-504 clàxon ratllat. Què vol dir?", opcions: ["Fi de prohibició de clàxon, ja pots tocar si cal", "Prohibit clàxon ara", "Prohibit soroll"], correcta: 0, tip: "💡 APREN: R-504 = Ja pots tocar clàxon per perill.", audio: "R-504. Fi de prohibició sonora.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-505", categoria: "REGLAMENTARIA", codi: "R-505", nombre_senal: "FIN DE VIA RESERVADA", pregunta: "R-505 BUS ratllat. Què passa?", opcions: ["Fi de carril reservat bus, ja pot usar-lo tothom", "Ara només bus", "Prohibit bus"], correcta: 0, tip: "💡 APREN: R-505 = Fi de carril BUS. Ara lliure.", audio: "R-505. Fi de via reservada.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-506", categoria: "REGLAMENTARIA", codi: "R-506", nombre_senal: "FIN DE VELOCIDAD MINIMA", pregunta: "R-506 30 blau ratllat. Què vol dir?", opcions: ["Fi d'obligació anar com a mínim a 30", "Prohibit anar a 30", "Obligatori 30"], correcta: 0, tip: "💡 APREN: R-506 = Blau ratllat = Fi d'obligació mínima.", audio: "R-506. Fi de velocitat mínima.", panel_id: "R-12", ruta_panel: "R-12_FIN_OBLIGACION_PEATONES_ESPECIALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-507", categoria: "REGLAMENTARIA", codi: "R-507", nombre_senal: "FIN DE VIA CICLISTA", pregunta: "R-507 bici blava ratllada. Què passa?", opcions: ["Fi de via obligatòria ciclistes, ja poden anar a calçada", "Prohibit bicis ara", "Obligatori bici"], correcta: 0, tip: "💡 APREN: R-507 = Fi de carril bici obligatori.", audio: "R-507. Fi de via ciclista.", panel_id: "R-12", ruta_panel: "R-12_FIN_OBLIGACION_PEATONES_ESPECIALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-508", categoria: "REGLAMENTARIA", codi: "R-508", nombre_senal: "FIN DE VIA PEATONAL", pregunta: "R-508 vianant blau ratllat. Què vol dir?", opcions: ["Fi de via obligatòria vianants", "Prohibit vianants ara", "Obligatori vianants"], correcta: 0, tip: "💡 APREN: R-508 = Fi via peatonal obligatòria.", audio: "R-508. Fi de via peatonal.", panel_id: "R-12", ruta_panel: "R-12_FIN_OBLIGACION_PEATONES_ESPECIALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "R-509", categoria: "REGLAMENTARIA", codi: "R-509", nombre_senal: "FIN DE VELOCIDAD MINIMA CARRIL", pregunta: "R-509 carril amb 60 ratllat. Què vol dir?", opcions: ["Fi de velocitat mínima per carril", "Prohibit 60", "Màxima 60"], correcta: 0, tip: "💡 APREN: R-509 = Fi de mínima per carril específic.", audio: "R-509. Fi de velocitat mínima per carril.", panel_id: "R-12", ruta_panel: "R-12_FIN_OBLIGACION_PEATONES_ESPECIALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// ===== 30 TRAMPES V2 PRO - MATEIXES AMB RUTES CORREGIDES =====
  { id: "T-R01", categoria: "TRAMPA", codi: "R-2", nombre_senal: "TRAMPA STOP VS CEDA", pregunta: "TRAMPA: R-1 vs R-2. Quina obliga a parar encara que no vingui ningú?", opcions: ["R-2 Stop", "R-1 Ceda", "Les dues"], correcta: 0, tip: "💡 TRAMPA DGT: R-2 = Para SEMPRE. R-1 = Només si ve algú.", audio: "Trampa Stop vs Ceda.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R02", categoria: "TRAMPA", codi: "R-3", nombre_senal: "TRAMPA ESTRECHAMIENTO PRIORIDAD", pregunta: "R-3 fletxa negra gran. Qui té prioritat?", opcions: ["Jo", "L'altre", "Cap"], correcta: 0, tip: "💡 TRUC: Negra gran cap a tu = TU MANES.", audio: "Trampa estrechamiento.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R03", categoria: "TRAMPA", codi: "R-106", nombre_senal: "TRAMPA MOTOR VS BICI", pregunta: "R-106 prohibeix motor. Pot passar bici elèctrica 25km/h?", opcions: ["Sí, bici elèctrica no és vehicle motor per DGT", "No", "Només si pedaleja"], correcta: 0, tip: "💡 TRAMPA: R-106 no afecta bicis ni ebikes 250W 25km/h.", audio: "Trampa motor.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R04", categoria: "TRAMPA", codi: "R-114", nombre_senal: "TRAMPA BICI", pregunta: "R-114 prohibeix bicis. Pot passar patinet 25km/h?", opcions: ["No, ha d'anar per calçada, no vorera", "Sí, per vorera", "Sí, lliure"], correcta: 0, tip: "💡 TRAMPA: Prohibit bicis = prohibit VMP per vorera.", audio: "Trampa bici.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R05", categoria: "TRAMPA", codi: "R-301", nombre_senal: "TRAMPA VELOCIDAD", pregunta: "R-301 40. Pots anar a 45 per avançar?", opcions: ["No, límit és màxim absolut", "Sí, 10% marge", "Sí, per avançar"], correcta: 0, tip: "💡 TRAMPA: R-301 = Màxim absolut. No es pot superar mai ni per avançar.", audio: "Trampa velocitat.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R06", categoria: "TRAMPA", codi: "R-305", nombre_senal: "TRAMPA ADELANTAMIENTO TOTAL", pregunta: "R-305 prohibit avançar. Pots avançar bici deixant 1,5m?", opcions: ["No, prohibit a TOTS inclòs bici", "Sí, bici sí", "Sí, si no ve ningú"], correcta: 0, tip: "💡 TRAMPA MORTAL: R-305 = Ni bici ni moto.", audio: "Trampa adelantamiento.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R07", categoria: "TRAMPA", codi: "R-306", nombre_senal: "TRAMPA CAMIONES", pregunta: "R-306 camió no avança. Tu amb turisme pots?", opcions: ["Sí, jo sí", "No", "Només si el camió va a 20"], correcta: 0, tip: "💡 APREN: R-306 només camions >3500kg no poden. Turisme sí.", audio: "Trampa camions.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R08", categoria: "TRAMPA", codi: "R-307", nombre_senal: "TRAMPA PARADA", pregunta: "R-307 2 barres. Pots parar 2 segons amb warning?", opcions: ["No, ni 1 segon", "Sí, amb warning sí", "Sí, 2 min"], correcta: 0, tip: "💡 TRAMPA: 2 barres = NI PARAR amb warning. Ni 1 seg.", audio: "Trampa parada.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R09", categoria: "TRAMPA", codi: "R-402", nombre_senal: "TRAMPA GLORIETA", pregunta: "R-402 glorieta. Intermitent per entrar?", opcions: ["No, només per sortir", "Sí, esquerra per entrar", "Sí, dreta per entrar"], correcta: 0, tip: "💡 LLEI: Glorieta = No intermitent entrar. Sí per sortir.", audio: "Trampa glorieta.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R10", categoria: "TRAMPA", codi: "R-500", nombre_senal: "TRAMPA FIN PROHIBICIONES", pregunta: "R-500 ratlles. Anul·la R-2 Stop?", opcions: ["No, R-2 és obligació, no prohibició", "Sí, tot", "Només velocitat"], correcta: 0, tip: "💡 TRAMPA: R-500 només anul·la R de prohibició. R-1,R-2,R-400 són obligació, no les anul·la.", audio: "Trampa fin.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  { id: "T-R10", categoria: "TRAMPA", codi: "R-500", nombre_senal: "TRAMPA FIN PROHIBICIONES", pregunta: "TRAMPA DGT: R-500 amb ratlles negres anul·la R-2 Stop?", opcions: ["No, R-500 només anul·la prohibicions, Stop és prioritat/obligació", "Sí, anul·la tot", "Anul·la només velocitat"], correcta: 0, tip: "💡 TRAMPA CLAU: R-500 = Fi de PROHIBICIONS. R-1,R-2,R-400 són d'obligació/prioritat, NO les anul·la. Molt preguntat.", audio: "Trampa R-500 no anul·la Stop.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R11", categoria: "TRAMPA", codi: "R-301", nombre_senal: "TRAMPA VELOCIDAD POBLADO", pregunta: "Veus R-301 50 a poblat. Pots anar a 60 si no hi ha ningú?", opcions: ["No, límit màxim és absolut", "Sí, 10km marge DGT", "Sí, de nit"], correcta: 0, tip: "💡 TRAMPA: R-301 50 = MÀXIM 50. No hi ha marge legal. Radar a 51 ja multa.", audio: "Trampa velocitat màxima absoluta.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R12", categoria: "TRAMPA", codi: "R-302", nombre_senal: "TRAMPA GIRO VS MEDIA VUELTA", pregunta: "R-302 prohibit gir dreta. Pots fer mitja volta cap a dreta?", opcions: ["No, prohibit gir inclou mitja volta cap a eixe costat", "Sí, mitja volta sí", "Només si ets moto"], correcta: 0, tip: "💡 APREN: Si prohibeix gir dreta, també prohibeix canvi sentit cap a dreta. Lògic.", audio: "Trampa gir vs mitja volta.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R13", categoria: "TRAMPA", codi: "R-304", nombre_senal: "TRAMPA MEDIA VUELTA LIBRE GIRO", pregunta: "R-304 mitja volta prohibida. Pots girar a l'esquerra?", opcions: ["Sí, R-304 només prohibeix canvi sentit 180°, gir 90° sí", "No", "Només dreta"], correcta: 0, tip: "💡 TRAMPA INVERSA: R-304 = Només U prohibida. Girs 90° sí permesos.", audio: "Trampa mitja volta.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R14", categoria: "TRAMPA", codi: "R-308", nombre_senal: "TRAMPA QUINCENAS", pregunta: "Avui dia 16. Pots aparcar on hi ha R-308b 1a quincena?", opcions: ["Sí, R-308b és de l'1 al 15, avui 16 ja pots", "No", "Només parells"], correcta: 0, tip: "💡 TRUC: R-308b = 1-15, R-308c = 16-31. Dia 16 canvia.", audio: "Trampa quincenes.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R15", categoria: "TRAMPA", codi: "R-400b", nombre_senal: "TRAMPA SENTIDO OBLIGATORIO", pregunta: "R-400b fletxa dreta blava. Si vas recte per error, què passa?", opcions: ["Infracció, has de girar obligatòriament", "Res, pots rectificar després", "Només avís"], correcta: 0, tip: "💡 APREN: Blau obligatori = Si no ho compleixes, multa 200€.", audio: "Trampa sentit obligatori.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R16", categoria: "TRAMPA", codi: "R-401a", nombre_senal: "TRAMPA PASO VS GIRO", pregunta: "R-401a obstacle dreta vs R-400b gir dreta. Com les diferencies?", opcions: ["R-401a és fletxa 45° cap avall sortejant obstacle, R-400b és fletxa 90° cruïlla", "Són iguals", "R-401a és prohibició"], correcta: 0, tip: "💡 CLAU VISUAL: R-401 = Fletxa inclinada cap avall = obstacle. R-400 = Fletxa horitzontal 90° = cruïlla.", audio: "Trampa pas vs gir.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R17", categoria: "TRAMPA", codi: "R-402", nombre_senal: "TRAMPA PRIORITAT GLORIETA ANTIGA", pregunta: "Algú et diu 'a la glorieta prioritat el de la dreta'. És cert amb R-402?", opcions: ["No, amb R-402 prioritat el de DINS, norma nova", "Sí, dreta sempre", "Sí, el que entra"], correcta: 0, tip: "💡 LLEI 2024: Amb senyal R-402 = DINS MANA. Sense senyal seria dreta, però amb R-402 mana dins.", audio: "Trampa prioritat glorieta.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R18", categoria: "TRAMPA", codi: "R-501", nombre_senal: "TRAMPA FIN VELOCIDAD GENERICO", pregunta: "Després de R-501 fi 80, a autopista a quant pots anar amb turisme?", opcions: ["120km/h que és genèric autopista turisme", "80 encara", "90"], correcta: 0, tip: "💡 APREN: Fi límit específic = torna genèric via. Autopista 120 turisme, 90 camió.", audio: "Trampa fi velocitat genèric.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R19", categoria: "TRAMPA", codi: "R-101", nombre_senal: "TRAMPA ENTRADA PROHIBIDA BICIS", pregunta: "R-101 cercle vermell buit. Pot passar bici a mà?", opcions: ["No, R-101 prohibeix a TOTS inclòs bici a mà, és entrada prohibida total", "Sí, a mà sí", "Sí, si va a peu"], correcta: 0, tip: "💡 TRAMPA: R-101 = No entra ningú. Ni bici a mà. És tancament total.", audio: "Trampa entrada prohibida total.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R20", categoria: "TRAMPA", codi: "R-114", nombre_senal: "TRAMPA BICI VORERA", pregunta: "R-114 prohibit bicis. Un nen de 8 anys pot anar per vorera amb bici?", opcions: ["No, si prohibeix bicis, prohibeix a tots, ha d'anar per calçada o carril bici", "Sí, nens sí", "Sí, per vorera"], correcta: 0, tip: "💡 APREN: R-114 afecta a totes les bicis sense excepció edat.", audio: "Trampa bici vorera.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R21", categoria: "TRAMPA", codi: "R-200", nombre_senal: "TRAMPA ANCHURA RETROVISORES", pregunta: "R-200 amplada 2m. Comptes retrovisors?", opcions: ["Sí, amplada inclou retrovisors i càrrega", "No, només xapa", "Només càrrega"], correcta: 0, tip: "💡 CLAU: R-200 = Amplada màxima total amb retrovisors oberts i càrrega que sobresurti.", audio: "Trampa amplada.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R22", categoria: "TRAMPA", codi: "R-308d", nombre_senal: "TRAMPA HORARIO LIBRE", pregunta: "R-308d prohibit de 8h a 20h. Són les 21h. Pots aparcar?", opcions: ["Sí, fora d'horari sí", "No", "Només 5 min"], correcta: 0, tip: "💡 APREN: Horari restrictivo només eixes hores. Fora, lliure.", audio: "Trampa horari.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R23", categoria: "TRAMPA", codi: "R-400a", nombre_senal: "TRAMPA CARRIL BICI OBLIGATORIO", pregunta: "Veus senyal blava bici. Has d'anar per carril bici si vas amb bici?", opcions: ["Sí, si hi ha senyal blava bici, bici obligatòria per allà", "No, opcional", "Només si vols"], correcta: 0, tip: "💡 APREN: Blau rodó bici = Via obligatòria per a cicles. Si vas amb bici, has d'anar per allà.", audio: "Trampa via ciclista obligatòria.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R24", categoria: "TRAMPA", codi: "R-502", nombre_senal: "TRAMPA FIN ADELANTAMIENTO LINEA CONTINUA", pregunta: "Després de R-502 fi prohibit avançar, hi ha línia contínua. Pots avançar?", opcions: ["No, encara que s'acabi R-305, si hi ha línia contínua no pots", "Sí", "Sí, si no ve ningú"], correcta: 0, tip: "💡 TRAMPA DOBLE: R-502 anul·la senyal vertical, però marca viària contínua mana igual. No avançar.", audio: "Trampa línia contínua.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R25", categoria: "TRAMPA", codi: "R-305", nombre_senal: "TRAMPA ADELANTAR DOS RODES", pregunta: "R-305 prohibit avançar. Pots avançar moto de 2 rodes?", opcions: ["No", "Sí, motos sí", "Sí, si deixa 1,5m"], correcta: 0, tip: "💡 TRAMPA REPÀS: R-305 = Cap vehicle. R-306 = Només camions no poden.", audio: "Trampa avançar moto.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R26", categoria: "TRAMPA", codi: "R-307a", nombre_senal: "TRAMPA PARADA SEGONA FILA", pregunta: "R-307a prohibit estacionar. Pots parar en doble fila 30 seg?", opcions: ["No, doble fila és parada prohibida sempre", "Sí, 30 seg", "Sí, amb warning"], correcta: 0, tip: "💡 TRAMPA: Doble fila = Parada prohibida sempre, encara que no hi hagi senyal. Amb R-307a menys.", audio: "Trampa doble fila.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R27", categoria: "TRAMPA", codi: "R-402", nombre_senal: "TRAMPA GLORIETA INTERMITENT SORTIDA", pregunta: "Dins glorieta R-402 per sortir, quin intermitent?", opcions: ["Dreta per sortir", "Esquerra", "Cap"], correcta: 0, tip: "💡 LLEI: Per sortir glorieta = Intermitent DRETA sempre. Abans de sortir.", audio: "Trampa intermitent glorieta.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R28", categoria: "TRAMPA", codi: "R-111", nombre_senal: "TRAMPA TRACTOR VS COCHE", pregunta: "R-111 prohibit tractor. Pots passar amb cotxe amb remolque agrícola?", opcions: ["Sí, si ets turisme no ets tractor agrícola", "No", "Només si vas buit"], correcta: 0, tip: "💡 APREN: R-111 afecta només vehicle agrícola com a tractor, no turisme amb remolque.", audio: "Trampa tractor.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R29", categoria: "TRAMPA", codi: "R-505", nombre_senal: "TRAMPA BUS VAO", pregunta: "Després de R-505 fi via reservada bus, pot anar turisme per carril bus?", opcions: ["Sí, fi de reserva, ja lliure per a tots", "No, segueix bus", "Només taxi"], correcta: 0, tip: "💡 APREN: R-505 = S'acaba carril BUS/VAO. Ara per a tots.", audio: "Trampa fi bus.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "T-R30", categoria: "TRAMPA", codi: "R-2", nombre_senal: "TRAMPA STOP LINIA PUNTS", pregunta: "Stop R-2 amb línia de punts per davant. On pares?", opcions: ["Abans de la línia contínua si hi és, si no abans de la de punts de cediu", "Sobre la de punts", "Després"], correcta: 0, tip: "💡 TRAMPA FINAL: Stop pot tindre 2 línies: contínua Stop i punts Ceda. Para a la contínua. Si només punts, abans punts.", audio: "Trampa stop doble línia.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// ========= BLOQUE 3: INDICACION V2 PRO - 100% QUADRAT AMB BANCO OFICIAL V2 =========
  // S-01 TIPOS DE VIA
  { id: "S-1", categoria: "INDICACION", codi: "S-1", nombre_senal: "AUTOPISTA", pregunta: "Veus S-1 blava amb pont. Pots entrar amb ciclomotor 49cc?", opcions: ["No, autopista prohibit <60km/h, ciclomotors, bicis i vianants", "Sí", "Sí, si vas a 45"], correcta: 0, tip: "💡 APREN PER SEMPRE: S-1 = AUTOPISTA = 1 pont al dibuix. Prohibit tot lo que no arribi a 60. Límit 120. Truc: S-1 = 1 pont.", audio: "S-1. Autopista. Prohibit ciclomotors.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-1a", categoria: "INDICACION", codi: "S-1a", nombre_senal: "AUTOVIA", pregunta: "S-1a autovia. Pots entrar amb tractor?", opcions: ["Sí, autovia sí permet tractors i ciclomotors si no hi ha R", "No", "Només cotxes"], correcta: 0, tip: "💡 TRAMPA CLAU DGT: S-1a = 2 calçades separades al dibuix. Sí deixa tractors i ciclomotors. Diferència amb S-1 que NO. Truc: S-1a = 2 ponts.", audio: "S-1a. Autovia. Sí tractors.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-1b", categoria: "INDICACION", codi: "S-1b", nombre_senal: "CARRETERA MULTICARRIL", pregunta: "S-1b multicarril. Hi ha separació física entre sentits?", opcions: ["No, 2 o més carrils sense separació física", "Sí, mitjana", "Sí, com autopista"], correcta: 0, tip: "💡 APREN: S-1b = MULTI sense mitjana. S-1a = AMB mitjana. Límit 100 si senyalitza.", audio: "S-1b. Multicarril.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-1c", categoria: "INDICACION", codi: "S-1c", nombre_senal: "CARRETERA 2+1", pregunta: "S-1c 2+1. Què fa el carril central?", opcions: ["Va alternant per avançar uns km per un sentit i després l'altre", "És per girar", "És bus"], correcta: 0, tip: "💡 APREN: S-1c = 2+1 = Molt a Girona. Alterna. No t'encanti avançar, s'acaba.", audio: "S-1c. Carretera 2+1.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-2", categoria: "INDICACION", codi: "S-2", nombre_senal: "FIN AUTOPISTA", pregunta: "S-2 ratllada vermell sobre S-1. A quant pots anar ara?", opcions: ["Torna límit genèric carretera 90, no 120", "120 encara", "50"], correcta: 0, tip: "💡 TRAMPA: S-2 = Fi autopista. Ja no 120. Baixa a 90/100.", audio: "S-2. Fi autopista.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-02
  { id: "S-2a", categoria: "INDICACION", codi: "S-2a", nombre_senal: "FIN AUTOVIA", pregunta: "S-2a fi autovia. Què passa?", opcions: ["S'acaba autovia, torna límit convencional", "Segueix autovia", "Prohibit circular"], correcta: 0, tip: "💡 APREN: S-2a = Barra vermella sobre S-1a.", audio: "S-2a. Fi autovia.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIAS_FIN.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-2b", categoria: "INDICACION", codi: "S-2b", nombre_senal: "FIN MULTICARRIL", pregunta: "S-2b fi multicarril. Quants carrils ara?", opcions: ["1 per sentit convencional", "2 encara", "0"], correcta: 0, tip: "💡 APREN: S-2b = Fi de 2+ carrils.", audio: "S-2b. Fi multicarril.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIAS_FIN.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-2c", categoria: "INDICACION", codi: "S-2c", nombre_senal: "FIN 2+1", pregunta: "S-2c fi 2+1. Què passa amb avançar?", opcions: ["Ja no tens carril extra per avançar, només 1", "Pots avançar millor", "Prohibit avançar"], correcta: 0, tip: "💡 APREN: S-2c = S'acaba carril d'avançament altern.", audio: "S-2c. Fi 2+1.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIAS_FIN.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-3", categoria: "INDICACION", codi: "S-3", nombre_senal: "CALZADA PARA AUTOMOVILES", pregunta: "S-3 cotxe. Pots entrar amb camió 3500kg?", opcions: ["No, S-3 només automòbils lleugers, no camions ni bus", "Sí", "Sí, si vas buit"], correcta: 0, tip: "💡 TRAMPA: S-3 = Només turismes i motos. No camions >3500 ni bus. Diferent de S-1a.", audio: "S-3. Calçada automòbils.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIAS_FIN.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-4", categoria: "INDICACION", codi: "S-4", nombre_senal: "VIA RESERVADA AUTOMOVILES", pregunta: "S-4 via reservada. Pots entrar amb moto?", opcions: ["No, S-4 només turismes, ni motos ni camions", "Sí", "Només moto gran"], correcta: 0, tip: "💡 TRAMPA MORTAL: S-3 = Cotxes+motos. S-4 = Només cotxes. Truc: S-4 té un cotxe sol dibuixat.", audio: "S-4. Via reservada turismes.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIAS_FIN.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-5", categoria: "INDICACION", codi: "S-5", nombre_senal: "TUNEL", pregunta: "Veus S-5 túnel. Què has de fer?", opcions: ["Encendre encreuament, treure ulleres sol, no parar", "Posar llargues", "Clàxon"], correcta: 0, tip: "💡 APREN: Túnel = Llums curtes, no parar ni marxa enrere.", audio: "S-5. Túnel.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIAS_FIN.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-03
  { id: "S-06", categoria: "INDICACION", codi: "S-6", nombre_senal: "CARRIL REVERSIBLE", pregunta: "S-6 fletxes vermella/blanca. Què vol dir?", opcions: ["Carril reversible canvia sentit segons hora", "Carril bus", "Carril bici"], correcta: 0, tip: "💡 TRAMPA: S-6 = Vermell+blanc = REVERSIBLE. Mira semàfor carril.", audio: "S-6. Carril reversible.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-7", categoria: "INDICACION", codi: "S-7", nombre_senal: "VELOCIDAD RECOMENDADA", pregunta: "S-7 60 blau. Pots anar a 90?", opcions: ["Sí, blau és recomanat no obligatori, però recomanen 60", "No, màxim 60", "Prohibit 90"], correcta: 0, tip: "💡 CLAU: S-7 blau = Recomanat. R-301 vermell = Obligatori màxim.", audio: "S-7. Velocitat recomanada 60.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-8", categoria: "INDICACION", codi: "S-8", nombre_senal: "FIN VELOCIDAD RECOMENDADA", pregunta: "S-8 60 ratllat blau. Què passa?", opcions: ["Fi de recomanació 60", "Prohibit 60 ara", "Màxim 60"], correcta: 0, tip: "💡 APREN: S-8 = Fi de S-7.", audio: "S-8. Fi velocitat recomanada.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-9", categoria: "INDICACION", codi: "S-9", nombre_senal: "VELOCIDAD POR CARRIL", pregunta: "S-9 90 100 120 per carrils. Pots anar a 120 pel dret?", opcions: ["No, cada carril té el seu màxim, dret 90 normalment", "Sí, tots 120", "Sí, si no hi ha ningú"], correcta: 0, tip: "💡 APREN: S-9 = Velocitat diferent per carril. Dret lent, esquerre ràpid.", audio: "S-9. Velocitat per carrils.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-10", categoria: "INDICACION", codi: "S-10", nombre_senal: "FIN VELOCIDAD POR CARRIL", pregunta: "S-10 fi velocitat per carril. Què ara?", opcions: ["Fi de S-9, torna límit genèric", "Prohibit", "Recomanat"], correcta: 0, tip: "💡 APREN: S-10 = Fi S-9.", audio: "S-10. Fi velocitat per carril.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-11", categoria: "INDICACION", codi: "S-11", nombre_senal: "CALZADA DE SENTIDO UNICO", pregunta: "S-11 calçada sentit únic. Pots anar en contra?", opcions: ["No", "Sí, a poc a poc", "Només moto"], correcta: 0, tip: "💡 APREN: S-11 = Un sentit. No contrasentit.", audio: "S-11. Sentit únic.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-04 - S-11A_A_S-14A_SENTIDO.jpg
  { id: "S-11a", categoria: "INDICACION", codi: "S-11a", nombre_senal: "CALZADA SENTIDO UNICO 2 CARRILES", pregunta: "Veus S-11a amb 2 fletxes rectes. Pots anar en sentit contrari?", opcions: ["No, 2 carrils mateix sentit únic", "Sí, un per cada sentit", "Sí, si vas lent"], correcta: 0, tip: "💡 APREN: S-11a = 2 fletxes = 2 carrils sentit únic. S-11 = 1 carril.", audio: "S-11a. Sentit únic 2 carrils.", panel_id: "S-04", ruta_panel: "S-11A_A_S-14A_SENTIDO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-11b", categoria: "INDICACION", codi: "S-11b", nombre_senal: "CALZADA SENTIDO UNICO 3 CARRILES", pregunta: "S-11b 3 fletxes. Quants carrils sentit únic?", opcions: ["3 carrils mateix sentit", "3 sentits diferents", "1 només"], correcta: 0, tip: "💡 APREN: S-11b = 3 carrils sentit únic.", audio: "S-11b. 3 carrils sentit únic.", panel_id: "S-04", ruta_panel: "S-11A_A_S-14A_SENTIDO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-12a", categoria: "INDICACION", codi: "S-12a", nombre_senal: "TRAMO PRESELECCION SENTIDO UNICO", pregunta: "S-12a amb fletxes preselecció. Quan triar carril?", opcions: ["Ara, abans cruïlla segons fletxa destí", "A la cruïlla", "Després"], correcta: 0, tip: "💡 TRAMPA: S-12a = Preselecció abans. No canvies a última hora.", audio: "S-12a. Tram preselecció.", panel_id: "S-04", ruta_panel: "S-11A_A_S-14A_SENTIDO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-12b", categoria: "INDICACION", codi: "S-12b", nombre_senal: "TRAMO PRESELECCION 2 CARRILES", pregunta: "S-12b 2 fletxes corbes. Pots anar recte des del dret si fletxa diu dreta?", opcions: ["No, has de seguir fletxa del teu carril", "Sí", "Només moto"], correcta: 0, tip: "💡 APREN: Fletxa carril = Obligatori seguir-la.", audio: "S-12b. Preselecció 2 carrils.", panel_id: "S-04", ruta_panel: "S-11A_A_S-14A_SENTIDO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-13", categoria: "INDICACION", codi: "S-13", nombre_senal: "PASO DE PEATONES", pregunta: "S-13 pas zebra blau. Veus vianant amb intenció de creuar?", opcions: ["Cedeixo i paro, té prioritat total", "Passo ràpid", "Pito perquè passi ràpid"], correcta: 0, tip: "💡 TRAMPA MORTAL EXAMEN: S-13 no només informa, OBLIGA a cedir. Multa 200€ si no pares.", audio: "S-13. Pas de vianants, cedeix.", panel_id: "S-04", ruta_panel: "S-11A_A_S-14A_SENTIDO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-14a", categoria: "INDICACION", codi: "S-14a", nombre_senal: "PASO INFERIOR PEATONES", pregunta: "S-14a pas inferior amb escales. És obligatori usar-lo?", opcions: ["Recomanat sí, però si vas per calçada i hi ha S-13 tens prioritat igual", "Obligatori sempre", "Prohibit usar-lo"], correcta: 0, tip: "💡 APREN: Pas inferior/superior recomanat, no obligatori si no hi ha R-118.", audio: "S-14a. Pas inferior vianants.", panel_id: "S-04", ruta_panel: "S-11A_A_S-14A_SENTIDO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-05 - S-14B_A_S-15A_RAMPAS.jpg
  { id: "S-14b", categoria: "INDICACION", codi: "S-14b", nombre_senal: "PASO SUPERIOR PEATONES", pregunta: "S-14b passarel·la per sobre. Què fas?", opcions: ["Usar-la recomanat, més segur", "Prohibit", "Només bicis"], correcta: 0, tip: "💡 APREN: Passarel·la = Seguretat. Usa-la.", audio: "S-14b. Pas superior.", panel_id: "S-05", ruta_panel: "S-14B_A_S-15A_RAMPAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-14c", categoria: "INDICACION", codi: "S-14c", nombre_senal: "RAMPA PASO INFERIOR", pregunta: "S-14c rampa per minusvàlids. Què indica?", opcions: ["Accés adaptat a pas inferior", "Prohibit rampa", "Només cotxes"], correcta: 0, tip: "💡 APREN: S-14c/d = Rampes accessibilitat.", audio: "S-14c. Rampa pas inferior.", panel_id: "S-05", ruta_panel: "S-14B_A_S-15A_RAMPAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-14d", categoria: "INDICACION", codi: "S-14d", nombre_senal: "RAMPA PASO SUPERIOR", pregunta: "S-14d rampa passarel·la. Què indica?", opcions: ["Accés adaptat pas superior", "Prohibit", "Només escales"], correcta: 0, tip: "💡 APREN: Rampa superior.", audio: "S-14d. Rampa pas superior.", panel_id: "S-05", ruta_panel: "S-14B_A_S-15A_RAMPAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-14e", categoria: "INDICACION", codi: "S-14e", nombre_senal: "ACCESO PEATONES", pregunta: "S-14e accés vianants. Què indica?", opcions: ["Entrada a zona vianants", "Sortida", "Prohibit"], correcta: 0, tip: "💡 APREN: S-14e = Accés.", audio: "S-14e. Accés vianants.", panel_id: "S-05", ruta_panel: "S-14B_A_S-15A_RAMPAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-14f", categoria: "INDICACION", codi: "S-14f", nombre_senal: "ACCESO RAMPA", pregunta: "S-14f rampa accés. Què indica?", opcions: ["Accés amb rampa", "Escales", "Túnel"], correcta: 0, tip: "💡 APREN: S-14f = Rampa.", audio: "S-14f. Accés rampa.", panel_id: "S-05", ruta_panel: "S-14B_A_S-15A_RAMPAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-15a", categoria: "INDICACION", codi: "S-15a", nombre_senal: "CALLE SIN SALIDA DERECHA", pregunta: "S-15a carrer sense sortida a dreta. Pots sortir per allà?", opcions: ["No, cul de sac a la dreta", "Sí", "Només moto"], correcta: 0, tip: "💡 APREN: S-15a/b = Cul de sac lateral.", audio: "S-15a. Carrer sense sortida dreta.", panel_id: "S-05", ruta_panel: "S-14B_A_S-15A_RAMPAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-06 - S-15B_A_S-17_CALLES.jpg
  { id: "S-15b", categoria: "INDICACION", codi: "S-15b", nombre_senal: "CALLE SIN SALIDA IZQUIERDA", pregunta: "S-15b cul de sac esquerra. Què vol dir?", opcions: ["Carrer sense sortida a l'esquerra", "Sortida esquerra", "Gir obligatori"], correcta: 0, tip: "💡 APREN: S-15b = Cul de sac esquerra.", audio: "S-15b. Sense sortida esquerra.", panel_id: "S-06", ruta_panel: "S-15B_A_S-17_CALLES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-15c", categoria: "INDICACION", codi: "S-15c", nombre_senal: "CALLE SIN SALIDA FRENTE", pregunta: "S-15c carrer sense sortida front. Pots seguir recte?", opcions: ["No, has de girar abans", "Sí", "Només si vas ràpid"], correcta: 0, tip: "💡 APREN: S-15c = No hi ha sortida recte.", audio: "S-15c. Sense sortida front.", panel_id: "S-06", ruta_panel: "S-15B_A_S-17_CALLES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-15d", categoria: "INDICACION", codi: "S-15d", nombre_senal: "CALLE SIN SALIDA CRUCE", pregunta: "S-15d cruïlla sense sortida. Què passa?", opcions: ["Una de les branques és cul de sac", "Totes sense sortida", "Cap"], correcta: 0, tip: "💡 APREN: S-15d = Una branca tancada.", audio: "S-15d. Cul de sac cruïlla.", panel_id: "S-06", ruta_panel: "S-15B_A_S-17_CALLES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-15e", categoria: "INDICACION", codi: "S-15e", nombre_senal: "CALLE SIN SALIDA", pregunta: "S-15e cul de sac clàssic. Què fas?", opcions: ["Girar i tornar, no hi ha sortida", "Seguir", "Aparcar"], correcta: 0, tip: "💡 APREN: S-15e = Cul de sac total.", audio: "S-15e. Carrer sense sortida.", panel_id: "S-06", ruta_panel: "S-15B_A_S-17_CALLES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-16", categoria: "INDICACION", codi: "S-16", nombre_senal: "ZONA DE FRENADO EMERGENCIA", pregunta: "S-16 llit de frenada gravilla. Quan l'uses?", opcions: ["Si et quedes sense frens, per frenar d'emergència", "Per aparcar", "Per descansar"], correcta: 0, tip: "💡 APREN: S-16 = Llit frenada. Només emergència sense frens. Baixada llarga.", audio: "S-16. Zona frenada emergència.", panel_id: "S-06", ruta_panel: "S-15B_A_S-17_CALLES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-17", categoria: "INDICACION", codi: "S-17", nombre_senal: "APARCAMIENTO", pregunta: "S-17 P blava. Pots aparcar?", opcions: ["Sí, zona aparcament permès", "No", "Només 1 min"], correcta: 0, tip: "💡 APREN: S-17 = Parking. Mira si és ORA.", audio: "S-17. Aparcament.", panel_id: "S-06", ruta_panel: "S-15B_A_S-17_CALLES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-07 - S-21_TRANSITABILIDAD.jpg
  { id: "S-21", categoria: "INDICACION", codi: "S-21", nombre_senal: "TRANSITABILIDAD", pregunta: "S-21 carretera amb neu. Què indica?", opcions: ["Estat de transitabilitat de port", "Aparcament", "Túnel"], correcta: 0, tip: "💡 APREN: S-21 = Panell transitabilitat hivern. Cadenes?", audio: "S-21. Transitabilitat.", panel_id: "S-07", ruta_panel: "S-21_TRANSITABILIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-08 - S-22_A_S-26B_SERVICIOS.jpg
  { id: "S-22", categoria: "INDICACION", codi: "S-22", nombre_senal: "TELEFONO", pregunta: "S-22 telèfon. Què indica?", opcions: ["Telèfon públic a prop", "SOS", "Taller"], correcta: 0, tip: "💡 APREN: S-22 a S-26b = Serveis propers.", audio: "S-22. Telèfon.", panel_id: "S-08", ruta_panel: "S-22_A_S-26B_SERVICIOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-23", categoria: "INDICACION", codi: "S-23", nombre_senal: "TALLER", pregunta: "S-23 clau anglesa. Què hi ha?", opcions: ["Taller mecànic", "Gasolinera", "Restaurant"], correcta: 0, tip: "💡 APREN: S-23 = Taller.", audio: "S-23. Taller.", panel_id: "S-08", ruta_panel: "S-22_A_S-26B_SERVICIOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-24", categoria: "INDICACION", codi: "S-24", nombre_senal: "GASOLINERA", pregunta: "S-24 sortidor. Què hi ha?", opcions: ["Estació combustible", "Taller", "WC"], correcta: 0, tip: "💡 APREN: S-24 = Gasolinera.", audio: "S-24. Gasolinera.", panel_id: "S-08", ruta_panel: "S-22_A_S-26B_SERVICIOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-25", categoria: "INDICACION", codi: "S-25", nombre_senal: "HOTEL", pregunta: "S-25 llit. Què hi ha?", opcions: ["Hotel o motel", "Càmping", "Restaurant"], correcta: 0, tip: "💡 APREN: S-25 = Hotel.", audio: "S-25. Hotel.", panel_id: "S-08", ruta_panel: "S-22_A_S-26B_SERVICIOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-26a", categoria: "INDICACION", codi: "S-26a", nombre_senal: "RESTAURANTE", pregunta: "S-26a coberts. Què hi ha?", opcions: ["Restaurant", "Hotel", "Bar"], correcta: 0, tip: "💡 APREN: S-26a = Restaurant.", audio: "S-26a. Restaurant.", panel_id: "S-08", ruta_panel: "S-22_A_S-26B_SERVICIOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-26b", categoria: "INDICACION", codi: "S-26b", nombre_senal: "CAFETERIA", pregunta: "S-26b tassa. Què hi ha?", opcions: ["Cafeteria", "Restaurant", "Hotel"], correcta: 0, tip: "💡 APREN: S-26b = Cafeteria.", audio: "S-26b. Cafeteria.", panel_id: "S-08", ruta_panel: "S-22_A_S-26B_SERVICIOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-09 - S-26C_A_S-30A_ZONAS.jpg
  { id: "S-26c", categoria: "INDICACION", codi: "S-26c", nombre_senal: "CAMPING", pregunta: "S-26c tenda. Què hi ha?", opcions: ["Càmping", "Hotel", "Parking"], correcta: 0, tip: "💡 APREN: S-26c = Càmping.", audio: "S-26c. Càmping.", panel_id: "S-09", ruta_panel: "S-26C_A_S-30A_ZONAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-27", categoria: "INDICACION", codi: "S-27", nombre_senal: "PUESTO SOCORRO", pregunta: "S-27 creu vermella. Què hi ha?", opcions: ["Lloc de socors, primers auxilis", "Hospital gran", "Farmàcia"], correcta: 0, tip: "💡 APREN: S-27 = Socors. No és hospital gran.", audio: "S-27. Lloc socors.", panel_id: "S-09", ruta_panel: "S-26C_A_S-30A_ZONAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-28", categoria: "INDICACION", codi: "S-28", nombre_senal: "ZONA RESIDENCIAL", pregunta: "S-28 zona amb nen i casa. A quant vas?", opcions: ["Màxim 20km/h i prioritat vianants, poden jugar a calçada", "50", "30"], correcta: 0, tip: "💡 TRAMPA CLAU DGT: S-28 = 20km/h. Vianants usen tota calçada. S-30 = Zona peatonal només vianants.", audio: "S-28. Zona residencial 20.", panel_id: "S-09", ruta_panel: "S-26C_A_S-30A_ZONAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-29", categoria: "INDICACION", codi: "S-29", nombre_senal: "FIN ZONA RESIDENCIAL", pregunta: "S-29 fi zona residencial. Què passa?", opcions: ["S'acaba límit 20 i prioritat vianants", "Comença 20", "Prohibit"], correcta: 0, tip: "💡 APREN: S-29 = Barra vermella sobre S-28.", audio: "S-29. Fi zona residencial.", panel_id: "S-09", ruta_panel: "S-26C_A_S-30A_ZONAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-30a", categoria: "INDICACION", codi: "S-30a", nombre_senal: "ZONA 30", pregunta: "S-30a zona 30. A quant?", opcions: ["Màxim 30km/h", "Mínim 30", "Recomanat 30"], correcta: 0, tip: "💡 APREN: S-30a = Zona 30. 30 màxim.", audio: "S-30a. Zona 30.", panel_id: "S-09", ruta_panel: "S-26C_A_S-30A_ZONAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-10 - S-31A_A_S-34A_ZONA_SOS.jpg
  { id: "S-31a", categoria: "INDICACION", codi: "S-31a", nombre_senal: "FIN ZONA 30", pregunta: "S-31a fi zona 30. Què passa?", opcions: ["Fi de límit 30, torna genèric", "Comença 30", "30 encara"], correcta: 0, tip: "💡 APREN: S-31a = Fi zona 30.", audio: "S-31a. Fi zona 30.", panel_id: "S-10", ruta_panel: "S-31A_A_S-34A_ZONA_SOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-32", categoria: "INDICACION", codi: "S-32", nombre_senal: "ZONA PEATONAL", pregunta: "S-32 zona vianants. Pots entrar amb cotxe?", opcions: ["No, només vianants, cotxe prohibit excepte autoritzats", "Sí", "Sí, a 20"], correcta: 0, tip: "💡 TRAMPA: S-32 = Només vianants. S-28 = Cotxes a 20 amb vianants.", audio: "S-32. Zona peatonal.", panel_id: "S-10", ruta_panel: "S-31A_A_S-34A_ZONA_SOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-33", categoria: "INDICACION", codi: "S-33", nombre_senal: "FIN ZONA PEATONAL", pregunta: "S-33 fi zona peatonal. Què passa?", opcions: ["S'acaba zona només vianants", "Comença", "Ara 20"], correcta: 0, tip: "💡 APREN: S-33 = Barra sobre S-32.", audio: "S-33. Fi zona peatonal.", panel_id: "S-10", ruta_panel: "S-31A_A_S-34A_ZONA_SOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-34", categoria: "INDICACION", codi: "S-34", nombre_senal: "ZONA 20", pregunta: "S-34 zona 20? No, S-34 és SOS. Quina és la correcta?", opcions: ["S-34 és lloc SOS, telèfon emergència", "Zona 20", "Zona 30"], correcta: 0, tip: "💡 APREN: S-34 = SOS. Truc.", audio: "S-34. Lloc SOS.", panel_id: "S-10", ruta_panel: "S-31A_A_S-34A_ZONA_SOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-34a", categoria: "INDICACION", codi: "S-34a", nombre_senal: "EXTINTOR", pregunta: "S-34a extintor. On és?", opcions: ["Senyal indica extintor a túnel", "Prohibit foc", "Sortida"], correcta: 0, tip: "💡 APREN: S-34a = Extintor túnel.", audio: "S-34a. Extintor.", panel_id: "S-10", ruta_panel: "S-31A_A_S-34A_ZONA_SOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-11 - S-35_A_S-40_BICI_PATINETE.jpg
  { id: "S-35", categoria: "INDICACION", codi: "S-35", nombre_senal: "VIA RESERVADA CICLOMOTORES", pregunta: "S-35 via ciclomotor. Pots anar amb bici?", opcions: ["No, S-35 només ciclomotors", "Sí", "Sí, si vas lent"], correcta: 0, tip: "💡 TRAMPA: S-35 = Ciclomotors. S-36 = Bici no és, és altra. S-35 actual DGT és via ciclomotor.", audio: "S-35. Via ciclomotor.", panel_id: "S-11", ruta_panel: "S-35_A_S-40_BICI_PATINETE.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-36", categoria: "INDICACION", codi: "S-36", nombre_senal: "VIA RESERVADA CICLOS", pregunta: "S-36 bici. Pots anar amb ciclomotor?", opcions: ["No, només bicis", "Sí", "Sí, 49cc sí"], correcta: 0, tip: "💡 APREN: S-36 = Només bicis. VMP no.", audio: "S-36. Via cicles.", panel_id: "S-11", ruta_panel: "S-35_A_S-40_BICI_PATINETE.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-37", categoria: "INDICACION", codi: "S-37", nombre_senal: "VIA RESERVADA VMP", pregunta: "S-37 patinet VMP. Pots anar amb bici?", opcions: ["No, només VMP", "Sí", "Només si vas a peu"], correcta: 0, tip: "💡 APREN: S-37 = Només patinets VMP.", audio: "S-37. Via VMP.", panel_id: "S-11", ruta_panel: "S-35_A_S-40_BICI_PATINETE.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-38", categoria: "INDICACION", codi: "S-38", nombre_senal: "VIA RESERVADA CICLOS Y VMP", pregunta: "S-38 bici+patinet. Pots anar amb ciclomotor?", opcions: ["No, només bici i VMP", "Sí", "Sí, si vas lent"], correcta: 0, tip: "💡 APREN: S-38 = Bici+VMP junts. Ciclomotor no.", audio: "S-38. Via bici i VMP.", panel_id: "S-11", ruta_panel: "S-35_A_S-40_BICI_PATINETE.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-39", categoria: "INDICACION", codi: "S-39", nombre_senal: "FIN VIA CICLOMOTOR", pregunta: "S-39 fi via ciclomotor. Què passa?", opcions: ["S'acaba via reservada ciclomotor", "Comença", "Prohibit ciclomotor ara"], correcta: 0, tip: "💡 APREN: S-39 = Fi S-35.", audio: "S-39. Fi via ciclomotor.", panel_id: "S-11", ruta_panel: "S-35_A_S-40_BICI_PATINETE.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-40", categoria: "INDICACION", codi: "S-40", nombre_senal: "FIN VIA CICLOS Y VMP", pregunta: "S-40 fi bici i VMP. Què passa?", opcions: ["Fi via reservada bici i VMP, tornes a calçada normal", "Prohibit bici ara", "Comença"], correcta: 0, tip: "💡 APREN: S-40 = Fi S-36/S-38.", audio: "S-40. Fi via cicles.", panel_id: "S-11", ruta_panel: "S-35_A_S-40_BICI_PATINETE.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-12 - S-41_A_S-44_CICLO_PEATON.jpg
  { id: "S-41", categoria: "INDICACION", codi: "S-41", nombre_senal: "VIA COMPARTIDA PEATON CICLO SEPARADOS", pregunta: "S-41 vianant i bici separats per línia. Per on vas si vas a peu?", opcions: ["Per la part de vianant, no per la de bici", "Per on vulguis", "Per la de bici"], correcta: 0, tip: "💡 TRAMPA: S-41 = Línia separa. Vianant per la seva, bici per la seva. No barrejar.", audio: "S-41. Via separada vianant bici.", panel_id: "S-12", ruta_panel: "S-41_A_S-44_CICLO_PEATON.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-42", categoria: "INDICACION", codi: "S-42", nombre_senal: "VIA COMPARTIDA PEATON CICLO JUNTA", pregunta: "S-42 vianant i bici junts sense línia. Què passa?", opcions: ["Compartida sense separar, precaució mútua", "Només bici", "Només vianant"], correcta: 0, tip: "💡 APREN: S-42 = Junts sense línia. Respecte.", audio: "S-42. Via conjunta.", panel_id: "S-12", ruta_panel: "S-41_A_S-44_CICLO_PEATON.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-43", categoria: "INDICACION", codi: "S-43", nombre_senal: "VIA COMPARTIDA TRIPLE", pregunta: "S-43 triple separació. Què indica?", opcions: ["Vianant, bici i VMP separats en 3 franges", "Només bici", "Només vianant"], correcta: 0, tip: "💡 APREN: S-43 = 3 franges nova normativa VMP.", audio: "S-43. Via triple.", panel_id: "S-12", ruta_panel: "S-41_A_S-44_CICLO_PEATON.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-44", categoria: "INDICACION", codi: "S-44", nombre_senal: "FIN VIA COMPARTIDA", pregunta: "S-44 fi via compartida. Què passa?", opcions: ["S'acaba via vianant+bici", "Comença", "Prohibit"], correcta: 0, tip: "💡 APREN: S-44 = Fi S-41/S-42.", audio: "S-44. Fi via compartida.", panel_id: "S-12", ruta_panel: "S-41_A_S-44_CICLO_PEATON.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-13 - S-45_A_S-49_PASOS_ZONA20.jpg
  { id: "S-45", categoria: "INDICACION", codi: "S-45", nombre_senal: "PASO CICLISTA", pregunta: "S-45 pas bici pintat a terra. Qui té prioritat?", opcions: ["Bici al seu pas té prioritat, cedeix cotxe", "Cotxe", "Cap"], correcta: 0, tip: "💡 TRAMPA: Pas ciclista = Prioritat bici com pas vianants.", audio: "S-45. Pas ciclista.", panel_id: "S-13", ruta_panel: "S-45_A_S-49_PASOS_ZONA20.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-46", categoria: "INDICACION", codi: "S-46", nombre_senal: "PASO CICLISTA Y PEATON", pregunta: "S-46 pas bici + zebra. Què?", opcions: ["Pas combinat bici i vianant", "Només bici", "Només vianant"], correcta: 0, tip: "💡 APREN: S-46 = Combinat.", audio: "S-46. Pas bici i vianant.", panel_id: "S-13", ruta_panel: "S-45_A_S-49_PASOS_ZONA20.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-47", categoria: "INDICACION", codi: "S-47", nombre_senal: "ZONA 20", pregunta: "S-47 zona 20. A quant vas?", opcions: ["Màxim 20km/h, prioritat vianants", "Mínim 20", "30"], correcta: 0, tip: "💡 TRAMPA: S-47 = 20. S-28 = Residencial 20 també però amb nens. S-30a = 30.", audio: "S-47. Zona 20.", panel_id: "S-13", ruta_panel: "S-45_A_S-49_PASOS_ZONA20.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-48", categoria: "INDICACION", codi: "S-48", nombre_senal: "FIN ZONA 20", pregunta: "S-48 fi zona 20. Què passa?", opcions: ["Fi límit 20", "Comença 20", "Ara 30"], correcta: 0, tip: "💡 APREN: S-48 = Barra sobre S-47.", audio: "S-48. Fi zona 20.", panel_id: "S-13", ruta_panel: "S-45_A_S-49_PASOS_ZONA20.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-49", categoria: "INDICACION", codi: "S-49", nombre_senal: "ZONA 30 CICLISTA", pregunta: "S-49 zona 30 amb bici. Què?", opcions: ["Zona 30 compartida amb bicis, màxim 30", "Només bici", "Prohibit bici"], correcta: 0, tip: "💡 APREN: S-49 = Zona 30 ciclista.", audio: "S-49. Zona 30.", panel_id: "S-13", ruta_panel: "S-45_A_S-49_PASOS_ZONA20.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-14 - S-50D_A_S-51A_CARRILES.jpg
  { id: "S-50d", categoria: "INDICACION", codi: "S-50d", nombre_senal: "CARRIL RESERVADO BUS", pregunta: "S-50d carril BUS. Pots entrar amb cotxe per aparcar?", opcions: ["No, prohibit, només bus", "Sí, 2 min", "Sí, si no ve bus"], correcta: 0, tip: "💡 TRAMPA: BUS = Només bus. Ni parar.", audio: "S-50d. Carril bus.", panel_id: "S-14", ruta_panel: "S-50D_A_S-51A_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-50e", categoria: "INDICACION", codi: "S-50e", nombre_senal: "CARRIL BUS Y TAXI", pregunta: "S-50e BUS+TAXI. Pot anar-hi cotxe?", opcions: ["No, només bus i taxi", "Sí", "Només si és taxi"], correcta: 0, tip: "💡 APREN: S-50e = Bus+taxi.", audio: "S-50e. Carril bus taxi.", panel_id: "S-14", ruta_panel: "S-50D_A_S-51A_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-51a", categoria: "INDICACION", codi: "S-51a", nombre_senal: "CARRIL BUS BICI", pregunta: "S-51a bus i bici. Pots anar amb moto?", opcions: ["No, només bus i bici", "Sí", "Sí, si vas lent"], correcta: 0, tip: "💡 APREN: S-51a = Bus+bici.", audio: "S-51a. Carril bus bici.", panel_id: "S-14", ruta_panel: "S-50D_A_S-51A_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-15 - S-51B_A_S-52C_CARRILES.jpg
  { id: "S-51b", categoria: "INDICACION", codi: "S-51b", nombre_senal: "CARRIL BUS BICI VMP", pregunta: "S-51b bus bici VMP. Pot anar cotxe?", opcions: ["No", "Sí", "Sí, elèctric sí"], correcta: 0, tip: "💡 APREN: S-51b = Bus+bici+VMP.", audio: "S-51b. Carril bus bici VMP.", panel_id: "S-15", ruta_panel: "S-51B_A_S-52C_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-52", categoria: "INDICACION", codi: "S-52", nombre_senal: "FIN CARRIL BUS", pregunta: "S-52 fi carril bus. Què passa?", opcions: ["S'acaba reserva bus, ja poden tots", "Comença bus", "Prohibit tots"], correcta: 0, tip: "💡 APREN: S-52 = Fi carril bus.", audio: "S-52. Fi carril bus.", panel_id: "S-15", ruta_panel: "S-51B_A_S-52C_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-52a", categoria: "INDICACION", codi: "S-52a", nombre_senal: "CARRIL VAO", pregunta: "S-52a VAO 2+. Quan pots usar-lo?", opcions: ["Si portes 2 o més ocupants", "Sempre", "Mai"], correcta: 0, tip: "💡 APREN: S-52a = VAO = Alta ocupació. Mínim 2 persones.", audio: "S-52a. Carril VAO.", panel_id: "S-15", ruta_panel: "S-51B_A_S-52C_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-52b", categoria: "INDICACION", codi: "S-52b", nombre_senal: "FIN CARRIL VAO", pregunta: "S-52b fi VAO. Què passa?", opcions: ["Fi reserva alta ocupació", "Comença", "Prohibit"], correcta: 0, tip: "💡 APREN: S-52b = Fi VAO.", audio: "S-52b. Fi VAO.", panel_id: "S-15", ruta_panel: "S-51B_A_S-52C_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-52c", categoria: "INDICACION", codi: "S-52c", nombre_senal: "CARRIL VAO BUS", pregunta: "S-52c VAO+BUS. Qui pot?", opcions: ["Bus i cotxes amb 2+ ocupants", "Només bus", "Tots"], correcta: 0, tip: "💡 APREN: S-52c = VAO+bus.", audio: "S-52c. Carril VAO bus.", panel_id: "S-15", ruta_panel: "S-51B_A_S-52C_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-16 - S-52D_A_S-53A_BIFURCACION.jpg
  { id: "S-52d", categoria: "INDICACION", codi: "S-52d", nombre_senal: "DESDOBLAMIENTO 1 EN 2", pregunta: "S-52d 1 carril es fa 2 mateix destí. Què fas?", opcions: ["Tries carril però mateixa direcció", "Tries destí diferent", "Surts"], correcta: 0, tip: "💡 CLAU EXAMEN: S-52d/e/f/g = DESDOBLAMENT = Mateix destí. S-53 = BIFURCACIÓ = Destins diferents.", audio: "S-52d. Desdoblament.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-52e", categoria: "INDICACION", codi: "S-52e", nombre_senal: "DESDOBLAMIENTO 2 EN 3", pregunta: "S-52e 2 carrils es fan 3. Què?", opcions: ["Desdoblament, mateixa direcció més carrils", "Bifurcació", "Sortida"], correcta: 0, tip: "💡 APREN: Desdoblament = Més carrils mateix destí.", audio: "S-52e. Desdoblament.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-52f", categoria: "INDICACION", codi: "S-52f", nombre_senal: "DESDOBLAMIENTO", pregunta: "S-52f desdoblament. Què fas?", opcions: ["Seguir mateix destí amb carril extra", "Canviar destí", "Sortir"], correcta: 0, tip: "💡 APREN: Desdoblament.", audio: "S-52f. Desdoblament.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-52g", categoria: "INDICACION", codi: "S-52g", nombre_senal: "DESDOBLAMIENTO", pregunta: "S-52g desdoblament. Què?", opcions: ["Mateix destí", "Destí diferent", "Sortida"], correcta: 0, tip: "💡 APREN: Desdoblament.", audio: "S-52g. Desdoblament.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-53", categoria: "INDICACION", codi: "S-53", nombre_senal: "BIFURCACION MISMA DIRECCION", pregunta: "S-53 bifurcació. Diferència amb S-52d?", opcions: ["Bifurcació 2 destins diferents, desdoblament mateix", "Igual", "Bifurcació és sortida"], correcta: 0, tip: "💡 TRAMPA CLAU: S-53 = Bifurcació = 2 direccions diferents. Tries abans.", audio: "S-53. Bifurcació.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-53a", categoria: "INDICACION", codi: "S-53a", nombre_senal: "BIFURCACION", pregunta: "S-53a bifurcació variant. Què?", opcions: ["Dos destins diferents", "Mateix destí", "Només sortida"], correcta: 0, tip: "💡 APREN: Bifurcació.", audio: "S-53a. Bifurcació.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-17 - S-53B_A_S-61A_SALIDA.jpg
  { id: "S-53b", categoria: "INDICACION", codi: "S-53b", nombre_senal: "BIFURCACION", pregunta: "S-53b bifurcació. Què fas?", opcions: ["Triar destí diferent amb antelació", "Seguir igual", "Aparcar"], correcta: 0, tip: "💡 APREN: Bifurcació = Tria destí.", audio: "S-53b. Bifurcació.", panel_id: "S-17", ruta_panel: "S-53B_A_S-61A_SALIDA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-53c", categoria: "INDICACION", codi: "S-53c", nombre_senal: "BIFURCACION", pregunta: "S-53c bifurcació. Què?", opcions: ["Destins diferents", "Mateix", "Sortida"], correcta: 0, tip: "💡 APREN: Bifurcació.", audio: "S-53c. Bifurcació.", panel_id: "S-17", ruta_panel: "S-53B_A_S-61A_SALIDA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-60a", categoria: "INDICACION", codi: "S-60a", nombre_senal: "BIFURCACION AUTOPISTA", pregunta: "S-60a bifurcació autopista. Què?", opcions: ["Autopista es divideix en 2 autopistes diferents", "Mateix", "Sortida simple"], correcta: 0, tip: "💡 APREN: S-60a = Bifurcació autopista.", audio: "S-60a. Bifurcació autopista.", panel_id: "S-17", ruta_panel: "S-53B_A_S-61A_SALIDA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-60b", categoria: "INDICACION", codi: "S-60b", nombre_senal: "BIFURCACION AUTOPISTA", pregunta: "S-60b bifurcació. Què?", opcions: ["2 autopistes diferents", "Mateixa", "Sortida"], correcta: 0, tip: "💡 APREN: S-60b = Bifurcació autopista.", audio: "S-60b. Bifurcació autopista.", panel_id: "S-17", ruta_panel: "S-53B_A_S-61A_SALIDA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-61a", categoria: "INDICACION", codi: "S-61a", nombre_senal: "SALIDA INMEDIATA", pregunta: "S-61a sortida immediata carril dret. Vas recte i estàs a carril dret, què fas?", opcions: ["Has de sortir, carril només sortida", "Pots seguir recte", "Frenar en sec"], correcta: 0, tip: "💡 TRAMPA MORTAL: S-61a = Carril només sortida. Si vols recte, canvia abans. No frenis.", audio: "S-61a. Sortida immediata.", panel_id: "S-17", ruta_panel: "S-53B_A_S-61A_SALIDA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-18 - S-61B_A_S-63A_SALIDA.jpg
  { id: "S-61b", categoria: "INDICACION", codi: "S-61b", nombre_senal: "SALIDA INMEDIATA 2 CARRILES", pregunta: "S-61b 2 carrils sortida. Què?", opcions: ["2 carrils surten", "1 només", "Cap"], correcta: 0, tip: "💡 APREN: S-61b = 2 carrils sortida.", audio: "S-61b. Sortida 2 carrils.", panel_id: "S-18", ruta_panel: "S-61B_A_S-63A_SALIDA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-61c", categoria: "INDICACION", codi: "S-61c", nombre_senal: "SALIDA SENTIDO CONTRARIO", pregunta: "S-61c fletxa en contra. Què vol dir?", opcions: ["Vas en sentit contrari, perill frontal, mitja volta", "Sortida normal", "Reversible"], correcta: 0, tip: "💡 TRAMPA MORTAL: S-61c = Vas al revés. 1 fletxa cap a tu.", audio: "S-61c. Sentit contrari.", panel_id: "S-18", ruta_panel: "S-61B_A_S-63A_SALIDA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-62a", categoria: "INDICACION", codi: "S-62a", nombre_senal: "SALIDA", pregunta: "S-62a sortida. Què?", opcions: ["Sortida propera", "Entrada", "Bifurcació"], correcta: 0, tip: "💡 APREN: S-62a = Sortida.", audio: "S-62a. Sortida.", panel_id: "S-18", ruta_panel: "S-61B_A_S-63A_SALIDA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-62b", categoria: "INDICACION", codi: "S-62b", nombre_senal: "SALIDA", pregunta: "S-62b sortida. Què?", opcions: ["Sortida", "Entrada", "Fi"], correcta: 0, tip: "💡 APREN: Sortida.", audio: "S-62b. Sortida.", panel_id: "S-18", ruta_panel: "S-61B_A_S-63A_SALIDA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-63a", categoria: "INDICACION", codi: "S-63a", nombre_senal: "SALIDA 300m", pregunta: "S-63a sortida a 300m. Què fas?", opcions: ["Preparar carril dret per sortir", "Sortir ara", "Frenar"], correcta: 0, tip: "💡 APREN: S-63a = Presortida 300m.", audio: "S-63a. Sortida 300m.", panel_id: "S-18", ruta_panel: "S-61B_A_S-63A_SALIDA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-19 - S-65A_A_S-70A_CARRILES.jpg
  { id: "S-65a", categoria: "INDICACION", codi: "S-65a", nombre_senal: "CARRIL REVERSIBLE", pregunta: "S-65a reversible amb llums. Pots usar-lo?", opcions: ["Només si fletxa verda, si creu vermella no", "Sempre", "Mai"], correcta: 0, tip: "💡 APREN: Reversible = Mira semàfor carril. Verd sí, vermell no.", audio: "S-65a. Reversible.", panel_id: "S-19", ruta_panel: "S-65A_A_S-70A_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-65b", categoria: "INDICACION", codi: "S-65b", nombre_senal: "CARRIL REVERSIBLE", pregunta: "S-65b reversible. Què?", opcions: ["Carril sentit canviant", "Bus", "Bici"], correcta: 0, tip: "💡 APREN: Reversible.", audio: "S-65b. Reversible.", panel_id: "S-19", ruta_panel: "S-65A_A_S-70A_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-66", categoria: "INDICACION", codi: "S-66", nombre_senal: "FIN CARRIL REVERSIBLE", pregunta: "S-66 fi reversible. Què passa?", opcions: ["S'acaba carril reversible", "Comença", "Prohibit"], correcta: 0, tip: "💡 APREN: Fi reversible.", audio: "S-66. Fi reversible.", panel_id: "S-19", ruta_panel: "S-65A_A_S-70A_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-68", categoria: "INDICACION", codi: "S-68", nombre_senal: "CARRIL ADICIONAL", pregunta: "S-68 carril addicional lent. Per a qui?", opcions: ["Vehicles lents, per deixar avançar", "Només bus", "Només bici"], correcta: 0, tip: "💡 APREN: S-68 = Addicional lents. Camions.", audio: "S-68. Carril addicional.", panel_id: "S-19", ruta_panel: "S-65A_A_S-70A_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-70a", categoria: "INDICACION", codi: "S-70a", nombre_senal: "CARRIL ADICIONAL FIN", pregunta: "S-70a fi addicional. Què?", opcions: ["S'acaba carril lents", "Comença", "Prohibit"], correcta: 0, tip: "💡 APREN: Fi addicional.", audio: "S-70a. Fi addicional.", panel_id: "S-19", ruta_panel: "S-65A_A_S-70A_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-20 - S-70B_A_S-72B_CONFLUENCIA.jpg
  { id: "S-70b", categoria: "INDICACION", codi: "S-70b", nombre_senal: "CONFLUENCIA DERECHA", pregunta: "S-70b confluència dreta. Què ve?", opcions: ["Vehicles s'incorporen per dreta", "Tu surts per dreta", "Gir dreta"], correcta: 0, tip: "💡 APREN: Confluència = Altres entren. Vigila retrovisor.", audio: "S-70b. Confluència dreta.", panel_id: "S-20", ruta_panel: "S-70B_A_S-72B_CONFLUENCIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-71a", categoria: "INDICACION", codi: "S-71a", nombre_senal: "CONFLUENCIA IZQUIERDA", pregunta: "S-71a confluència esquerra. Què?", opcions: ["Entren per esquerra", "Tu surts esquerra", "Gir esquerra"], correcta: 0, tip: "💡 APREN: Confluència esquerra.", audio: "S-71a. Confluència esquerra.", panel_id: "S-20", ruta_panel: "S-70B_A_S-72B_CONFLUENCIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-71b", categoria: "INDICACION", codi: "S-71b", nombre_senal: "CONFLUENCIA DERECHA 2", pregunta: "S-71b confluència dreta variant. Què?", opcions: ["Entren per dreta", "Surts", "Gir"], correcta: 0, tip: "💡 APREN: Confluència dreta.", audio: "S-71b. Confluència dreta.", panel_id: "S-20", ruta_panel: "S-70B_A_S-72B_CONFLUENCIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-72a", categoria: "INDICACION", codi: "S-72a", nombre_senal: "BIFURCACION CONFLUENCIA", pregunta: "S-72a bifurcació+confluència. Què?", opcions: ["Zona on se separa i s'uneix trànsit", "Només sortida", "Només entrada"], correcta: 0, tip: "💡 APREN: S-72a = Trenat.", audio: "S-72a. Bifurcació confluència.", panel_id: "S-20", ruta_panel: "S-70B_A_S-72B_CONFLUENCIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-72b", categoria: "INDICACION", codi: "S-72b", nombre_senal: "BIFURCACION CONFLUENCIA", pregunta: "S-72b trenat. Què?", opcions: ["Trenat de carrils", "Sortida", "Entrada"], correcta: 0, tip: "💡 APREN: Trenat.", audio: "S-72b. Trenat.", panel_id: "S-20", ruta_panel: "S-70B_A_S-72B_CONFLUENCIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-21 - S-73A_A_S-73B_CONFLUENCIA2.jpg
  { id: "S-73a", categoria: "INDICACION", codi: "S-73a", nombre_senal: "CONFLUENCIA", pregunta: "S-73a confluència. Què?", opcions: ["Confluència", "Bifurcació", "Sortida"], correcta: 0, tip: "💡 APREN: Confluència.", audio: "S-73a. Confluència.", panel_id: "S-21", ruta_panel: "S-73A_A_S-73B_CONFLUENCIA2.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-73b", categoria: "INDICACION", codi: "S-73b", nombre_senal: "CONFLUENCIA", pregunta: "S-73b confluència. Què?", opcions: ["Confluència", "Bifurcació", "Sortida"], correcta: 0, tip: "💡 APREN: Confluència.", audio: "S-73b. Confluència.", panel_id: "S-21", ruta_panel: "S-73A_A_S-73B_CONFLUENCIA2.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-22 - S-105C_A_S-108_SERVICIO.jpg
  { id: "S-105c", categoria: "SERVICIO", codi: "S-105c", nombre_senal: "GASOLINERA", pregunta: "S-105c gasolinera a 500m. Pots repostar?", opcions: ["Sí, a 500m", "No", "Només dièsel"], correcta: 0, tip: "💡 APREN: S-105 = Serveis a X metres.", audio: "S-105c. Gasolinera 500m.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-105d", categoria: "SERVICIO", codi: "S-105d", nombre_senal: "RESTAURANTE", pregunta: "S-105d restaurant. Què hi ha?", opcions: ["Restaurant a X m", "Hotel", "Taller"], correcta: 0, tip: "💡 APREN: Restaurant.", audio: "S-105d. Restaurant.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-105e", categoria: "SERVICIO", codi: "S-105e", nombre_senal: "HOTEL", pregunta: "S-105e hotel. Què?", opcions: ["Hotel", "Càmping", "Gasolinera"], correcta: 0, tip: "💡 APREN: Hotel.", audio: "S-105e. Hotel.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-105f", categoria: "SERVICIO", codi: "S-105f", nombre_senal: "CAMPING", pregunta: "S-105f càmping. Què?", opcions: ["Càmping", "Hotel", "Parking"], correcta: 0, tip: "💡 APREN: Càmping.", audio: "S-105f. Càmping.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-106", categoria: "SERVICIO", codi: "S-106", nombre_senal: "AREA DESCANSO", pregunta: "S-106 àrea descans. Pots parar?", opcions: ["Sí, per descansar", "No", "Només camions"], correcta: 0, tip: "💡 APREN: Àrea descans.", audio: "S-106. Àrea descans.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-107", categoria: "SERVICIO", codi: "S-107", nombre_senal: "AREA SERVICIO", pregunta: "S-107 àrea servei. Què hi ha?", opcions: ["Gasolinera+bar+WC tot", "Només gasolinera", "Només WC"], correcta: 0, tip: "💡 APREN: Àrea servei completa.", audio: "S-107. Àrea servei.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-108", categoria: "SERVICIO", codi: "S-108", nombre_senal: "PUESTO SOCORRO", pregunta: "S-108 socors. Què?", opcions: ["Lloc socors", "Hospital", "Taller"], correcta: 0, tip: "💡 APREN: Socors.", audio: "S-108. Lloc socors.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-23 - S-200_A_S-203_PRESENAL.jpg
  { id: "S-200", categoria: "INDICACION", codi: "S-200", nombre_senal: "PRESEÑALIZACION GLORIETA", pregunta: "S-200 preseñal glorieta. Quan la veus?", opcions: ["Abans glorieta per triar carril i sortida", "Dins glorieta", "Després"], correcta: 0, tip: "💡 TRAMPA: S-200 = Abans. R-402 = Dins. Preselecciona carril ara.", audio: "S-200. Preseñal glorieta.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESENAL.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-201", categoria: "INDICACION", codi: "S-201", nombre_senal: "PRESEÑALIZACION 2 SALIDAS", pregunta: "S-201 preseñal 2 sortides. Què?", opcions: ["Indica 2 sortides properes glorieta", "1 només", "Cap"], correcta: 0, tip: "💡 APREN: Preseñal 2 sortides.", audio: "S-201. Preseñal 2 sortides.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESENAL.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-202", categoria: "INDICACION", codi: "S-202", nombre_senal: "PRESEÑALIZACION", pregunta: "S-202 preseñal. Què?", opcions: ["Preseñal direccions glorieta", "Obligatori", "Prohibit"], correcta: 0, tip: "💡 APREN: Preseñal.", audio: "S-202. Preseñal.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESENAL.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-203", categoria: "INDICACION", codi: "S-203", nombre_senal: "PRESEÑALIZACION", pregunta: "S-203 preseñal. Què?", opcions: ["Preseñal", "Obligatori", "Prohibit"], correcta: 0, tip: "💡 APREN: Preseñal.", audio: "S-203. Preseñal.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESENAL.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-24 - S-220_A_S-222_PRESENAL2.jpg
  { id: "S-220", categoria: "INDICACION", codi: "S-220", nombre_senal: "PRESEÑALIZACION DIRECCION", pregunta: "S-220 preseñal direcció amb fletxes. Què fas?", opcions: ["Triar carril segons destí abans cruïlla", "Girar ara", "Parar"], correcta: 0, tip: "💡 APREN: S-220 = Preseñal direcció.", audio: "S-220. Preseñal direcció.", panel_id: "S-24", ruta_panel: "S-220_A_S-222_PRESENAL2.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-220a", categoria: "INDICACION", codi: "S-220a", nombre_senal: "PRESEÑALIZACION", pregunta: "S-220a preseñal. Què?", opcions: ["Preseñal", "Obligatori", "Prohibit"], correcta: 0, tip: "💡 APREN: Preseñal.", audio: "S-220a. Preseñal.", panel_id: "S-24", ruta_panel: "S-220_A_S-222_PRESENAL2.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-222", categoria: "INDICACION", codi: "S-222", nombre_senal: "PRESEÑALIZACION AUTOPISTA", pregunta: "S-222 preseñal autopista. Què?", opcions: ["Indica direccions autopista propera", "Fi autopista", "Inici"], correcta: 0, tip: "💡 APREN: Preseñal autopista.", audio: "S-222. Preseñal autopista.", panel_id: "S-24", ruta_panel: "S-220_A_S-222_PRESENAL2.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-25 - S-222A_A_S-230_PRESENAL3.jpg
  { id: "S-222a", categoria: "INDICACION", codi: "S-222a", nombre_senal: "PRESEÑALIZACION", pregunta: "S-222a preseñal. Què?", opcions: ["Preseñal", "Obligatori", "Prohibit"], correcta: 0, tip: "💡 APREN: Preseñal.", audio: "S-222a. Preseñal.", panel_id: "S-25", ruta_panel: "S-222A_A_S-230_PRESENAL3.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-225", categoria: "INDICACION", codi: "S-225", nombre_senal: "PRESEÑALIZACION", pregunta: "S-225 preseñal. Què?", opcions: ["Preseñal", "Obligatori", "Prohibit"], correcta: 0, tip: "💡 APREN: Preseñal.", audio: "S-225. Preseñal.", panel_id: "S-25", ruta_panel: "S-222A_A_S-230_PRESENAL3.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-230", categoria: "INDICACION", codi: "S-230", nombre_senal: "PRESEÑALIZACION ITINERARIO", pregunta: "S-230 itinerari. Què indica?", opcions: ["Itinerari amb destins i distància", "Fi", "Prohibit"], correcta: 0, tip: "💡 APREN: S-230 = Itinerari.", audio: "S-230. Preseñal itinerari.", panel_id: "S-25", ruta_panel: "S-222A_A_S-230_PRESENAL3.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

  // S-26 - S-321_A_S-342_DIRECCION.jpg
  { id: "S-321", categoria: "INDICACION", codi: "S-321", nombre_senal: "DIRECCION AUTOPISTA", pregunta: "S-321 direcció autopista blava. Cap on vas si la segueixes?", opcions: ["Cap a autopista/autovia", "Carretera", "Poble"], correcta: 0, tip: "💡 TRAMPA CLAU: S-321/322 fons BLAU = Autopista. FONS BLANC S-341 = Carretera. Molt examen.", audio: "S-321. Direcció autopista.", panel_id: "S-26", ruta_panel: "S-321_A_S-342_DIRECCION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-322", categoria: "INDICACION", codi: "S-322", nombre_senal: "DIRECCION CARRETERA", pregunta: "S-322 direcció blanca. Cap on?", opcions: ["Carretera convencional", "Autopista", "Autovia"], correcta: 0, tip: "💡 APREN: Blanc = Carretera.", audio: "S-322. Direcció carretera.", panel_id: "S-26", ruta_panel: "S-321_A_S-342_DIRECCION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-341", categoria: "INDICACION", codi: "S-341", nombre_senal: "SALIDA CARRETERA BLANCA", pregunta: "S-341 sortida fons blanc. Cap a on surts?", opcions: ["Carretera convencional", "Autopista", "Autovia"], correcta: 0, tip: "💡 TRAMPA EXAMEN: S-341 BLANC = Carretera. S-342 BLAU = Autopista.", audio: "S-341. Sortida carretera.", panel_id: "S-26", ruta_panel: "S-321_A_S-342_DIRECCION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-342", categoria: "INDICACION", codi: "S-342", nombre_senal: "SALIDA AUTOPISTA AZUL", pregunta: "S-342 sortida fons blau. Cap a on?", opcions: ["Autopista/autovia", "Carretera", "Camí"], correcta: 0, tip: "💡 TRAMPA: Blau = Autopista.", audio: "S-342. Sortida autopista.", panel_id: "S-26", ruta_panel: "S-321_A_S-342_DIRECCION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },

// ===== 22 TRAMPES BLOQUE 3 INDICACION V2 PRO - RUTES CORREGIDES BANCO V2 ===== 
  { id: "S-1-TRAMPA-1", categoria: "TRAMPA", codi: "S-1", nombre_senal: "AUTOPISTA - TRAMPA PROHIBICIONES", pregunta: "Veus S-1 blava pont autopista. Quin vehicle NO pot entrar?", opcions: ["Ciclomotor 49cc, bici, vianant i vehicle <60km/h", "Turisme 120", "Bus i camió"], correcta: 0, tip: "💡 TRAMPA CLAU EXAMEN: S-1 AUTOPISTA = Prohibit <60 i sense motor. S-1a AUTOVIA SÍ deixa ciclomotor i tractor. Truc: S-1 = 1 pont.", audio: "Trampa S-1 autopista prohibit ciclomotor.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-1a-TRAMPA-2", categoria: "TRAMPA", codi: "S-1a", nombre_senal: "AUTOVIA VS AUTOPISTA", pregunta: "Diferència visual S-1 autopista vs S-1a autovia?", opcions: ["S-1 1 pont, S-1a 2 calçades separades amb mitjana", "No hi ha diferència", "S-1a és més ràpida"], correcta: 0, tip: "💡 TRAMPA: S-1 = 1 calçada. S-1a = 2 calçades dibuixades. Mateix límit 120 però accés diferent.", audio: "Trampa diferència S-1 i S-1a.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-2-TRAMPA-3", categoria: "TRAMPA", codi: "S-2", nombre_senal: "FIN AUTOPISTA VELOCIDAD", pregunta: "Veus S-2 barra vermella sobre S-1. A quant pots anar ara en turisme?", opcions: ["Torna genèric 90 carretera, no 120", "Segueix 120", "50 sempre"], correcta: 0, tip: "💡 TRAMPA: Fi autopista = Ja no 120. Baixa a 90/100 segons via.", audio: "Trampa fi autopista velocitat.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-6-TRAMPA-4", categoria: "TRAMPA", codi: "S-6", nombre_senal: "CARRIL REVERSIBLE VS ADICIONAL", pregunta: "Veus fletxes vermella+blanca S-6. Quin carril és?", opcions: ["Reversible canvia sentit per hores, mira semàfor carril", "Addicional lents", "Bus"], correcta: 0, tip: "💡 TRAMPA DGT: Vermell+Blanc = REVERSIBLE S-6. Groc+Blanc = ADDICIONAL S-68 lents. Blau = BUS.", audio: "Trampa carril reversible.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-13-TRAMPA-5", categoria: "TRAMPA", codi: "S-13", nombre_senal: "PASO PEATONES OBLIGACION", pregunta: "S-13 blau pas vianants. Veus vianant esperant. Què fas?", opcions: ["Paro i cedeixo, té prioritat obligatòria", "Acelero i passo", "Pito perquè corre"], correcta: 0, tip: "💡 TRAMPA MORTAL: S-13 no només informa, OBLIGA a cedir. 200€ i 4 punts si no pares.", audio: "Trampa pas vianants obligació.", panel_id: "S-04", ruta_panel: "S-11A_A_S-14A_SENTIDO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-28-TRAMPA-6", categoria: "TRAMPA", codi: "S-28", nombre_senal: "ZONA RESIDENCIAL 20", pregunta: "Veus S-28 zona residencial amb nen. Velocitat màxima?", opcions: ["20 km/h i vianants poden usar tota calçada", "10 km/h", "30 km/h"], correcta: 0, tip: "💡 TRAMPA CLAU: S-28 = 20km/h. S-47 = 20 també però Zona 20. S-30a = 30. S-28 vianants juguen a calçada.", audio: "Trampa zona residencial 20.", panel_id: "S-09", ruta_panel: "S-26C_A_S-30A_ZONAS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-30-TRAMPA-7", categoria: "TRAMPA", codi: "S-30", nombre_senal: "ZONA RESIDENCIAL VS PEATONAL", pregunta: "Diferència S-28 residencial vs S-32 peatonal?", opcions: ["S-28 cotxes a 20 amb vianants, S-32 només vianants prohibit cotxe excepte autoritzats", "Són iguals", "S-32 és 30"], correcta: 0, tip: "💡 TRAMPA: S-28 = Cotxe+via 20. S-32 = Només vianants. Molt preguntat.", audio: "Trampa residencial vs peatonal.", panel_id: "S-10", ruta_panel: "S-31A_A_S-34A_ZONA_SOS.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-36-TRAMPA-8", categoria: "TRAMPA", codi: "S-36", nombre_senal: "VIA CICLOS VS CICLOMOTOR", pregunta: "S-36 bici. Pot entrar ciclomotor 49cc?", opcions: ["No, S-36 només cicles sense motor", "Sí, tots", "Sí, si va a 25"], correcta: 0, tip: "💡 TRAMPA: S-36 = Només bici. S-35 = Ciclomotor. S-37 = VMP. No barrejar.", audio: "Trampa via cicles.", panel_id: "S-11", ruta_panel: "S-35_A_S-40_BICI_PATINETE.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-40-TRAMPA-9", categoria: "TRAMPA", codi: "S-40", nombre_senal: "FIN VIA BICI Y VMP", pregunta: "S-40 ratllat bici+patinet. Què vol dir?", opcions: ["Fi via reservada bici i VMP, tornes a calçada", "Prohibit bici ara", "Obligatori bici"], correcta: 0, tip: "💡 APREN: S-40 = Fi S-36 i S-38. No és prohibició nova, és fi.", audio: "Trampa fi via bici VMP.", panel_id: "S-11", ruta_panel: "S-35_A_S-40_BICI_PATINETE.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-41-TRAMPA-10", categoria: "TRAMPA", codi: "S-41", nombre_senal: "VIA SEPARADA VS CONJUNTA", pregunta: "S-41 amb línia vertical separa vianant i bici. Com circules a peu?", opcions: ["Per costat vianant, no per bici", "Per on vulguis", "Per bici"], correcta: 0, tip: "💡 TRAMPA: S-41 = Línia separa = Cadascú per la seva. S-42 = Junts sense línia compartida.", audio: "Trampa via separada.", panel_id: "S-12", ruta_panel: "S-41_A_S-44_CICLO_PEATON.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-47-TRAMPA-11", categoria: "TRAMPA", codi: "S-47", nombre_senal: "ZONA 20 VS 30", pregunta: "S-47 zona 20. És recomanat o màxim?", opcions: ["Màxim 20 obligatori", "Recomanat 20", "Mínim 20"], correcta: 0, tip: "💡 TRAMPA: Zona 20 = Màxim 20. No recomanat. Igual Zona 30 = Màxim 30.", audio: "Trampa zona 20 màxim.", panel_id: "S-13", ruta_panel: "S-45_A_S-49_PASOS_ZONA20.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-51-TRAMPA-12", categoria: "TRAMPA", codi: "S-51", nombre_senal: "CARRIL BUS USO COCHE", pregunta: "S-51a carril BUS+BICI. Pots entrar amb cotxe per girar a la dreta?", opcions: ["Només si línia discontínua i gir immediat propera cruïlla", "Sí sempre", "No mai ni per girar"], correcta: 0, tip: "💡 TRAMPA CLAU: Carril BUS pots trepitjar només per girar a la cruïlla si discontínua. Si contínua, no.", audio: "Trampa carril bus gir.", panel_id: "S-14", ruta_panel: "S-50D_A_S-51A_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-52-TRAMPA-13", categoria: "TRAMPA", codi: "S-52d", nombre_senal: "DESDOBLAMIENTO VS BIFURCACION", pregunta: "Diferència S-52d desdoblament vs S-53 bifurcació?", opcions: ["Desdoblament mateix destí més carrils, bifurcació 2 destins diferents", "Són iguals", "Desdoblament és sortida"], correcta: 0, tip: "💡 TRAMPA CLAU EXAMEN: S-52 = 1 destí es fa 2 carrils. S-53 = 2 destins diferents. Tria abans.", audio: "Trampa desdoblament vs bifurcació.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-61-TRAMPA-14", categoria: "TRAMPA", codi: "S-61a", nombre_senal: "CARRIL SOLO SALIDA", pregunta: "Vas per S-61a carril només sortida però tu vols recte. Què fas?", opcions: ["Has de sortir obligatòriament, no pots seguir recte", "Frenar i canviar brusc", "Seguir recte igual"], correcta: 0, tip: "💡 TRAMPA MORTAL: Si estàs a carril S-61a només sortida, surts. No frenis ni canviïs brusc, accident.", audio: "Trampa carril només sortida.", panel_id: "S-17", ruta_panel: "S-53B_A_S-61A_SALIDA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-61c-TRAMPA-15", categoria: "TRAMPA", codi: "S-61c", nombre_senal: "SENTIDO CONTRARIO GRAVISIMO", pregunta: "Veus S-61c amb fletxa negra cap a tu. Què vol dir?", opcions: ["Vas en sentit contrari, perill frontal gravíssim, mitja volta", "Carril reversible", "Sortida"], correcta: 0, tip: "💡 TRAMPA MORTAL: S-61c = 1 fletxa sola cap a tu = CONTRARI. No és reversible.", audio: "Trampa sentit contrari.", panel_id: "S-18", ruta_panel: "S-61B_A_S-63A_SALIDA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-66-TRAMPA-16", categoria: "TRAMPA", codi: "S-66", nombre_senal: "FIN REVERSIBLE", pregunta: "S-66 creu vermella sobre carril reversible. Què?", opcions: ["Fi de carril reversible S-65a", "Prohibit circular", "Tancat obres"], correcta: 0, tip: "💡 APREN: Creu vermella sobre fletxes = Fi regulació reversible.", audio: "Trampa fi reversible.", panel_id: "S-19", ruta_panel: "S-65A_A_S-70A_CARRILES.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-71-TRAMPA-17", categoria: "TRAMPA", codi: "S-71a", nombre_senal: "CONFLUENCIA NO ES GIRO", pregunta: "S-71a confluència esquerra. Has de girar tu?", opcions: ["No, són altres que s'incorporen, tu segueixes vigilant", "Sí, girar esquerra", "Sí, canviar carril"], correcta: 0, tip: "💡 APREN: Confluència = Altres entren. No és ordre teva de gir.", audio: "Trampa confluència.", panel_id: "S-20", ruta_panel: "S-70B_A_S-72B_CONFLUENCIA.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-200-TRAMPA-18", categoria: "TRAMPA", codi: "S-200", nombre_senal: "PRESEÑAL VS GLORIETA REAL", pregunta: "Diferència S-200 preseñal glorieta vs R-402 glorieta?", opcions: ["S-200 abans per triar carril, R-402 ja ets a la glorieta obligatòria", "Són iguals", "S-200 és stop"], correcta: 0, tip: "💡 TRAMPA: S-200 = Abans 200m. R-402 = Aquí glorieta. Preselecciona abans.", audio: "Trampa preseñal vs glorieta.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESENAL.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-220-TRAMPA-19", categoria: "TRAMPA", codi: "S-220", nombre_senal: "PRESEÑAL 500M NO ES SORTIDA", pregunta: "Veus S-220 Haro 500m. Ja és la sortida?", opcions: ["No, avisa que a 500m hi ha sortida cap a Haro", "Sí, ja has de sortir", "Prohibit Haro"], correcta: 0, tip: "💡 APREN: Preseñal amb metres = Anticipa, no és aquí encara.", audio: "Trampa preseñal 500m.", panel_id: "S-24", ruta_panel: "S-220_A_S-222_PRESENAL2.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-341-TRAMPA-20", categoria: "TRAMPA", codi: "S-341", nombre_senal: "COLOR FONDO BLANCO VS AZUL", pregunta: "S-341 fons blanc sortida 22. Cap on vas?", opcions: ["Carretera convencional", "Autopista/autovia", "Camí"], correcta: 0, tip: "💡 TRAMPA CLAU DGT: FONS BLANC = Carretera convencional. FONS BLAU = Autopista. S-341 blanc, S-342 blau. Surt sempre.", audio: "Trampa fons blanc carretera.", panel_id: "S-26", ruta_panel: "S-321_A_S-342_DIRECCION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-342-TRAMPA-21", categoria: "TRAMPA", codi: "S-342", nombre_senal: "SALIDA AUTOPISTA AZUL", pregunta: "S-342 fons blau sortida 22. Cap on?", opcions: ["Autopista o autovia", "Carretera", "Poble"], correcta: 0, tip: "💡 TRAMPA: Blau = Autopista. Blanc = Carretera. Groc = Obres/desviament.", audio: "Trampa fons blau autopista.", panel_id: "S-26", ruta_panel: "S-321_A_S-342_DIRECCION.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } },
  { id: "S-105-TRAMPA-22", categoria: "TRAMPA", codi: "S-105c", nombre_senal: "SERVICIOS S-100 FAMILIA", pregunta: "Veus S-105c WC, S-105d gasolinera, S-105e hotel. Quina família són?", opcions: ["S-100 a S-199 serveis blau amb pictograma blanc", "Indicació general", "Preseñalització"], correcta: 0, tip: "💡 APREN: S-100 família = SERVEIS. Blau amb dibuix blanc. S-200 = Preseñal. S-300 = Direcció.", audio: "Trampa família serveis S-100.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1:0,y1:0,x2:0,y2:0 } }
],

normes: [
    // --- TEU BLOC ORIGINAL 73 amb COMBOS ---
    {id:168,q:"Taxa d'alcohol novells:",a:["0.5 g/l","0.3 g/l","0.0 g/l"],ok:2, emoji:"🍺🪪", forma:"circulo-rojo", tip:"Novell = 0.3 sang / 0.15 aire 2 anys", audio:"Alcohol novell 0.3"},
    {id:169,q:"Cinturó obligatori:",a:["Només davant","Només conductor","Tots"],ok:2, emoji:"🔒👨‍👩‍👧‍👦", forma:"cuadrado-azul", tip:"Tots els seients 3 punts +200€", audio:"Cinturó tots"},
    {id:170,q:"Edat mínima carnet B:",a:["16 anys","17 anys","18 anys"],ok:2, emoji:"🪪1️⃣8️⃣", forma:"cuadrado-azul", tip:"B=18, AM=15, A1=16", audio:"Carnet B 18 anys"},
    {id:171,q:"Límit autovia turismes:",a:["100 km/h","120 km/h","130 km/h"],ok:1, emoji:"💨🛣️🚗", forma:"cuadrado-azul", tip:"Autovia 120 turisme", audio:"Autovia 120"},
    {id:172,q:"Límit ciutat genèric:",a:["30 km/h","50 km/h","40 km/h"],ok:1, emoji:"🏙️5️⃣0️⃣", forma:"circulo-rojo", tip:"50 genèric 2 carrils, 30 si 1 carril", audio:"Ciutat 50"},
    {id:173,q:"Punts carnet nou:",a:["8 punts","12 punts","15 punts"],ok:1, emoji:"⭐🪪8️⃣", forma:"cuadrado-azul", tip:"Novell 8, als 2 anys 12, màxim 15", audio:"Punts 8 novell"},
    {id:174,q:"Pèrdua total punts:",a:["Suspensió 3 mesos","Suspensió 6 mesos","Retirada carnet"],ok:0, emoji:"🚫⭐0️⃣", forma:"circulo-rojo", tip:"0 punts = 6 mesos + curs 24h", audio:"Pèrdua 6 mesos"},
    {id:175,q:"Recuperar punts:",a:["Curs 12h","Curs 24h","Automàtic en 2 anys"],ok:1, emoji:"🔄📚2️⃣4️⃣", forma:"cuadrado-azul", tip:"24h total, 12h parcial 6 punts", audio:"Recuperar 24 hores"},
    {id:176,q:"Documentació obligatòria:",a:["Només DNI","Permís + ITV + Assegurança","Només permís"],ok:1, emoji:"📄🪪🔧", forma:"cuadrado-azul", tip:"Permís, ITV, assegurança", audio:"Documentació 3 papers"},
    {id:177,q:"ITV turisme nou:",a:["Als 2 anys","Als 4 anys","Als 6 anys"],ok:1, emoji:"🔧4️⃣📅", forma:"cuadrado-azul", tip:"4 anys exempt, després cada 2 fins 10, anual", audio:"ITV als 4 anys"},
    {id:178,q:"Assegurança obligatòria:",a:["Només RC","RC + robatori","Tot risc"],ok:0, emoji:"🛡️📄", forma:"cuadrado-azul", tip:"Només RC obligatòria", audio:"Assegurança RC"},
    {id:179,q:"Multa mòbil:",a:["3 punts + 200€","6 punts + 200€","Només 100€"],ok:1, emoji:"📱🚫6️⃣", forma:"circulo-rojo", tip:"Mòbil mà = 6 punts", audio:"Mòbil 6 punts"},
    {id:180,q:"Multa cinturó:",a:["3 punts + 200€","Només 100€","Avís"],ok:0, emoji:"🔒🚫3️⃣", forma:"circulo-rojo", tip:"Sense cinturó 3 punts", audio:"Cinturó 3 punts"},
    {id:181,q:"Alcohol >0.6 g/l:",a:["Multa","Delicte penal","Només avís"],ok:1, emoji:"🍺👮🚔", forma:"circulo-rojo", tip:"+0.60 aire = presó 3-6 mesos", audio:"Alcohol penal"},
    {id:182,q:"Negar-se a alcohol:",a:["Multa","Delicte penal","Només avís"],ok:1, emoji:"🍺🚫👮", forma:"circulo-rojo", tip:"Negar-se = delicte", audio:"Negar-se delicte"},
    {id:183,q:"Velocitat +20km/h en ciutat:",a:["Multa lleu","Multa greu + 2 punts","Només avís"],ok:1, emoji:"🏙️💨2️⃣", forma:"circulo-rojo", tip:"+20 ciutat = greu 2 punts", audio:"20 ciutat 2 punts"},
    {id:184,q:"Velocitat +60km/h autopista:",a:["Multa lleu","Delicte penal","Només avís"],ok:1, emoji:"🛣️💨🚨", forma:"circulo-rojo", tip:"+60 interurbana = penal", audio:"60 autopista penal"},
    {id:185,q:"Conduir sense carnet:",a:["Multa","Delicte penal","Només avís"],ok:1, emoji:"🪪🚫🚔", forma:"circulo-rojo", tip:"Mai has tingut = penal", audio:"Sense carnet penal"},
    {id:186,q:"Fugir accident:",a:["Multa","Delicte penal","Només avís"],ok:1, emoji:"💥🏃🚔", forma:"circulo-rojo", tip:"Fugir amb ferits = omissió socors", audio:"Fugir delicte"},
    {id:187,q:"Vianant té preferència:",a:["Mai","Sempre a pas zebra","Només amb semàfor"],ok:1, emoji:"🚶🦓✅", forma:"cuadrado-azul", tip:"Zebra = absoluta", audio:"Vianant zebra"},
    {id:188,q:"Ciclista té preferència:",a:["Mai","En carril bici","Sempre"],ok:1, emoji:"🚴🛣️✅", forma:"cuadrado-azul", tip:"Carril bici + pas ciclista", audio:"Ciclista carril"},
    {id:189,q:"Moto té preferència:",a:["Mai","En rotonda","Sempre"],ok:1, emoji:"🏍️🔄", forma:"triangulo-amarillo", tip:"Dins rotonda mana", audio:"Moto rotonda"},
    {id:190,q:"Bus té preferència:",a:["Mai","Sortint de parada","Sempre"],ok:1, emoji:"🚌↗️✅", forma:"cuadrado-azul", tip:"Sortint parada poblat = cedir", audio:"Bus parada"},
    {id:191,q:"Taxi té preferència:",a:["Mai","En carril bus","Sempre"],ok:1, emoji:"🚕🚌🛣️", forma:"cuadrado-azul", tip:"Pot usar carril bus-taxi", audio:"Taxi bus"},
    {id:192,q:"Ambulància té preferència:",a:["Mai","Amb llums i so","Sempre"],ok:1, emoji:"🚑💡🔊", forma:"cuadrado-azul", tip:"Llums+so = aparta't", audio:"Ambulància llums so"},
    {id:193,q:"Policía té preferència:",a:["Mai","En servei","Sempre"],ok:1, emoji:"🚓💡🔊", forma:"cuadrado-azul", tip:"En servei urgent", audio:"Policia servei"},
    {id:194,q:"Bombers té preferència:",a:["Mai","En servei","Sempre"],ok:1, emoji:"🚒💡🔊", forma:"cuadrado-azul", tip:"Emergència", audio:"Bombers"},
    {id:195,q:"Protecció Civil té preferència:",a:["Mai","En servei","Sempre"],ok:1, emoji:"👷💡", forma:"cuadrado-azul", tip:"En servei urgent", audio:"Protecció Civil"},
    {id:196,q:"Prioritat dreta:",a:["Mai","En cruïlla sense senyals","Sempre"],ok:1, emoji:"➡️🤚✅", forma:"triangulo-amarillo", tip:"Sense senyals = dreta mana", audio:"Prioritat dreta"},
    {id:197,q:"Prioritat esquerra:",a:["Mai","En rotonda","Sempre"],ok:1, emoji:"🔄⬅️❌", forma:"cuadrado-azul", tip:"Rotonda cedeix a qui és dins", audio:"Rotonda dins mana"},
    {id:198,q:"Prioritat endavant:",a:["Mai","En gir","Sempre"],ok:1, emoji:"⬆️↩️🤚", forma:"cuadrado-azul", tip:"Gir esquerra cedeix als de front", audio:"Gir cedeix front"},
    {id:199,q:"Prioritat enrere:",a:["Mai","En marxa enrere","Sempre"],ok:0, emoji:"⬇️🚫", forma:"circulo-rojo", tip:"Marxa enrere mai té prioritat", audio:"Enrere no"},
    {id:200,q:"Prioritat pujada:",a:["Mai","En costa estreta","Sempre"],ok:1, emoji:"⛰️⬆️✅", forma:"triangulo-amarillo", tip:"Pujada tram estret té preferència", audio:"Pujada sí"},
    {id:201,q:"Prioritat baixada:",a:["Mai","En costa estreta","Sempre"],ok:0, emoji:"⛰️⬇️❌", forma:"triangulo-amarillo", tip:"Baixada ha de fer marxa enrere", audio:"Baixada cedeix"},
    {id:202,q:"Prioritat tramvia:",a:["Mai","Sempre","Només de nit"],ok:1, emoji:"🚊✅", forma:"cuadrado-azul", tip:"Raïls = sempre", audio:"Tramvia sempre"},
    {id:203,q:"Prioritat tren:",a:["Mai","Sempre a pas nivell","Només de dia"],ok:1, emoji:"🚂🚧", forma:"triangulo-amarillo", tip:"Pas nivell = tren sempre", audio:"Tren sempre"},
    {id:204,q:"Prioritat bus escolar:",a:["Mai","Quan para","Sempre"],ok:1, emoji:"🚌👶⚠️", forma:"triangulo-amarillo", tip:"Precaució extrema quan para", audio:"Bus escolar precaució"},
    {id:205,q:"Prioritat cotxe oficial:",a:["Mai","Amb llums","Sempre"],ok:1, emoji:"🚗💡", forma:"cuadrado-azul", tip:"Amb llums prioritari", audio:"Oficial llums"},
    {id:206,q:"Prioritat moto policia:",a:["Mai","En servei","Sempre"],ok:1, emoji:"🏍️👮💡", forma:"cuadrado-azul", tip:"En servei urgent", audio:"Moto policia"},
    {id:207,q:"Prioritat bicicleta:",a:["Mai","En carril bici","Sempre"],ok:1, emoji:"🚲🛣️✅", forma:"cuadrado-azul", tip:"Carril bici", audio:"Bici carril"},
    {id:208,q:"Prioritat patinet:",a:["Mai","En carril bici","Sempre"],ok:1, emoji:"🛴🚲2️⃣5️⃣", forma:"cuadrado-azul", tip:"Patinet = 25 km/h màx", audio:"Patinet 25"},
    {id:209,q:"Prioritat vianant invàlid:",a:["Mai","Sempre","Només amb bastó"],ok:1, emoji:"🦯👁️✅", forma:"triangulo-amarillo", tip:"Invident = sempre", audio:"Invàlid sempre"},
    {id:210,q:"Prioritat nen:",a:["Mai","Sempre","Només a col·legi"],ok:1, emoji:"👶🏫⚠️", forma:"triangulo-amarillo", tip:"Nens = precaució màxima", audio:"Nen precaució"},
    {id:211,q:"Prioritat gent gran:",a:["Mai","Sempre","Només amb bastó"],ok:1, emoji:"👴🦯⚠️", forma:"triangulo-amarillo", tip:"Gent gran = precaució", audio:"Gent gran"},
    {id:212,q:"Prioritat dona embarassada:",a:["Mai","Sempre","Només amb cinturó"],ok:1, emoji:"🤰🚶✅", forma:"cuadrado-azul", tip:"Com a vianant amb preferència", audio:"Embarassada vianant"},
    {id:213,q:"Prioritat conductor novell:",a:["Mai","Sempre","Només amb L"],ok:0, emoji:"🅻❌", forma:"circulo-rojo", tip:"L no dona prioritat", audio:"Novell no"},
    {id:214,q:"Prioritat conductor professional:",a:["Mai","Sempre","Només amb taxi"],ok:0, emoji:"👨‍✈️❌", forma:"circulo-rojo", tip:"No dona prioritat", audio:"Professional no"},
    {id:215,q:"Prioritat conductor estranger:",a:["Mai","Sempre","Només amb passaport"],ok:0, emoji:"🌍❌", forma:"circulo-rojo", tip:"No", audio:"Estranger no"},
    {id:216,q:"Prioritat conductor local:",a:["Mai","Sempre","Només amb DNI"],ok:0, emoji:"🏠❌", forma:"circulo-rojo", tip:"No", audio:"Local no"},
    {id:217,q:"Prioritat conductor turista:",a:["Mai","Sempre","Només amb mapa"],ok:0, emoji:"🗺️❌", forma:"circulo-rojo", tip:"No", audio:"Turista no"},
    {id:218,q:"Quants punts es perden per no dur casco moto?",a:["2 punts","3 punts","4 punts"],ok:1, emoji:"⛑️🏍️4️⃣", forma:"circulo-rojo", tip:"Casco = 4 punts +200€", audio:"Casco 4 punts"},
    {id:219,q:"Quina és la caducitat del permís B fins als 65 anys?",a:["5 anys","10 anys","15 anys"],ok:1, emoji:"📅1️⃣0️⃣🪪", forma:"cuadrado-azul", tip:"Fins 65 = 10 anys", audio:"B 10 anys"},
    {id:220,q:"Multa per circular sense ITV en vigor?",a:["100€","200€ + immobilització","Només avís"],ok:1, emoji:"🔧🚫200€", forma:"circulo-rojo", tip:"200€ + immobilitzar", audio:"ITV 200"},
    {id:221,q:"Quants punts per saltar-se un STOP?",a:["2 punts","3 punts","4 punts"],ok:2, emoji:"🛑🚫4️⃣", forma:"circulo-rojo", tip:"STOP i Ceda = 4 punts", audio:"Stop 4 punts"},
    {id:222,q:"Quina és la taxa alcohol professional?",a:["0,5 g/l","0,3 g/l","0,15 g/l"],ok:1, emoji:"🚛🍺0️⃣3️⃣", forma:"circulo-rojo", tip:"Professional 0.3 / 0.15", audio:"Professional 0.3"},
    {id:223,q:"Quants punts per avançar en línia contínua?",a:["3 punts","4 punts","6 punts"],ok:1, emoji:"〰️🚫4️⃣", forma:"circulo-rojo", tip:"Contínua = 4 punts", audio:"Contínua 4 punts"},
    {id:224,q:"Quina documentació cal portar sempre?",a:["DNI","Permís + ITV + Assegurança","Només permís"],ok:1, emoji:"📁🪪✅", forma:"cuadrado-azul", tip:"3 documents", audio:"3 documents"},
    {id:225,q:"Quants punts per no respectar semàfor vermell?",a:["3 punts","4 punts","6 punts"],ok:1, emoji:"🚦🔴4️⃣", forma:"circulo-rojo", tip:"Vermell = 4 punts", audio:"Vermell 4 punts"},
    {id:226,q:"Multa per no dur armilla reflectant?",a:["80€","200€","Només avís"],ok:0, emoji:"🦺🚫80€", forma:"circulo-rojo", tip:"Sense armilla en interurbana", audio:"Armilla 80"},
    {id:227,q:"Quants anys sense cometre infraccions per recuperar 2 punts?",a:["1 any","2 anys","3 anys"],ok:1, emoji:"⏳2️⃣⭐", forma:"cuadrado-azul", tip:"2 anys=+2 fins 12, 3 anys fins 15", audio:"2 anys 2 punts"},
    {id:228,q:"Quina és la multa per conduir amb mòbil a la mà?",a:["100€","200€ + 6 punts","Només 80€"],ok:1, emoji:"📱🚫6️⃣", forma:"circulo-rojo", tip:"6 punts", audio:"Mòbil 6 punts"},
    {id:229,q:"Quants punts per circular per voral sense causa?",a:["2 punts","3 punts","4 punts"],ok:2, emoji:"🛣️🚫4️⃣", forma:"circulo-rojo", tip:"Voral = 4 punts només avaria", audio:"Voral 4 punts"},
    {id:230,q:"Quina és la ITV d’un cotxe de 8 anys?",a:["Anual","Cada 2 anys","Cada 6 mesos"],ok:0, emoji:"🚗8️⃣2️⃣", forma:"cuadrado-azul", tip:"8 anys = cada 2", audio:"ITV 8 cada 2"},
    {id:231,q:"Multa per no dur triangles en avaria?",a:["80€","200€","Només avís"],ok:0, emoji:"🔺🚫80€", forma:"triangulo-amarillo", tip:"Ara V16, multa 80€", audio:"Triangles 80"},
    {id:232,q:"Quants punts per no cedir pas a vianant en zebra?",a:["2 punts","3 punts","4 punts"],ok:2, emoji:"🚶🦓4️⃣", forma:"circulo-rojo", tip:"Zebra = 4 punts", audio:"Zebra 4 punts"},
    {id:233,q:"Quina és la velocitat que comporta delicte penal?",a:["+40 km/h","Excedir +60 km/h límit","Qualsevol excés"],ok:1, emoji:"💨🚨6️⃣0️⃣", forma:"circulo-rojo", tip:"+60 urbà / +80 interurbà", audio:"Penal 60"},
    {id:234,q:"Multa per aparcar en carril bus?",a:["80€","200€ + retirada vehicle","Només avís"],ok:0, emoji:"🅿️🚌80€", forma:"circulo-rojo", tip:"80€ + grua", audio:"Bus 80"},
    {id:235,q:"Quants punts per no dur cinturó darrere?",a:["2 punts","3 punts","4 punts"],ok:1, emoji:"💺🔒3️⃣", forma:"circulo-rojo", tip:"Darrere també compta", audio:"Darrere 3 punts"},
    {id:236,q:"Quina és la caducitat del permís a partir dels 65 anys?",a:["2 anys","3 anys","5 anys"],ok:2, emoji:"👴📅5️⃣", forma:"cuadrado-azul", tip:"65+ = cada 5 anys", audio:"65 5 anys"},
    {id:237,q:"Multa per circular sense assegurança?",a:["500€ a 3000€","100€","Només avís"],ok:0, emoji:"🛡️🚫💸", forma:"circulo-rojo", tip:"1500€ turisme, 2800€ camió", audio:"Sense assegurança 1500"},
    {id:238,q:"Quants punts per saltar-se ceda el pas?",a:["2 punts","3 punts","4 punts"],ok:2, emoji:"🔻🚫4️⃣", forma:"circulo-rojo", tip:"Ceda = 4 punts", audio:"Ceda 4 punts"},
    {id:239,q:"Quina és la taxa alcohol per ciclomotor?",a:["0,5 g/l","0,3 g/l","0,15 g/l"],ok:1, emoji:"🛵🍺0️⃣5️⃣", forma:"circulo-rojo", tip:"General 0.5, novell 0.3", audio:"Ciclomotor 0.5"},
    {id:240,q:"Multa per no senyalitzar avaria en autovia?",a:["80€","200€","Només avís"],ok:0, emoji:"⚠️🛣️80€", forma:"triangulo-amarillo", tip:"Sense V16 = 80€", audio:"Avaria 80"},

    // --- 42 NOVES PER 100% COBERTURA PDF ---
    // VELOCITATS MÍNIMES I URBANA DETALLADA
    {id:241,q:"Velocitat mínima en autopista?",a:["40 km/h","60 km/h","80 km/h"],ok:1, emoji:"🛣️⬇️6️⃣0️⃣", forma:"circulo-rojo", tip:"Mínima autopista/autovia 60 km/h. Si no arribes no pots entrar", audio:"Mínima autopista 60"},
    {id:242,q:"Límit 30 km/h a ciutat quan?",a:["Sempre","Via 1 carril per sentit","Via 2 carrils"],ok:1, emoji:"🏙️3️⃣0️⃣1️⃣", forma:"circulo-rojo", tip:"30 km/h si 1 carril per sentit. Truc: 30-50-20", audio:"Límit 30 un carril"},
    {id:243,q:"Límit 20 km/h a ciutat quan?",a:["Sempre","Plataforma única sense vorera","Autovia"],ok:1, emoji:"🏙️2️⃣0️⃣🚶", forma:"circulo-rojo", tip:"20 km/h plataforma única compartida vianants", audio:"Límit 20 plataforma"},
    {id:244,q:"Límit furgoneta 3500kg en autovia?",a:["120 km/h","100 km/h","90 km/h"],ok:1, emoji:"🚐💨1️⃣0️⃣0️⃣", forma:"cuadrado-azul", tip:"Furgoneta/camió fins 3500kg: 90 convencional, 100 autovia, 120 autopista si ho posa", audio:"Furgoneta 100 autovia"},
    {id:245,q:"Velocitat màxima amb remolc lleuger?",a:["70 km/h","80 km/h en convencional","120 en autovia"],ok:1, emoji:"🚗➕🚛💨", forma:"cuadrado-azul", tip:"Remolc lleuger -10km/h: 90->80 convencional, 120->90 autovia segons massa", audio:"Remolc lleuger 80"},

    // TÚNELS - DEL PDF PÀG 189
    {id:246,q:"Distància seguretat en túnel turisme?",a:["50m","100m","150m"],ok:1, emoji:"🚇↔️1️⃣0️⃣0️⃣", forma:"cuadrado-azul", tip:"Túnel: 100m turisme, 150m camió >3500kg", audio:"Túnel 100 metres"},
    {id:247,q:"En túnel es pot...",a:["Parar i fer marxa enrere","Parar només avaria","Avançar sempre"],ok:1, emoji:"🚇🚫🅿️", forma:"circulo-rojo", tip:"Túnel: prohibit parar, estacionar, canvi sentit, marxa enrere. Només avaria amb llums", audio:"Túnel prohibit parar"},
    {id:248,q:"Llums en túnel?",a:["Posició","Encreuament","Llargues sempre"],ok:1, emoji:"🚇💡🔦", forma:"cuadrado-azul", tip:"Túnel = encreuament obligatori, encara que sigui de dia", audio:"Túnel encreuament"},

    // CARRILS ESPECIALS VAO REVERSIBLE - PDF 166-178
    {id:249,q:"Carril VAO qui pot?",a:["Tothom","Moto + cotxe amb 2+ persones","Només bus"],ok:1, emoji:"👨‍👩‍👧‍👦🚗🛣️", forma:"cuadrado-azul", tip:"VAO: mínim 2 persones. Moto, bus >3500kg també", audio:"VAO dues persones"},
    {id:250,q:"Carril reversible quan es pot usar?",a:["Sempre","Amb llums del semàfor del carril","Mai"],ok:1, emoji:"🔄🛣️💡", forma:"cuadrado-azul", tip:"Reversible amb fletxa verda semàfor carril, aspas vermella prohibit", audio:"Reversible fletxa verda"},
    {id:251,q:"Arcén transitable?",a:["Mai","Bicis i ciclomotor si no hi ha via","Cotxes"],ok:1, emoji:"🛣️🚴🛵", forma:"cuadrado-azul", tip:"Arcén: bicis, ciclomotor i VMP si no hi ha altre lloc", audio:"Arcén bicis ciclomotor"},
    {id:252,q:"Arcén no transitable?",a:["Es pot aparcar","Només emergència i avaria","Sempre circular"],ok:1, emoji:"🛣️🚫🅿️", forma:"circulo-rojo", tip:"Arcén no transitable: només emergència", audio:"Arcén no transitable emergència"},

    // DISTÀNCIA SEGURETAT - PDF 178
    {id:253,q:"Distància camions >3500kg?",a:["20m","50m","100m"],ok:1, emoji:"🚛↔️5️⃣0️⃣", forma:"cuadrado-azul", tip:"Camió >3500kg fora poblat: 50m mínim amb el de davant", audio:"Camió 50 metres"},
    {id:254,q:"Distància lateral amb vianant?",a:["1m","1.5m","2m"],ok:1, emoji:"🚗↔️🚶1️⃣5️⃣", forma:"cuadrado-azul", tip:"Vianant / bici: 1.5m lateral mínim", audio:"Lateral 1.5 metres"},
    {id:255,q:"Distància lateral amb ciclista?",a:["1m","1.5m mínim","0.5m"],ok:1, emoji:"🚗↔️🚴1️⃣5️⃣", forma:"cuadrado-azul", tip:"Ciclista: 1.5m i pots envair contrari si cal", audio:"Ciclista 1.5 metres"},

    // LLUMS - AMB FOQUITO 💡 COM M'HA DEMANAT - PDF 283
    {id:256,q:"Llums llargues quan?",a:["Sempre","Fora poblat sense enllumenat ni vehicle davant/davant","En ciutat"],ok:1, emoji:"💡🔦⬆️", forma:"cuadrado-azul", tip:"Llargues fora poblat sense cotxes davant ni de front. Truc foquito amunt = llargues", audio:"Llargues fora poblat"},
    {id:257,q:"Llums curtes obligatòries?",a:["Sempre","Entre posta i sortida sol + túnel","Només de nit"],ok:1, emoji:"💡🔦⬇️", forma:"cuadrado-azul", tip:"Curtes: nit + túnel + carril reversible. Foquito avall = curtes", audio:"Curtes nit túnel"},
    {id:258,q:"Antiboira davantera?",a:["Sempre","Boira, pluja intensa, neu","Mai"],ok:1, emoji:"💡🌫️", forma:"cuadrado-azul", tip:"Antiboira davantera: boira, pluja forta, neu, fum. No sempre", audio:"Antiboira davantera boira"},
    {id:259,q:"Antiboira del darrere?",a:["Sempre amb curtes","Només boira molt densa","Mai"],ok:1, emoji:"💡🔴🌫️", forma:"circulo-rojo", tip:"Antiboira darrere només boira molt densa, si no enlluerna", audio:"Antiboira darrere densa"},
    {id:260,q:"Ràfegues llum per avisar?",a:["Prohibit","Permès per avisar perill o avançament","Només de dia"],ok:1, emoji:"💡⚡⚠️", forma:"triangulo-amarillo", tip:"Ràfegues curtes per avisar avançament o perill", audio:"Ràfegues avisar perill"},
    {id:261,q:"Llum frenada avariada?",a:["Puc circular","No puc circular de nit","Sí de dia"],ok:1, emoji:"💡🚫🔴", forma:"circulo-rojo", tip:"Si falla freno o encreuament no pots circular de nit", audio:"Frenada avariada no nit"},

    // DETENCIONS, IMMOBILITZACIÓ, EMERGÈNCIES
    {id:262,q:"On està prohibit parar?",a:["En vorera","Corba sense visibilitat, túnel, pas nivell","En qualsevol carrer"],ok:1, emoji:"🅿️🚫👁️", forma:"circulo-rojo", tip:"Prohibit parar on no hi ha visibilitat: corba, canvi rasant, túnel", audio:"Prohibit parar corba túnel"},
    {id:263,q:"Doble fila?",a:["Permès 2 min","Prohibit sempre","Permès amb intermitents"],ok:1, emoji:"🅿️🚫🚗🚗", forma:"circulo-rojo", tip:"Doble fila prohibida sempre", audio:"Doble fila prohibida"},
    {id:264,q:"Immobilització vehicle per alcohol?",a:["Mai","Si taxa >0.60 o negació","Només de nit"],ok:1, emoji:"🚔🔒🍺", forma:"circulo-rojo", tip:"Immobilitzen si +0.60 o negació o sense assegurança", audio:"Immobilització alcohol"},
    {id:265,q:"Xumet / biberó conduint?",a:["Prohibit","Permès","Només xumet"],ok:0, emoji:"👶🚫🚗", forma:"circulo-rojo", tip:"Qualsevol objecte que impedeixi agafar volant = multa greu", audio:"Xumet prohibit"},

    // SENYALS ORDRE PRIORITAT - PDF PÀG 54
    {id:266,q:"Ordre prioritat senyals?",a:["Semàfor, agents, senyals","Agents, senyalització circumstancial, semàfor","Senyals verticals primer"],ok:1, emoji:"👮🚦🚧", forma:"cuadrado-azul", tip:"1r Agents, 2n Circumstancials (cons, llum), 3r Semàfors, 4t Verticals, 5è Marques vials", audio:"Ordre agents primer"},
    {id:267,q:"Senyal S-28 carrer residencial?",a:["30 km/h + prioritat vianant","50 km/h","Prohibit vianant"],ok:0, emoji:"🏘️🚶2️⃣0️⃣", forma:"cuadrado-azul", tip:"S-28 residencial: 20 km/h, vianant té prioritat, no poden aparcar només llocs marcats", audio:"S-28 residencial 20 vianant"},

    // CICLISTES GRUP I VMP
    {id:268,q:"Ciclistes en grup?",a:["En fila sempre","De 2 en 2 si hi ha visibilitat","Prohibit grup"],ok:1, emoji:"🚴🚴↔️", forma:"cuadrado-azul", tip:"Bicis en grup: de 2 en 2 si hi ha visibilitat, si no fila", audio:"Ciclistes de dos en dos"},
    {id:269,q:"Avançar ciclista en grup?",a:["Puc avançar 1 per 1","He d'avançar tot el grup com un sol vehicle","Prohibit"],ok:1, emoji:"🚗💨🚴🚴", forma:"cuadrado-azul", tip:"Grup ciclista = com un sol camió llarg", audio:"Grup ciclista un vehicle"},
    {id:270,q:"Patinet elèctric casc?",a:["Obligatori sempre","Segons ordenança municipal","Mai"],ok:1, emoji:"🛴⛑️📜", forma:"cuadrado-azul", tip:"VMP casc segons ciutat. Girona encara no obligatori majors 16, recomanat", audio:"Patinet casc ordenança"},

    // NOVETATS DGT 2024-2026
    {id:271,q:"Distància seguretat motos en grup?",a:["0m","Individual","En ziga-zaga"],ok:2, emoji:"🏍️🏍️↔️", forma:"cuadrado-azul", tip:"Motos en grup en ziga-zaga per frenada", audio:"Motos ziga-zaga"},
    {id:272,q:"Cinturó dona embarassada?",a:["Exempta","Obligatori amb adaptador","Prohibit conduir"],ok:1, emoji:"🤰🔒✅", forma:"cuadrado-azul", tip:"Embarassada obligatori amb banda per sota ventre, mai per sobre", audio:"Embarassada cinturó"},
    {id:273,q:"Nen 1.35m on seu?",a:["Davant sempre","Darrere amb SRI fins 1.35m","Sense SRI"],ok:1, emoji:"👶💺🔒", forma:"cuadrado-azul", tip:"Fins 1.35m SRI darrere. Excepció davant si darrere ocupat per altres nens", audio:"Nen SRI 1.35"},
    {id:274,q:"SRI caducitat?",a:["No caduca","Sí, mirar etiqueta + cops","5 anys"],ok:1, emoji:"👶💺📅", forma:"triangulo-amarillo", tip:"SRI caduca i amb cop s'ha de canviar encara que no es vegi", audio:"SRI caducitat cop"},
    {id:275,q:"Conduir amb xancletes?",a:["Prohibit per llei","No prohibit però sancionable si afecta conducció","Obligatori"],ok:1, emoji:"🩴🚗⚠️", forma:"triangulo-amarillo", tip:"No prohibit textual, però multa 80€ si afecta llibertat moviments", audio:"Xancletes sancionable"},

    // ÚLTIMES PER 100%
    {id:276,q:"Què fer en pas a nivell?",a:["Creuar ràpid sense mirar","Mirar, creuar sense detenir-se, treure marxa","Parar al mig"],ok:1, emoji:"🚂👀💨", forma:"triangulo-amarillo", tip:"Pas nivell: mirar, creuar sense aturar, sense canviar marxa", audio:"Pas nivell creuar sense aturar"},
    {id:277,q:"Barreres baixant pas nivell?",a:["Creuar ràpid","No creuar, esperar","Saltar barrera"],ok:1, emoji:"🚂🚧🚫", forma:"circulo-rojo", tip:"Barreres movent-se = prohibit creuar", audio:"Barreres prohibit creuar"},
    {id:278,q:"Vehicle aturat emergència autovia?",a:["No fer res","Corredor seguretat: apartar-se 1 carril + 1.5m","Avançar ràpid"],ok:1, emoji:"🚨↔️1️⃣5️⃣", forma:"cuadrado-azul", tip:"Emergència aturat: corredor seguretat canviar carril o 1.5m", audio:"Corredor seguretat 1.5"},
    {id:279,q:"Glissada aquaplaning?",a:["Frenar fort","Deixar accelerar, embragatge i direcció recta","Girar fort"],ok:1, emoji:"🌧️🚗💦", forma:"triangulo-amarillo", tip:"Aquaplaning: sense gas, embragatge, volant recte fins agafar adherència", audio:"Aquaplaning sense gas"},
    {id:280,q:"Vent fort lateral?",a:["Frenar","Reduir velocitat + agafar fort volant","Accelerar"],ok:1, emoji:"💨🚗⚠️", forma:"triangulo-amarillo", tip:"Vent fort: reduir + volant fort, compte en sortir túnel", audio:"Vent fort reduir"},
    {id:281,q:"Neumàtics profunditat mínima?",a:["0.5mm","1.6mm","3mm"],ok:1, emoji:"🛞📏1️⃣6️⃣", forma:"circulo-rojo", tip:"Mínim legal 1.6mm. Recomanat 3mm. Testimoni TWI", audio:"Neumàtics 1.6 mm"},
    {id:282,q:"Llums diürnes DRL valen de nit?",a:["Sí","No, cal encreuament","Sí en ciutat"],ok:1, emoji:"💡☀️🚫🌙", forma:"circulo-rojo", tip:"DRL dia no val de nit. De nit encreuament obligatori", audio:"DRL no val nit"},

// --- PREGUNTAS TRAMPA NORMES - 15 DGT ESTIL EXAMEN ---
  {id:283,q:"TRAMPA: Velocitat mínima permesa en ciutat?",a:["20 km/h","No hi ha mínima","25 km/h"],ok:1, emoji:"🏙️⬇️❓", forma:"triangulo-amarillo", tip:"TRAMPA: En ciutat NO hi ha mínima legal. En autopista SÍ 60. Molts fallen posant 30", audio:"Trampa ciutat no hi ha mínima"},
  {id:284,q:"TRAMPA: Puc circular amb llums antiniebla del darrere en pluja lleugera?",a:["Sí, millor visibilitat","No, només boira molt densa","Sí, sempre que plogui"],ok:1, emoji:"💡🔴🌧️🚫", forma:"circulo-rojo", tip:"TRAMPA: Antiboira darrere ENLLUERNA. Només boira MOLT DENSA. Pluja lleugera = multa 200€", audio:"Trampa antiniebla darrere només densa"},
  {id:285,q:"TRAMPA: En túnel de 200m, distància amb camió davant?",a:["100m perquè soc turisme","150m perquè ell és camió","50m"],ok:1, emoji:"🚇🚛↔️❓", forma:"cuadrado-azul", tip:"TRAMPA: La distància la marca el vehicle de darrere si ets camió, però aquí TU has de deixar 100m com a turisme. Si TU ets camió >3500kg 150m", audio:"Trampa túnel 100 turisme 150 camió"},
  {id:286,q:"TRAMPA: Taxa alcohol si soc novell però condueixo furgoneta 3000kg?",a:["0.5 perquè és furgoneta","0.3 perquè soc novell mana la més restrictiva","0.0"],ok:1, emoji:"🍺🪪🚐❓", forma:"circulo-rojo", tip:"TRAMPA: Sempre mana la més restrictiva. Novell 0.3 > general 0.5 = 0.3", audio:"Trampa alcohol restrictiva"},
  {id:287,q:"TRAMPA: Vianant creua fora pas zebra, té preferència?",a:["Sí sempre","No, però has de cedir per evitar atropellament","Només de nit"],ok:1, emoji:"🚶❌🦓🤚", forma:"triangulo-amarillo", tip:"TRAMPA CLÀSSICA: No té preferència, PERÒ has de frenar. Si no frenes ets culpable igual", audio:"Trampa vianant fora zebra frenar"},
  {id:288,q:"TRAMPA: Bus escolar amb intermitents, puc avançar?",a:["No mai","Sí amb precaució extrema","Sí a 100km/h"],ok:1, emoji:"🚌👶💡⚠️", forma:"triangulo-amarillo", tip:"TRAMPA: Pots avançar però a pas de persona i llest per frenar. No és prohibit total", audio:"Trampa bus escolar precaució"},
  {id:289,q:"TRAMPA: ITV caducada fa 1 dia, puc anar a ITV?",a:["No, grua","Sí directament a ITV per camí més curt","Puc circular 1 mes"],ok:1, emoji:"🔧📅🚫1️⃣", forma:"triangulo-amarillo", tip:"TRAMPA: Amb ITV caducada només pots anar a ITV per camí més curt. No passejar", audio:"Trampa ITV només camí curt"},
  {id:290,q:"TRAMPA: Cinturó embarassada 8 mesos?",a:["Exempta","Obligatori per sota abdomen mai per sobre ventre","Amb coixí"],ok:1, emoji:"🤰🔒❓", forma:"cuadrado-azul", tip:"TRAMPA: Mai exemptes. Banda inferior per sota ventre, superior entre pits. Adaptador homologat", audio:"Trampa embarassada cinturó sota ventre"},
  {id:291,q:"TRAMPA: Parar en doble fila amb intermitents?",a:["Sí 2 minuts","No, prohibit encara que sigui 10 segons","Sí si soc taxi"],ok:1, emoji:"🅿️🚗🚗🚫", forma:"circulo-rojo", tip:"TRAMPA: Doble fila SEMPRE prohibit, intermitents no et salven. 80€-200€", audio:"Trampa doble fila sempre prohibit"},
  {id:292,q:"TRAMPA: Prioritat en rotonda qui entra per esquerra?",a:["Qui entra","Qui és dins rotonda","Qui va més ràpid"],ok:1, emoji:"🔄⬅️❓✅", forma:"cuadrado-azul", tip:"TRAMPA EXAMEN 90% FALLA: A rotonda NO és prioritat esquerra. Cedeix a qui ÉS DINS", audio:"Trampa rotonda qui és dins"},
  {id:293,q:"TRAMPA: Alcohol 0.60 mg/l aire = multa o penal?",a:["Multa 1000€","Delicte penal presó","Només 3 punts"],ok:1, emoji:"🍺0️⃣6️⃣👮🚔", forma:"circulo-rojo", tip:"TRAMPA: 0.60 aire EXACTE ja és penal. 0.60 = 1.2 sang. Frontera 0.60", audio:"Trampa 0.60 penal"},
  {id:294,q:"TRAMPA: Vaig amb moto i porto casc però sense cordar?",a:["Val igual","Com si no portés 4 punts + 200€","Només avís"],ok:1, emoji:"⛑️🔓🚫4️⃣", forma:"circulo-rojo", tip:"TRAMPA: Casc des cordat = com sense casc. 4 punts", audio:"Trampa casc des cordat 4 punts"},
  {id:295,q:"TRAMPA: Senyal 30 km/h i vaig a 31 km/h em multen?",a:["No, marge 10%","Sí, 30 és 30","Només radar"],ok:1, emoji:"3️⃣0️⃣1️⃣📸❓", forma:"circulo-rojo", tip:"TRAMPA: Legalment sí, però radars tenen marge 5-7 km/h. A examen posa SÍ", audio:"Trampa 30 és 30"},
  {id:296,q:"TRAMPA: Puc usar auriculars en un sol oïda per GPS?",a:["Sí una orella sí","No cap auricullar prohibida","Sí si és mans lliures"],ok:1, emoji:"🎧🚫📱", forma:"circulo-rojo", tip:"TRAMPA: Cap auricullar conduint prohibida. Mans lliures sense auricular", audio:"Trampa auriculars prohibit total"},
  {id:297,q:"TRAMPA: Nen 1.40m pot anar davant sense SRI?",a:["No mai","Sí si ja fa 1.35m pot anar davant amb cinturó","Només darrere"],ok:1, emoji:"👶1️⃣4️⃣0️⃣💺❓", forma:"cuadrado-azul", tip:"TRAMPA: A partir 1.35m pot anar davant amb cinturó, però recomanat darrere fins 1.50m. A examen 1.35m = davant SÍ", audio:"Trampa nen 1.40 davant sí"}
],


  mecanica: [
  // ===== M-01_MOTOR_BASIC.jpg - 6 preguntes =====
  { id: "M-01-01", panel_id: "M-01", ruta_panel: "M-01_MOTOR_BASIC.jpg", categoria: "MECANICA", pictograma: "MOTOR", pregunta: "¿Qué es el motor de combustión?", opciones: ["Convierte combustible en movimiento", "Filtra el aire", "Enfría el líquido"], correcta: 0, explicacion: "El motor quema la mezcla aire-combustible para generar movimiento. Es el corazón del vehículo." },
  { id: "M-01-02", panel_id: "M-01", ruta_panel: "M-01_MOTOR_BASIC.jpg", categoria: "MECANICA", pictograma: "PISTON", pregunta: "¿Qué hace el pistón dentro del cilindro?", opciones: ["Sube y baja comprimiendo la mezcla", "Filtra el aceite", "Carga la batería"], correcta: 0, explicacion: "El pistón comprime la mezcla y transmite la fuerza de la explosión al cigüeñal." },
  { id: "M-01-03", panel_id: "M-01", ruta_panel: "M-01_MOTOR_BASIC.jpg", categoria: "MECANICA", pictograma: "ACEITE", pregunta: "¿Para qué sirve el aceite del motor?", opciones: ["Lubricar, limpiar y refrigerar piezas", "Solo para dar color", "Para frenar"], correcta: 0, explicacion: "El aceite reduce el rozamiento, limpia residuos y ayuda a evacuar calor." },
  { id: "M-01-04", panel_id: "M-01", ruta_panel: "M-01_MOTOR_BASIC.jpg", categoria: "MECANICA", pictograma: "REFRIGERACION", pregunta: "Si el testigo de temperatura se enciende en rojo, ¿qué debes hacer?", opciones: ["Detenerse lo antes posible en lugar seguro y parar motor", "Acelerar para enfriar", "Seguir circulando"], correcta: 0, explicacion: "Sobrecalentamiento grave. Parar motor para evitar gripado." },
  { id: "M-01-05", panel_id: "M-01", ruta_panel: "M-01_MOTOR_BASIC.jpg", categoria: "MECANICA", pictograma: "TERMOSTATO", pregunta: "¿Qué función tiene el termostato?", opciones: ["Regular la temperatura dejando pasar refrigerante al radiador", "Cargar la batería", "Filtrar gasoil"], correcta: 0, explicacion: "Cierra el paso en frío para calentar rápido y abre cuando llega a temperatura óptima." },
  { id: "M-01-06", panel_id: "M-01", ruta_panel: "M-01_MOTOR_BASIC.jpg", categoria: "MECANICA", pictograma: "FILTRO_ACEITE", pregunta: "¿Cada cuánto se revisa el nivel de aceite?", opciones: ["Regularmente con motor frío y en llano", "Solo en la ITV", "Nunca"], correcta: 0, explicacion: "Revisión visual con varilla, motor frío y vehículo horizontal." },

  // ===== M-02_FRENOS_RUEDAS.jpg =====
  { id: "M-02-01", panel_id: "M-02", ruta_panel: "M-02_FRENOS_RUEDAS.jpg", categoria: "MECANICA", pictograma: "FRENO", pregunta: "¿Qué elemento crea la fricción para frenar?", opciones: ["Pastillas contra disco", "El aceite", "El filtro de aire"], correcta: 0, explicacion: "La pinza aprieta las pastillas contra el disco y genera fricción." },
  { id: "M-02-02", panel_id: "M-02", ruta_panel: "M-02_FRENOS_RUEDAS.jpg", categoria: "MECANICA", pictograma: "PASTILLAS", pregunta: "¿Cómo notas desgaste de pastillas?", opciones: ["Ruido agudo al frenar y mayor distancia", "El motor suena más", "El volante vibra solo"], correcta: 0, explicacion: "Chirrido metálico y pedal más largo indican desgaste." },
  { id: "M-02-03", panel_id: "M-02", ruta_panel: "M-02_FRENOS_RUEDAS.jpg", categoria: "MECANICA", pictograma: "ABS", pregunta: "¿Para qué sirve el ABS?", opciones: ["Evitar bloqueo de ruedas y mantener dirección al frenar fuerte", "Aumentar velocidad", "Ahorrar combustible"], correcta: 0, explicacion: "ABS modula presión para no bloquear y poder girar." },
  { id: "M-02-04", panel_id: "M-02", ruta_panel: "M-02_FRENOS_RUEDAS.jpg", categoria: "MECANICA", pictograma: "NEUMATICO", pregunta: "¿Qué indica el dibujo mínimo legal del neumático?", opciones: ["1,6 mm de profundidad", "0,2 mm", "5 mm"], correcta: 0, explicacion: "Mínimo 1,6 mm. Por debajo pierde adherencia, sobre todo en mojado." },
  { id: "M-02-05", panel_id: "M-02", ruta_panel: "M-02_FRENOS_RUEDAS.jpg", categoria: "MECANICA", pictograma: "SUSPENSION", pregunta: "¿Qué hace la suspensión?", opciones: ["Mantener contacto rueda-suelo y confort", "Cargar batería", "Filtrar gasoil"], correcta: 0, explicacion: "Amortigua baches y mantiene estabilidad." },
  { id: "M-02-06", panel_id: "M-02", ruta_panel: "M-02_FRENOS_RUEDAS.jpg", categoria: "MECANICA", pictograma: "DIRECCION", pregunta: "¿Qué es la dirección asistida?", opciones: ["Sistema que ayuda a girar el volante con menos esfuerzo", "Un tipo de freno", "Un filtro"], correcta: 0, explicacion: "Hidráulica o eléctrica, facilita el giro, sobre todo en parado." },

  // ===== M-03_ELECTRICO_ARRANQUE.jpg =====
  { id: "M-03-01", panel_id: "M-03", ruta_panel: "M-03_ELECTRICO_ARRANQUE.jpg", categoria: "MECANICA", pictograma: "BATERIA", pregunta: "¿Qué hace la batería de 12V?", opciones: ["Alimentar arranque y sistemas con motor parado", "Filtrar aceite", "Enfriar motor"], correcta: 0, explicacion: "Almacena energía para arranque, luces y electrónica." },
  { id: "M-03-02", panel_id: "M-03", ruta_panel: "M-03_ELECTRICO_ARRANQUE.jpg", categoria: "MECANICA", pictograma: "ALTERNADOR", pregunta: "¿Qué hace el alternador?", opciones: ["Cargar la batería con motor en marcha", "Frenar el coche", "Filtrar aire"], correcta: 0, explicacion: "Convierte energía del motor en electricidad para cargar batería." },
  { id: "M-03-03", panel_id: "M-03", ruta_panel: "M-03_ELECTRICO_ARRANQUE.jpg", categoria: "MECANICA", pictograma: "ARRANQUE", pregunta: "¿Qué hace el motor de arranque?", opciones: ["Hacer girar el motor para arrancar", "Enfriar radiador", "Abrir puertas"], correcta: 0, explicacion: "Pequeño motor eléctrico que inicia el giro del motor térmico." },
  { id: "M-03-04", panel_id: "M-03", ruta_panel: "M-03_ELECTRICO_ARRANQUE.jpg", categoria: "MECANICA", pictograma: "BUJIA", pregunta: "¿En qué motor hay bujías?", opciones: ["En gasolina, crean chispa", "En diésel solo", "En ninguno"], correcta: 0, explicacion: "Gasolina: bujía genera chispa. Diésel usa calentadores." },
  { id: "M-03-05", panel_id: "M-03", ruta_panel: "M-03_ELECTRICO_ARRANQUE.jpg", categoria: "MECANICA", pictograma: "CORREA", pregunta: "Si chirría la correa de accesorios, ¿qué indica?", opciones: ["Desgaste o destensado", "Falta de gasoil", "Freno gastado"], correcta: 0, explicacion: "Chirrido = correa patina, revisar tensión y estado." },
  { id: "M-03-06", panel_id: "M-03", ruta_panel: "M-03_ELECTRICO_ARRANQUE.jpg", categoria: "MECANICA", pictograma: "CHASIS", pregunta: "¿Qué es el bastidor o chasis?", opciones: ["Estructura que soporta todo el vehículo", "Un filtro", "Un fusible"], correcta: 0, explicacion: "Base rígida donde se fija motor, carrocería y demás." },

  // ===== M-04_TRANSMISION.jpg =====
  { id: "M-04-01", panel_id: "M-04", ruta_panel: "M-04_TRANSMISION.jpg", categoria: "MECANICA", pictograma: "EMBRAGUE", pregunta: "¿Para qué sirve el embrague?", opciones: ["Separar motor de caja para cambiar marcha", "Frenar", "Enfriar"], correcta: 0, explicacion: "Desacopla motor y transmisión para cambiar sin forzar." },
  { id: "M-04-02", panel_id: "M-04", ruta_panel: "M-04_TRANSMISION.jpg", categoria: "MECANICA", pictograma: "CAJA_CAMBIOS", pregunta: "¿Qué permite la caja de cambios?", opciones: ["Adaptar par y velocidad a la marcha", "Cargar batería", "Filtrar aceite"], correcta: 0, explicacion: "Multiplica fuerza en marchas cortas y velocidad en largas." },
  { id: "M-04-03", panel_id: "M-04", ruta_panel: "M-04_TRANSMISION.jpg", categoria: "MECANICA", pictograma: "PALIER", pregunta: "¿Qué es el palier?", opciones: ["Eje que lleva giro de diferencial a la rueda", "Filtro de aire", "Bomba de agua"], correcta: 0, explicacion: "Transmite tracción final a cada rueda motriz." },
  { id: "M-04-04", panel_id: "M-04", ruta_panel: "M-04_TRANSMISION.jpg", categoria: "MECANICA", pictograma: "DIFERENCIAL", pregunta: "¿Qué permite el diferencial en curva?", opciones: ["Que ruedas del mismo eje giren a distinta velocidad", "Que frenen igual", "Que se pare el motor"], correcta: 0, explicacion: "Rueda exterior recorre más distancia, necesita girar más rápido." },
  { id: "M-04-05", panel_id: "M-04", ruta_panel: "M-04_TRANSMISION.jpg", categoria: "MECANICA", pictograma: "GRUPO_CONICO", pregunta: "¿Qué hace el grupo cónico?", opciones: ["Cambiar giro 90 grados hacia ruedas", "Filtrar gasoil", "Cargar batería"], correcta: 0, explicacion: "En tracción trasera cambia dirección de giro del cardán." },
  { id: "M-04-06", panel_id: "M-04", ruta_panel: "M-04_TRANSMISION.jpg", categoria: "MECANICA", pictograma: "CARDAN", pregunta: "¿Qué une el árbol cardán?", opciones: ["Caja de cambios con diferencial trasero", "Batería con alternador", "Radiador con motor"], correcta: 0, explicacion: "Transmite giro a larga distancia en propulsión trasera." },

  // ===== M-05_REFRIGERACION.jpg =====
  { id: "M-05-01", panel_id: "M-05", ruta_panel: "M-05_REFRIGERACION.jpg", categoria: "MECANICA", pictograma: "BOMBA_AGUA", pregunta: "¿Qué mueve la bomba de agua?", opciones: ["Hace circular refrigerante por el circuito", "Bombea aceite", "Bombea gasoil"], correcta: 0, explicacion: "Circula líquido por motor y radiador." },
  { id: "M-05-02", panel_id: "M-05", ruta_panel: "M-05_REFRIGERACION.jpg", categoria: "MECANICA", pictograma: "RADIADOR", pregunta: "¿Qué hace el radiador?", opciones: ["Disipar calor del refrigerante al aire", "Filtrar aire", "Cargar batería"], correcta: 0, explicacion: "Intercambiador aire-líquido que enfría." },
  { id: "M-05-03", panel_id: "M-05", ruta_panel: "M-05_REFRIGERACION.jpg", categoria: "MECANICA", pictograma: "VENTILADOR", pregunta: "¿Cuándo actúa el electroventilador?", opciones: ["Cuando el aire natural no basta, sobre todo en parado", "Siempre a tope", "Solo en autopista"], correcta: 0, explicacion: "Se activa por temperatura para forzar aire por radiador." },
  { id: "M-05-04", panel_id: "M-05", ruta_panel: "M-05_REFRIGERACION.jpg", categoria: "MECANICA", pictograma: "DEPOSITO_EXPANSION", pregunta: "¿Para qué es el depósito de expansión?", opciones: ["Recoger expansión del líquido y mantener nivel", "Guardar aceite", "Guardar gasoil"], correcta: 0, explicacion: "Compensa dilatación y permite rellenar circuito." },
  { id: "M-05-05", panel_id: "M-05", ruta_panel: "M-05_REFRIGERACION.jpg", categoria: "MECANICA", pictograma: "MANGUITO", pregunta: "Si un manguito pierde líquido, ¿qué ocurre?", opciones: ["Baja nivel y riesgo de sobrecalentamiento", "Mejora frenada", "Aumenta carga batería"], correcta: 0, explicacion: "Fuga = pérdida refrigeración = peligro gripado." },
  { id: "M-05-06", panel_id: "M-05", ruta_panel: "M-05_REFRIGERACION.jpg", categoria: "MECANICA", pictograma: "ANTICONGELANTE", pregunta: "¿Qué ventaja tiene el anticongelante?", opciones: ["No se congela en invierno y no hierve tan fácil en verano", "Solo da color", "Aumenta consumo"], correcta: 0, explicacion: "Mezcla agua + glicol protege -30ºC a +120ºC y anticorrosión." },

  // ===== M-06_FILTROS_TURBO.jpg =====
  { id: "M-06-01", panel_id: "M-06", ruta_panel: "M-06_FILTROS_TURBO.jpg", categoria: "MECANICA", pictograma: "VARILLA_ACEITE", pregunta: "¿Cómo se mide el nivel de aceite correctamente?", opciones: ["Motor frío, llano, sacar varilla, limpiar y medir", "Con motor arrancado", "En pendiente"], correcta: 0, explicacion: "Medición fiable en frío y horizontal entre min y max." },
  { id: "M-06-02", panel_id: "M-06", ruta_panel: "M-06_FILTROS_TURBO.jpg", categoria: "MECANICA", pictograma: "FILTRO_ACEITE", pregunta: "¿Qué retiene el filtro de aceite?", opciones: ["Impurezas metálicas y suciedad", "Agua del radiador", "Aire"], correcta: 0, explicacion: "Protege motor de partículas abrasivas." },
  { id: "M-06-03", panel_id: "M-06", ruta_panel: "M-06_FILTROS_TURBO.jpg", categoria: "MECANICA", pictograma: "FILTRO_AIRE", pregunta: "¿Qué pasa si el filtro de aire está muy sucio?", opciones: ["Más consumo y menos potencia", "Frena mejor", "Carga más batería"], correcta: 0, explicacion: "Menos aire = combustión incompleta." },
  { id: "M-06-04", panel_id: "M-06", ruta_panel: "M-06_FILTROS_TURBO.jpg", categoria: "MECANICA", pictograma: "FILTRO_GASOIL", pregunta: "¿Qué filtra el filtro de gasoil?", opciones: ["Agua e impurezas del diésel", "Aceite del motor", "Líquido de frenos"], correcta: 0, explicacion: "Evita que agua/impurezas dañen bomba e inyectores." },
  { id: "M-06-05", panel_id: "M-06", ruta_panel: "M-06_FILTROS_TURBO.jpg", categoria: "MECANICA", pictograma: "TURBO", pregunta: "¿Qué hace el turbo?", opciones: ["Aprovecha gases escape para meter más aire al motor", "Enfría radiador", "Filtra aceite"], correcta: 0, explicacion: "Más aire = más potencia sin aumentar cilindrada." },
  { id: "M-06-06", panel_id: "M-06", ruta_panel: "M-06_FILTROS_TURBO.jpg", categoria: "MECANICA", pictograma: "INTERCOOLER", pregunta: "¿Qué hace el intercooler?", opciones: ["Enfría aire del turbo antes de entrar al motor", "Calienta gasoil", "Carga batería"], correcta: 0, explicacion: "Aire más frío = más denso = mejor combustión." },

  // ===== M-07_HIBRIDO_TECH.jpg =====
  { id: "M-07-01", panel_id: "M-07", ruta_panel: "M-07_HIBRIDO_TECH.jpg", categoria: "MECANICA", pictograma: "MOTOR_ELECTRICO", pregunta: "¿Cómo funciona un híbrido?", opciones: ["Combina motor térmico y eléctrico para eficiencia", "Solo con gasolina", "Solo con diésel"], correcta: 0, explicacion: "Eléctrico en ciudad, térmico en carretera, ambos si hace falta." },
  { id: "M-07-02", panel_id: "M-07", ruta_panel: "M-07_HIBRIDO_TECH.jpg", categoria: "MECANICA", pictograma: "BATERIA_LITIO", pregunta: "¿Dónde está la batería de alto voltaje en híbrido?", opciones: ["Normalmente bajo asiento trasero o maletero, aislada", "En el radiador", "En el escape"], correcta: 0, explicacion: "Batería HV de 200-400V, no confundir con 12V." },
  { id: "M-07-03", panel_id: "M-07", ruta_panel: "M-07_HIBRIDO_TECH.jpg", categoria: "MECANICA", pictograma: "FRENO_REGENERATIVO", pregunta: "¿Qué es el freno regenerativo?", opciones: ["Recupera energía al frenar para recargar batería", "Frena con aire", "Solo freno de mano"], correcta: 0, explicacion: "Motor eléctrico actúa como generador al decelerar." },
  { id: "M-07-04", panel_id: "M-07", ruta_panel: "M-07_HIBRIDO_TECH.jpg", categoria: "MECANICA", pictograma: "ESP", pregunta: "¿Qué hace el ESP?", opciones: ["Corrige trayectoria si detecta derrape", "Aumenta velocidad", "Filtra gasoil"], correcta: 0, explicacion: "Frena rueda individual y corta potencia para estabilizar." },
  { id: "M-07-05", panel_id: "M-07", ruta_panel: "M-07_HIBRIDO_TECH.jpg", categoria: "MECANICA", pictograma: "EBS", pregunta: "¿Qué es EBS en camión?", opciones: ["Frenado electrónico que gestiona todos los frenos", "Un filtro", "Un tipo de aceite"], correcta: 0, explicacion: "Electronic Braking System, frenada más rápida y estable en pesados." },
  { id: "M-07-06", panel_id: "M-07", ruta_panel: "M-07_HIBRIDO_TECH.jpg", categoria: "MECANICA", pictograma: "BAS", pregunta: "¿Qué hace el BAS?", opciones: ["Detecta frenada de emergencia y aplica máxima fuerza", "Carga batería", "Enfría motor"], correcta: 0, explicacion: "Brake Assist System ayuda si conductor no pisa suficientemente fuerte." },

  // ===== M-08_AVERIAS_HUMOS.jpg =====
  { id: "M-08-01", panel_id: "M-08", ruta_panel: "M-08_AVERIAS_HUMOS.jpg", categoria: "MECANICA", pictograma: "HUMO_BLANCO", pregunta: "¿Qué indica humo blanco espeso continuo?", opciones: ["Posible junta culata, entra refrigerante al cilindro", "Normal en diésel frío unos segundos", "Falta aceite"], correcta: 0, explicacion: "Blanco denso = agua/refrigerante quemado. Revisar urgente." },
  { id: "M-08-02", panel_id: "M-08", ruta_panel: "M-08_AVERIAS_HUMOS.jpg", categoria: "MECANICA", pictograma: "HUMO_NEGRO", pregunta: "¿Qué indica humo negro en diésel?", opciones: ["Exceso gasoil, combustión incompleta, filtro aire sucio", "Falta agua", "Batería baja"], correcta: 0, explicacion: "Mezcla rica o filtro aire obstruido." },
  { id: "M-08-03", panel_id: "M-08", ruta_panel: "M-08_AVERIAS_HUMOS.jpg", categoria: "MECANICA", pictograma: "HUMO_AZUL", pregunta: "¿Qué indica humo azul?", opciones: ["Motor quema aceite", "Motor quema agua", "Normal"], correcta: 0, explicacion: "Azul = aceite en combustión por desgaste segmentos o retenes." },
  { id: "M-08-04", panel_id: "M-08", ruta_panel: "M-08_AVERIAS_HUMOS.jpg", categoria: "MECANICA", pictograma: "SOBRECALENTAMIENTO", pregunta: "¿Qué hacer si se enciende testigo de sobrecalentamiento?", opciones: ["Parar, apagar, esperar y no abrir radiador en caliente", "Abrir radiador enseguida", "Seguir a 120"], correcta: 0, explicacion: "Abrir en caliente quema por vapor a presión." },
  { id: "M-08-05", panel_id: "M-08", ruta_panel: "M-08_AVERIAS_HUMOS.jpg", categoria: "MECANICA", pictograma: "CHIRRIDO_CORREA", pregunta: "¿Qué indica chirrido al arrancar en frío?", opciones: ["Correa destensada o desgastada", "Freno de mano puesto", "Falta gasoil"], correcta: 0, explicacion: "Correa patina hasta que coge temperatura." },
  { id: "M-08-06", panel_id: "M-08", ruta_panel: "M-08_AVERIAS_HUMOS.jpg", categoria: "MECANICA", pictograma: "FUGA_LIQUIDO", pregunta: "¿Mancha verde/rosa debajo del motor?", opciones: ["Posible fuga refrigerante", "Fuga de aceite motor", "Normal"], correcta: 0, explicacion: "Refrigerante suele ser verde, rosa o naranja." },

  // ===== M-09_CAMION_INDUSTRIAL.jpg =====
  { id: "M-09-01", panel_id: "M-09", ruta_panel: "M-09_CAMION_INDUSTRIAL.jpg", categoria: "MECANICA", pictograma: "CABEZA_TRACTORA", pregunta: "¿Qué es la cabeza tractora?", opciones: ["Vehículo que arrastra semirremolque", "Un remolque sin motor", "Un filtro"], correcta: 0, explicacion: "Tractora + semirremolque = articulado." },
  { id: "M-09-02", panel_id: "M-09", ruta_panel: "M-09_CAMION_INDUSTRIAL.jpg", categoria: "MECANICA", pictograma: "REMOLQUE", pregunta: "¿Qué diferencia remolque de semirremolque?", opciones: ["Remolque apoya todo su peso en sus ejes, semirremolque parte en tractora", "Son iguales", "Remolque no tiene ruedas"], correcta: 0, explicacion: "Semirremolque transmite peso a quinta rueda." },
  { id: "M-09-03", panel_id: "M-09", ruta_panel: "M-09_CAMION_INDUSTRIAL.jpg", categoria: "MECANICA", pictograma: "QUINTA_RUEDA", pregunta: "¿Qué es la quinta rueda?", opciones: ["Acoplamiento entre tractora y semirremolque", "Rueda de repuesto", "Freno extra"], correcta: 0, explicacion: "Plato que engancha kingpin del semirremolque." },
  { id: "M-09-04", panel_id: "M-09", ruta_panel: "M-09_CAMION_INDUSTRIAL.jpg", categoria: "MECANICA", pictograma: "EJE_TANDEM", pregunta: "¿Qué es eje tándem?", opciones: ["Dos ejes muy juntos que reparten peso", "Un solo eje", "Un tipo de freno"], correcta: 0, explicacion: "Mejora reparto de carga y tracción." },
  { id: "M-09-05", panel_id: "M-09", ruta_panel: "M-09_CAMION_INDUSTRIAL.jpg", categoria: "MECANICA", pictograma: "FRENO_AIRE", pregunta: "¿Cómo frena un camión de aire comprimido?", opciones: ["Usa aire a presión, si falta aire se bloquea por seguridad", "Solo con líquido como coche", "No frena"], correcta: 0, explicacion: "Freno neumático: sin aire, muelles bloquean ruedas = seguridad." },
  { id: "M-09-06", panel_id: "M-09", ruta_panel: "M-09_CAMION_INDUSTRIAL.jpg", categoria: "MECANICA", pictograma: "RETARDER", pregunta: "¿Para qué sirve el retarder?", opciones: ["Freno auxiliar que evita sobrecalentar frenos en bajadas", "Acelerar", "Filtrar gasoil"], correcta: 0, explicacion: "Ralentizador electromagnético o hidráulico, ahorra frenos." },

  // ===== M-10_HERRAMIENTAS_V16.jpg =====
  { id: "M-10-01", panel_id: "M-10", ruta_panel: "M-10_HERRAMIENTAS_V16.jpg", categoria: "MECANICA", pictograma: "GATO", pregunta: "¿Dónde se coloca el gato para cambiar rueda?", opciones: ["En puntos reforzados del chasis indicados en manual", "En cualquier chapa", "En el paragolpes de plástico"], correcta: 0, explicacion: "Puntos específicos para no deformar carrocería." },
  { id: "M-10-02", panel_id: "M-10", ruta_panel: "M-10_HERRAMIENTAS_V16.jpg", categoria: "MECANICA", pictograma: "LLAVE_RUEDAS", pregunta: "¿Cómo aflojar tornillos de rueda?", opciones: ["En cruz, antes de levantar coche", "Después de levantar", "Da igual"], correcta: 0, explicacion: "Aflojar en suelo en cruz, luego levantar y quitar." },
  { id: "M-10-03", panel_id: "M-10", ruta_panel: "M-10_HERRAMIENTAS_V16.jpg", categoria: "MECANICA", pictograma: "V16", pregunta: "¿Qué es la baliza V16?", opciones: ["Luz amarilla intermitente que sustituye triángulos desde 2026", "Un extintor", "Un gato"], correcta: 0, explicacion: "Se coloca en techo, visible 360º, con conectividad DGT 3.0." },
  { id: "M-10-04", panel_id: "M-10", ruta_panel: "M-10_HERRAMIENTAS_V16.jpg", categoria: "MECANICA", pictograma: "CHALECO", pregunta: "¿Cuándo ponerse chaleco reflectante?", opciones: ["Antes de salir del vehículo en vía interurbana", "Dentro del coche", "Solo de noche"], correcta: 0, explicacion: "Obligatorio salir con chaleco puesto en calzada." },
  { id: "M-10-05", panel_id: "M-10", ruta_panel: "M-10_HERRAMIENTAS_V16.jpg", categoria: "MECANICA", pictograma: "TRIANGULO", pregunta: "¿Siguen obligatorios los triángulos con V16?", opciones: ["No, desde 2026 solo V16 obligatoria", "Sí, dos triángulos siempre", "Solo uno"], correcta: 0, explicacion: "Norma actual: V16 sustituye triángulos." },
  { id: "M-10-06", panel_id: "M-10", ruta_panel: "M-10_HERRAMIENTAS_V16.jpg", categoria: "MECANICA", pictograma: "EXTINTOR", pregunta: "¿Qué extintor debe llevar camión?", opciones: ["Extintor polvo ABC revisado y accesible", "No necesita", "De agua solo"], correcta: 0, explicacion: "Obligatorio en pesados, revisado y con presión correcta." },

  // ===== M-11_RESTO_TEMARIO.jpg - 8% que faltaba - 6 preguntes =====
  { id: "M-11-01", panel_id: "M-11", ruta_panel: "M-11_RESTO_TEMARIO.jpg", categoria: "MECANICA", pictograma: "BASTIDOR", pregunta: "¿Qué es el bastidor independiente?", opciones: ["Chasis separado de carrocería típico en camiones y todoterrenos", "Carrocería autoportante", "Un filtro"], correcta: 0, explicacion: "Más robusto, permite torsión en campo." },
  { id: "M-11-02", panel_id: "M-11", ruta_panel: "M-11_RESTO_TEMARIO.jpg", categoria: "MECANICA", pictograma: "CARROCERIA_DEFORMACION", pregunta: "¿Qué es deformación programada?", opciones: ["Carrocería diseñada para absorber impacto deformándose", "Carrocería que no se deforma", "Un tipo de pintura"], correcta: 0, explicacion: "Zona delantera/trasera se deforma para proteger habitáculo." },
  { id: "M-11-03", panel_id: "M-11", ruta_panel: "M-11_RESTO_TEMARIO.jpg", categoria: "MECANICA", pictograma: "AIRBAG", pregunta: "¿El airbag sustituye al cinturón?", opciones: ["No, es complemento del cinturón", "Sí, ya no hace falta cinturón", "Solo en ciudad"], correcta: 0, explicacion: "Airbag sin cinturón puede ser letal. Siempre con cinturón." },
  { id: "M-11-04", panel_id: "M-11", ruta_panel: "M-11_RESTO_TEMARIO.jpg", categoria: "MECANICA", pictograma: "CATALIZADOR", pregunta: "¿Qué hace el catalizador?", opciones: ["Reduce gases contaminantes transformándolos", "Aumenta potencia", "Filtra aceite"], correcta: 0, explicacion: "Convierte CO, HC y NOx en gases menos nocivos." },
  { id: "M-11-05", panel_id: "M-11", ruta_panel: "M-11_RESTO_TEMARIO.jpg", categoria: "MECANICA", pictograma: "SONDA_LAMBDA", pregunta: "¿Qué mide la sonda lambda?", opciones: ["Oxígeno en escape para ajustar mezcla", "Temperatura del aceite", "Presión de ruedas"], correcta: 0, explicacion: "Informa a centralita si mezcla es rica o pobre." },
  { id: "M-11-06", panel_id: "M-11", ruta_panel: "M-11_RESTO_TEMARIO.jpg", categoria: "MECANICA", pictograma: "INYECCION_ECO", pregunta: "¿Qué es conducción económica relacionada con inyección?", opciones: ["Conducir suave, marchas largas, anticipación para gastar menos", "Acelerar mucho", "Frenar fuerte"], correcta: 0, explicacion: "Inyección electrónica + conducción eficiente = menos consumo y contaminación." }
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


// ===== GASDRIVE DGT CAT V9.8.6 HÍBRID - EXAMEN 0/30 FIX + IMAGENES DGT REALES + NORMES EMOJI COMBO 2-3 + FOQUITO =====
let tipsData = [];
let currentTip = 0;
let tempsIniciTemari = null;
let contadorTemari = null;
let sitCategoriaActiva = 'clima';

// ===== V9.8.5 BANCO DE SVGS ELIMINADO - AHORA USAMOS RUTA_PANEL + EMOJI COMBO =====
const SENALES_SVG = {}; // YA NO SE USA

// TU BANCO VA AQUI: const PREGUNTES = [...] // <- TU YA LO TIENES, NO LO BORRES. Añade PREGUNTES.trampes aqui tambien

// ===== V9.8.6 HOTFIX HÍBRID: PINTA PANEL DGT REAL + EMOJI COMBO NORMES + EXAMEN =====
function pintarImatgeSiExisteix(cat, pregunta) {
  const imgDiv = document.getElementById(`test-${cat}-imagen`) || document.getElementById(`examen-imagen`);
  const emojisDiv = document.getElementById(`test-${cat}-emojis`) || document.getElementById(`examen-emojis`);
  const tipDiv = document.getElementById(`test-${cat}-tip`) || document.getElementById(`examen-tip`);

  if (!imgDiv) return;

  // ===== CAS 1: SENYALS / TRAMPES / EXAMEN amb ruta_panel DGT REAL (el teu format) =====
  if ((cat === 'senyals' || cat === 'trampes' || cat === 'examen') && pregunta.ruta_panel) {
    const ruta1 = `./${pregunta.ruta_panel}`;
    const ruta2 = `./assets/paneles/${pregunta.ruta_panel}`;
    imgDiv.innerHTML = `
      <div style="background:#0a0a1a; padding:12px; border-radius:16px; border:3px solid #00D9FF; box-shadow:0 0 25px rgba(0,217,255,0.3);">
        <img
          src="${ruta1}"
          alt="Panel DGT ${pregunta.panel_id || ''}"
          style="width:100%; height:auto; max-height:320px; object-fit:contain; border-radius:12px; display:block;"
          onerror="this.onerror=null; this.src='${ruta2}'; this.nextElementSibling.style.display='block';"
        />
        <div style="display:none; color:#ff6b6b; text-align:center; padding:20px;">
          ❌ No s'ha trobat: ${pregunta.ruta_panel}<br><small>Prova: ${ruta1} o ${ruta2}</small>
        </div>
        <div style="text-align:center; color:#888; font-size:12px; margin-top:8px;">
          Panel: ${pregunta.panel_id || 'N/A'} - ${pregunta.codi || ''}
        </div>
      </div>
    `;
    imgDiv.style.border = 'none';
    imgDiv.style.boxShadow = 'none';
    if(emojisDiv){ emojisDiv.innerHTML=''; emojisDiv.style.display='none'; }
    if(tipDiv){ tipDiv.innerHTML=''; tipDiv.style.display='none'; }
    return;
  }

  // ===== CAS 2: NOU FORMAT NORMES amb COMBO EMOJIS 2-3 + FORMA + FOQUITO =====
  if (pregunta.emoji) {
    // Suport Intl.Segmenter per emojis complexos 👨‍👩‍👧‍👦 1️⃣8️⃣ 💡
    let htmlEmojis = '';
    try {
      const segmenter = new Intl.Segmenter('ca', { granularity: 'grapheme' });
      const segs = [...segmenter.segment(pregunta.emoji)].map(s => s.segment);
      const size = segs.length > 2? '26px' : segs.length === 2? '32px' : '42px';
      htmlEmojis = segs.map(s => `<span style="font-size:${size}; line-height:1;">${s}</span>`).join('');
    } catch(e) {
      // Fallback si navegador vell
      const parts = [...pregunta.emoji];
      const size = parts.length > 2? '26px' : '32px';
      htmlEmojis = parts.map(s => `<span style="font-size:${size}">${s}</span>`).join('');
    }

    const forma = pregunta.forma || 'circulo-rojo';
    let extraStyle = '';
    if(forma === 'circulo-rojo') extraStyle = 'border:6px solid #e53935; border-radius:50%; background:white;';
    if(forma === 'cuadrado-azul') extraStyle = 'border:6px solid #1e88e5; border-radius:16px; background:white;';
    if(forma === 'triangulo-amarillo') extraStyle = 'border:6px solid #fdd835; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); background:white; width:130px; height:115px;';

    imgDiv.innerHTML = `
      <div style="width:120px; height:120px; margin:0 auto 12px; display:flex; align-items:center; justify-content:center; box-shadow:0 0 20px rgba(0,217,255,0.15); ${extraStyle}">
        <div style="display:flex; gap:3px; flex-wrap:wrap; justify-content:center; align-items:center; ${forma==='triangulo-amarillo'?'margin-top:18px':''}">
          ${htmlEmojis}
        </div>
      </div>
    `;
    imgDiv.style.border = 'none';
    imgDiv.style.boxShadow = 'none';
    if(emojisDiv){ emojisDiv.innerHTML=''; emojisDiv.style.display='none'; }
    if(tipDiv){ tipDiv.innerHTML=''; tipDiv.style.display='none'; }
    return;
  }

  // ===== CAS 3: RES - PLACEHOLDER =====
  imgDiv.innerHTML = `<div class="placeholder" style="color:#00aaff; text-align:center; padding:40px; font-size:16px; border:2px dashed rgba(0,217,255,0.3); border-radius:12px;">Sense pictograma</div>`;
  imgDiv.style.border = 'none';
  imgDiv.style.boxShadow = 'none';
  if(emojisDiv) { emojisDiv.innerHTML = ''; emojisDiv.style.display = 'none'; }
  if(tipDiv) { tipDiv.innerHTML = ''; tipDiv.style.display = 'none'; }
}

// FIX V9.8.5: Total dinámico anti-crash si PREGUNTES no existe aún
function getTotalBanco() {
  let total = 0;
  if(typeof PREGUNTES!== 'undefined') for(let cat in PREGUNTES) if(Array.isArray(PREGUNTES[cat])) total += PREGUNTES[cat].length;
  if(typeof SITUACIONS!== 'undefined') for(let cat in SITUACIONS) if(Array.isArray(SITUACIONS[cat])) total += SITUACIONS[cat].length;
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

let PROGRESO = JSON.parse(localStorage.getItem('gd_progreso_v2')) || {
  tests: {
    general: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} },
    senyals: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} },
    trampes: { total: 0, aciertos: 0, unicas: new Set(), falladas: [], dies: {} },
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
  test: { general: {idx:0,encerts:0,ratxa:0,puntuacio:0}, senyals: {idx:0,encerts:0,ratxa:0,puntuacio:0}, trampes: {idx:0,encerts:0,ratxa:0,puntuacio:0}, normes: {idx:0,encerts:0,ratxa:0,puntuacio:0}, mecanica: {idx:0,encerts:0,ratxa:0,puntuacio:0}, auxilis: {idx:0,encerts:0,ratxa:0,puntuacio:0}, mediambient: {idx:0,encerts:0,ratxa:0,puntuacio:0} },
  examen: { activa: false, preguntes: [], index: 0, encerts: 0, fallos: 0, timer: null, temps: 1800, categoria: 'general' },
  sit: { clima: {idx:0,encerts:0,puntuacio:0,current:null}, urbà: {idx:0,encerts:0,puntuacio:0,current:null}, carretera: {idx:0,encerts:0,puntuacio:0,current:null}, emergència: {idx:0,encerts:0,puntuacio:0,current:null} }
};

if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }

function init() {
  console.log("GasDrive V9.8.6 HÍBRID carregat - NORMES emoji combo + SENYALS panel");
  autoMapearTotesPreguntes();
  comprovarNouDia();
  iniciarComptadorTemari();
  mostrarIntro();
  actualitzarCoins();
  carregarPregunta('general'); carregarPregunta('senyals'); carregarPregunta('trampes'); carregarPregunta('normes'); carregarPregunta('mecanica'); carregarPregunta('auxilis'); carregarPregunta('mediambient');
  carregarSituacio('clima');
  actualitzarMissatgeMotivacional();
}

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

function calcularPreparacioDGT_V94() {
  const avui = new Date();
  const fa7Dies = new Date(avui.getTime() - 7 * 24 * 60 * 60 * 1000);
  let totalPreg = 0, domina = 0, aprenent = 0;
  let historial = estat.stats.historialPregunta || {};
  if(typeof PREGUNTES!== 'undefined'){
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
  if(typeof PREGUNTES!== 'undefined'){
    for(let cat in PREGUNTES) {
      PREGUNTES[cat].forEach(p => {
        const h = historial[p.id];
        if(h && new Date(h.ultima) >= fa7Dies) unicas7Dies.add(p.id);
      });
    }
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

function iniciarComptadorTemari() {
  if (contadorTemari) clearInterval(contadorTemari);
  comprovarNouDia();
  actualitzarPaseUI();
  contadorTemari = setInterval(() => {
    const vistaTemariActiva = document.getElementById('tab-temari')?.classList.contains('active');
    if (vistaTemariActiva) {
      if (tempsIniciTemari === null) {
        tempsIniciTemari = Date.now();
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
      }
    }
  }, 1000);
}

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

function autoMapearTotesPreguntes() {
  let idCounter = 1;
  if(typeof PREGUNTES === 'undefined') { console.warn('PREGUNTES no definit encara'); return; }
  for(let cat in PREGUNTES) {
    PREGUNTES[cat] = PREGUNTES[cat].map(p => {
      let subtema = 'General'; let pag = 1;
      for(let key in MAPEO_PALABRAS_CLAVE) { if((p.q||p.pregunta||'').toLowerCase().includes(key)) { subtema = MAPEO_PALABRAS_CLAVE[key].subtema; pag = MAPEO_PALABRAS_CLAVE[key].pag; break; } }
      return {...p, id: p.id || idCounter++, subtema, pag};
    });
  }
  console.log('✅ BANCO MAPEADO V9.8.6. Total:', getTotalBanco());
}

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
  const categories = ['senyals','trampes','normes','mecanica','auxilis','mediambient'];
  const noms = ['🚦 SENYALS','🪤 TRAMPES','📋 NORMES','⚙️ MECÀNICA','🚑 AUXILIS','♻️ MEDI AMBIENT'];
  const temari = ['TEMARI 1','TEMARI 1','TEMARI 2','TEMARI 4','TEMARI 3','TEMARI 5'];
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

function actualitzarEstadistiques_V94() {
  const tab = document.getElementById('tab-estadistiques');
  if(!tab ||!tab.classList.contains('active')) return;
  const stats = calcularPreparacioDGT_V94();
  const el1 = document.getElementById('stats-global-percent'); if(el1) el1.textContent = stats.preparacio + '%';
  const el2 = document.getElementById('stats-global-bar'); if(el2) el2.style.width = stats.preparacio + '%';
  const el3 = document.getElementById('stats-domini-percent'); if(el3) el3.textContent = stats.retencio + '%';
  const el4 = document.getElementById('stats-domini-bar'); if(el4) el4.style.width = stats.retencio + '%';
  const el5 = document.getElementById('stats-constancia-percent'); if(el5) el5.textContent = stats.constancia + '%';
  const el6 = document.getElementById('stats-constancia-bar'); if(el6) el6.style.width = stats.constancia + '%';
  const el7 = document.getElementById('stats-constancia-label'); if(el7) el7.textContent = `CONSTÀNCIA: ${stats.diesValids}/20 dies vàlids`;
  const el8 = document.getElementById('stats-temari-percent'); if(el8) el8.textContent = stats.cobertura + '%';
  const el9 = document.getElementById('stats-temari-bar'); if(el9) el9.style.width = stats.cobertura + '%';
  const el10 = document.getElementById('stats-simulacres-percent'); if(el10) el10.textContent = stats.estabilitat + '%';
  const el11 = document.getElementById('stats-simulacres-bar'); if(el11) el11.style.width = stats.estabilitat + '%';
  const el12 = document.getElementById('stats-examen-aprobados'); if(el12) el12.textContent = `Millor ratxa: ${stats.maxRatxa}/6 aprovats seguits`;
  dibujarGraficaEvolucion();
  dibuixarPuntsDebils_V94();
  const btnDGT = document.getElementById('btn-dgt-oficial');
  if(btnDGT){ btnDGT.style.opacity = stats.preparacio >= 90? '1' : '0.4'; btnDGT.style.pointerEvents = stats.preparacio >= 90? 'auto' : 'none'; }
}

function getDadesEvolucio() { return estat.stats.historialEvolucio.map(h => ({dia: h.dia.split('-')[2], global: h.percent})); }
function potFerTests() { comprovarNouDia(); return estat.stats.paseCompletado; }
function mostrarPopupPase() { const minutsQueFalten = Math.max(0, 20 - Math.floor(estat.stats.tempsEstudiatAvui)); alert(`⛔ PASE BLOQUEJAT\nEstudia ${minutsQueFalten} minuts més al TEMARI per desbloquejar els tests d'avui.`); }
function barrejarArray(arr) { const a = arr.slice(); for(let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function carregarPregunta(cat) {
  const s = estat.test[cat];
  if(typeof PREGUNTES === 'undefined' ||!PREGUNTES[cat] || PREGUNTES[cat].length===0) return;
  const preguntes = barrejarArray(PREGUNTES[cat]);
  const pOriginal = preguntes[s.idx % preguntes.length];
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
  const preguntaEl = document.getElementById(`test-${cat}-pregunta`);
  if(preguntaEl){
    preguntaEl.textContent = p.q;
    if(audioTxt && (cat === 'senyals' || cat === 'trampes' || cat === 'normes')){
      preguntaEl.innerHTML = `${p.q} <button class="btn-audio" onclick="parlar('${audioTxt.replace(/'/g, "\\'")}')" style="background:#00D9FF; border:none; border-radius:50%; width:32px; height:32px; cursor:pointer;">🔊</button>`;
    }
  }
  const acEl = document.getElementById(`test-${cat}-aciertos`); if(acEl) acEl.textContent = s.encerts;
  const rachaEl = document.getElementById(`test-${cat}-racha`); if(rachaEl) rachaEl.textContent = s.ratxa;
  const scoreEl = document.getElementById(`test-${cat}-score`); if(scoreEl) scoreEl.textContent = s.puntuacio;
  const progEl = document.getElementById(`test-${cat}-progress`); if(progEl) progEl.style.width = `${((s.idx % preguntes.length)/preguntes.length)*100}%`;
  const cont = document.getElementById(`test-${cat}-opciones`);
  if(!cont) return;
  cont.innerHTML = '';
  const fb = document.getElementById(`test-${cat}-feedback`); if(fb) fb.textContent = '';
  const btnSig = document.getElementById(`btn-sig-test-${cat}`);
  if(btnSig){ btnSig.disabled = true; btnSig.style.opacity = '0.4'; btnSig.style.cursor = 'not-allowed'; }
  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { respondreTest_V94(cat, i, this); };
    cont.appendChild(div);
  });
}

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
    const fb = document.getElementById(`test-${cat}-feedback`);
    if(fb){ fb.className = 'feedback acierto'; fb.textContent = `✅ CORRECTE! +${10+(s.ratxa*2)} pts`; }
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    cont.querySelectorAll('.opcio')[p.ok].classList.add('correcta');
    const fb = document.getElementById(`test-${cat}-feedback`);
    if(fb){ fb.className = 'feedback fallo'; fb.textContent = '❌ FALLO'; }
    mostrarEmoji(false, el);
    s.ratxa = 0;
    registrarFallada(cat, p.subtema, p.pag);
  }
  actualizarMetricasTest(cat, preguntaId, correcte);
  registrarHistorialPregunta(preguntaId, correcte);
  const btnSig = document.getElementById(`btn-sig-test-${cat}`);
  if(btnSig){ btnSig.disabled = false; btnSig.style.opacity = '1'; btnSig.style.cursor = 'pointer'; }
  actualitzarCoins();
  guardar();
  const tipDiv = document.getElementById(`test-${cat}-tip`);
  if(tipDiv && p.tip){
    tipDiv.innerHTML = `💡 TIP: ${p.tip}`;
    tipDiv.style.display = 'block';
    tipDiv.style.border = '2px solid #00D9FF';
    tipDiv.style.background = '#fff9c4';
    tipDiv.style.color = '#000';
    tipDiv.style.padding = '10px';
    tipDiv.style.borderRadius = '8px';
    tipDiv.style.marginTop = '10px';
  }
}

function seguentTest(e, cat) {
  e.preventDefault();
  estat.test[cat].idx++;
  carregarPregunta(cat);
}

function carregarSituacio(cat) {
  if(!cat) cat = sitCategoriaActiva;
  const s = estat.sit[cat];
  if(typeof SITUACIONS === 'undefined' ||!SITUACIONS[cat]) return;
  const casos = barrejarArray(SITUACIONS[cat]);
  if(!casos || casos.length === 0) return;
  const pOriginal = casos[s.idx % casos.length];
  const opcionsBarrejades = barrejarArray(pOriginal.a);
  const textCorrecte = pOriginal.a[pOriginal.ok];
  const nouIndexCorrecte = opcionsBarrejades.indexOf(textCorrecte);
  const p = {...pOriginal, a: opcionsBarrejades, ok: nouIndexCorrecte};
  s.current = p;
  const preEl = document.getElementById(`sit-${cat}-pregunta`); if(preEl) preEl.textContent = p.q;
  const acEl = document.getElementById(`sit-${cat}-aciertos`); if(acEl) acEl.textContent = s.encerts;
  const scEl = document.getElementById(`sit-${cat}-score`); if(scEl) scEl.textContent = s.puntuacio;
  const prEl = document.getElementById(`sit-${cat}-progress`); if(prEl) prEl.style.width = `${((s.idx % casos.length)/casos.length)*100}%`;
  const cont = document.getElementById(`sit-${cat}-opciones`);
  if(!cont) return;
  cont.innerHTML = '';
  const fb = document.getElementById(`sit-${cat}-feedback`); if(fb) fb.textContent = '';
  const btnSig = document.getElementById(`btn-sig-sit-${cat}`);
  if(btnSig){ btnSig.disabled = true; btnSig.style.opacity = '0.4'; btnSig.style.cursor = 'not-allowed'; }
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
    const fb = document.getElementById(`sit-${cat}-feedback`); if(fb){ fb.className = 'feedback acierto'; fb.textContent = `✅ CORRECTE! +15 pts`; }
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    cont.querySelectorAll('.opcio')[p.ok].classList.add('correcta');
    const fb = document.getElementById(`sit-${cat}-feedback`); if(fb){ fb.className = 'feedback fallo'; fb.textContent = '❌ FALLO'; }
    mostrarEmoji(false, el);
    registrarFallada('examen', p.subtema, p.pag);
  }
  actualizarMetricasCaso(cat, preguntaId, correcte);
  registrarHistorialPregunta(preguntaId, correcte);
  const btnSig = document.getElementById(`btn-sig-sit-${cat}`);
  if(btnSig){ btnSig.disabled = false; btnSig.style.opacity = '1'; btnSig.style.cursor = 'pointer'; }
  actualitzarCoins();
  guardar();
}

function seguentSituacio(e, cat) {
  e.preventDefault();
  estat.sit[cat].idx++;
  carregarSituacio(cat);
}

// ===== V9.8.6 EXAMEN HÍBRID - AGARRA SENYALS + NORMES + SITUACIONS =====
function iniciarExamen(e) {
  if(!potFerTests()) return mostrarPopupPase();
  let totes = [];
  if(typeof PREGUNTES!== 'undefined') {
    for(let key in PREGUNTES) {
      if(Array.isArray(PREGUNTES[key])) totes = totes.concat(PREGUNTES[key]);
    }
  }
  if(typeof SITUACIONS!== 'undefined' && SITUACIONS.clima) {
    totes = totes.concat(SITUACIONS.clima.slice(0,5));
  }
  console.log("V9.8.6 HÍBRID EXAMEN - Total banc:", totes.length);
  if(totes.length < 30) { alert(`Falten preguntes. Tens ${totes.length}, necessites 30 mínim.`); return; }
  estat.examen.preguntes = barrejarArray(totes).slice(0, 30);
  estat.examen.activa = true;
  estat.examen.index = 0;
  estat.examen.encerts = 0;
  estat.examen.fallos = 0;
  estat.examen.categoria = 'general';
  const btnIni = document.getElementById('btn-iniciar-examen'); if(btnIni) btnIni.style.display = 'none';
  const btnSig = document.getElementById('btn-sig-examen'); if(btnSig) btnSig.style.display = 'block';
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
    const timerEl = document.getElementById('examen-timer'); if(timerEl) timerEl.textContent = `${min.toString().padStart(2,'0')}:${seg.toString().padStart(2,'0')}`;
    if(estat.examen.temps <= 0) finalitzarExamen();
  }, 1000);
}

function carregarPreguntaExamen() {
  if(estat.examen.index >= 30) return finalitzarExamen();
  const pOriginal = estat.examen.preguntes[estat.examen.index];
  const opcionsOriginales = pOriginal.a || pOriginal.opcions;
  const indexCorrectaOriginal = pOriginal.ok!== undefined? pOriginal.ok : pOriginal.correcta;
  const textCorrecte = opcionsOriginales[indexCorrectaOriginal];
  const opcionsBarrejades = barrejarArray(opcionsOriginales);
  const nouIndexCorrecte = opcionsBarrejades.indexOf(textCorrecte);
  const p = {...pOriginal, a: opcionsBarrejades, ok: nouIndexCorrecte, q: pOriginal.q || pOriginal.pregunta, id: pOriginal.id || ('examen_' + estat.examen.index)};
  estat.examen.preguntes[estat.examen.index] = p;
  pintarImatgeSiExisteix('examen', p);
  const numEl = document.getElementById('examen-num'); if(numEl) numEl.textContent = estat.examen.index + 1;
  const acEl = document.getElementById('examen-aciertos'); if(acEl) acEl.textContent = estat.examen.encerts;
  const progEl = document.getElementById('examen-progress'); if(progEl) progEl.style.width = `${(estat.examen.index/30)*100}%`;
  const preEl = document.getElementById('examen-pregunta'); if(preEl) preEl.textContent = p.q;
  const cont = document.getElementById('examen-opciones');
  if(!cont) return;
  cont.innerHTML = '';
  const btnSig = document.getElementById('btn-sig-examen');
  if(btnSig){ btnSig.disabled = true; btnSig.style.opacity = '0.4'; btnSig.style.cursor = 'not-allowed'; }
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
  if(btnSig){ btnSig.disabled = false; btnSig.style.opacity = '1'; btnSig.style.cursor = 'pointer'; }
  const acEl = document.getElementById('examen-aciertos'); if(acEl) acEl.textContent = estat.examen.encerts;
  actualitzarCoins();
  guardar();
  const tipDiv = document.getElementById('examen-tip');
  if(tipDiv && p.tip){
    tipDiv.innerHTML = `💡 TIP: ${p.tip}`;
    tipDiv.style.display = 'block';
    tipDiv.style.border = '2px solid #00D9FF';
    tipDiv.style.background = '#fff9c4';
    tipDiv.style.color = '#000';
    tipDiv.style.padding = '10px';
    tipDiv.style.borderRadius = '8px';
    tipDiv.style.marginTop = '10px';
  }
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
  if(!res) return;
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
  const resEl = document.getElementById('examen-resultat'); if(resEl) resEl.style.display = 'none';
  const btnIni = document.getElementById('btn-iniciar-examen'); if(btnIni) btnIni.style.display = 'block';
  const btnSig = document.getElementById('btn-sig-examen'); if(btnSig) btnSig.style.display = 'none';
  const preEl = document.getElementById('examen-pregunta'); if(preEl) preEl.textContent = "Prem Inicia l'Examen";
  const opEl = document.getElementById('examen-opciones'); if(opEl) opEl.innerHTML = '';
  const numEl = document.getElementById('examen-num'); if(numEl) numEl.textContent = '0';
  const acEl = document.getElementById('examen-aciertos'); if(acEl) acEl.textContent = '0';
  const progEl = document.getElementById('examen-progress'); if(progEl) progEl.style.width = '0%';
  const timerEl = document.getElementById('examen-timer'); if(timerEl) timerEl.textContent = '30:00';
  const imgEl = document.getElementById('examen-imagen'); if(imgEl) imgEl.innerHTML = '';
  const tipEl = document.getElementById('examen-tip'); if(tipEl){ tipEl.innerHTML=''; tipEl.style.display='none'; }
}

//... RESTO FUNCIONES GARATGE / BOTIGA / TIPS / TEMARI / GRAFICA igual que V9.8.5...
function carregarGaratge() {
  const cont = document.getElementById('garage-lista'); if(!cont) return;
  cont.innerHTML = '';
  let hpTotal = 90;
  estat.accessoris.forEach(id => {
    const acc = (typeof ACCESSORIS!== 'undefined')? ACCESSORIS.find(a => a.id === id) : null;
    if(acc) hpTotal += acc.hp;
  });
  const scoreEl = document.getElementById('garage-score'); if(scoreEl) scoreEl.textContent = `🏎️ ${hpTotal} CV`;
  if(typeof COTXES === 'undefined') return;
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
  guardar(); actualitzarCoins(); carregarGaratge();
}
function carregarBotiga() {
  const cont = document.getElementById('emoji-tienda'); if(!cont) return;
  cont.innerHTML = '';
  if(typeof ACCESSORIS!== 'undefined'){
    ACCESSORIS.forEach(acc => {
      const comprat = estat.accessoris.includes(acc.id);
      const div = document.createElement('div');
      div.className = 'emoji-item' + (comprat? ' locked' : '');
      div.innerHTML = `<div style="font-size:40px">${acc.emoji}</div><div>${acc.nom}</div><div style="color:#667eea">+${acc.hp} CV</div>${!comprat? `<button class="btn-buy" onclick="comprarAccessoris('${acc.id}')">Comprar ${acc.preu}💰</button>` : '<div style="color:#2ecc71">✓ Comprat</div>'}`;
      cont.appendChild(div);
    });
  }
  if(typeof EMOJI_BOTIGA!== 'undefined'){
    EMOJI_BOTIGA.forEach(emoji => {
      const comprat = estat.emojis.includes(emoji.id);
      const div = document.createElement('div');
      div.className = 'emoji-item' + (comprat? ' locked' : '');
      div.innerHTML = `<div style="font-size:40px">${emoji.emoji}</div><div>${emoji.nom}</div><div style="color:#667eea">Cosmètic</div>${!comprat? `<button class="btn-buy" onclick="comprarEmoji('${emoji.id}')">Comprar ${emoji.preu}💰</button>` : '<div style="color:#2ecc71">✓ Comprat</div>'}`;
      cont.appendChild(div);
    });
  }
}
function comprarAccessoris(id) {
  const acc = ACCESSORIS.find(a => a.id === id);
  if(!acc) return;
  if(estat.coins < acc.preu) { alert('No tens prous coins'); return; }
  estat.coins -= acc.preu; estat.accessoris.push(id); guardar(); actualitzarCoins(); carregarBotiga();
}
function comprarEmoji(id) {
  const emoji = EMOJI_BOTIGA.find(e => e.id === id);
  if(!emoji) return;
  if(estat.coins < emoji.preu) { alert('No tens prous coins'); return; }
  estat.coins -= emoji.preu; estat.emojis.push(id); guardar(); actualitzarCoins(); carregarBotiga();
}
function carregarTips() { if(typeof TIPS === 'undefined') return; tipsData = TIPS; currentTip = 0; mostrarTip(); }
function mostrarTip() { if (tipsData.length === 0) return; const tip = tipsData[currentTip]; const contentEl = document.getElementById('tip-content'); if(contentEl) contentEl.innerHTML = `<div class="tip-emoji">${tip.emoji}</div><div class="tip-text">${tip.txt}</div>`; const counterEl = document.getElementById('tip-counter'); if(counterEl) counterEl.textContent = `${currentTip + 1} / ${tipsData.length}`; }
function nextTip(e) { if(e) e.preventDefault(); currentTip = (currentTip + 1) % tipsData.length; mostrarTip(); }
function prevTip(e) { if(e) e.preventDefault(); currentTip = (currentTip - 1 + tipsData.length) % tipsData.length; mostrarTip(); }
function carregarTemari() {
  const container = document.getElementById('temari-lista'); if(!container) return;
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
function dibujarGraficaEvolucion() {
  const canvas = document.getElementById('grafica-evolucion'); if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const dades = getDadesEvolucio();
  if(canvas.width === 0) canvas.width = canvas.offsetWidth || 300;
  if(canvas.height === 0) canvas.height = 200;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if(dades.length === 0){ ctx.fillStyle = '#666'; ctx.font = '14px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('Fes tests 2 dies per veure evolució', canvas.width/2, canvas.height/2); return; }
  ctx.strokeStyle = '#333'; ctx.lineWidth = 1;
  for(let i = 0; i <= 4; i++) { const y = 30 + (i * (canvas.height-60)/4); ctx.beginPath(); ctx.moveTo(30, y); ctx.lineTo(canvas.width-30, y); ctx.stroke(); ctx.fillStyle = '#666'; ctx.font = '10px sans-serif'; ctx.textAlign = 'left'; ctx.fillText((100 - i*25) + '%', 5, y+3); }
  ctx.strokeStyle = '#00D9FF'; ctx.lineWidth = 3; ctx.beginPath();
  dades.forEach((d,i)=>{ const x = 30 + (i * (canvas.width-60)/Math.max(1, dades.length-1)); const y = canvas.height - 30 - (d.global/100 * (canvas.height-60)); if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y); });
  ctx.stroke();
  dades.forEach((d,i)=>{ const x = 30 + (i * (canvas.width-60)/Math.max(1, dades.length-1)); const y = canvas.height - 30 - (d.global/100 * (canvas.height-60)); ctx.fillStyle = '#00D9FF'; ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.fill(); ctx.fillStyle = '#fff'; ctx.font = '11px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(d.dia, x, canvas.height-10); ctx.fillText(d.global+'%', x, y-10); });
}
function mostrarIntro(){}
function actualitzarMissatgeMotivacional() { const missatges = ["Vas per bon camí 💪","Cada fallo et fa més fort 🔥","L'examen DGT és teu 🚗","No paris ara 💎","Concentra't i aprovaràs 👑"]; const msg = missatges[Math.floor(Math.random() * missatges.length)]; const el = document.getElementById('motivacio'); if(el) el.textContent = msg; }
function canviarTab_V94(e, tab) {
  const tabTemari = document.getElementById('tab-temari');
  if(tabTemari && tabTemari.classList.contains('active') && tempsIniciTemari!== null) {
    const minutsPassats = (Date.now() - tempsIniciTemari) / 1000 / 60;
    estat.stats.tempsEstudiatAvui += minutsPassats; tempsIniciTemari = null; guardar();
  }
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const targetTab = document.getElementById('tab-' + tab); if(targetTab) targetTab.classList.add('active');
  if(e && e.target) { const btn = e.target.closest('.tab-btn'); if(btn) btn.classList.add('active'); }
  if(tab === 'garage') carregarGaratge();
  if(tab === 'tienda') carregarBotiga();
  if(tab === 'tips') carregarTips();
  if(tab === 'temari') { carregarTemari(); iniciarComptadorTemari(); }
  if(tab === 'test') carregarPregunta('general');
  if(tab === 'situaciones') carregarSituacio(sitCategoriaActiva);
  if(tab === 'estadistiques') { actualitzarEstadistiques_V94(); actualitzarPaseUI(); }
  if(['test', 'situaciones', 'examen'].includes(tab) &&!potFerTests()) { mostrarPopupPase(); }
}
function canviarSubTab(e, tab, subtab) {
  const tabId = tab === 'sit'? 'situaciones' : tab === 'stats'? 'estadistiques' : tab;
  const contenidor = document.getElementById('tab-' + tabId); if(!contenidor) return;
  contenidor.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
  contenidor.querySelectorAll('.sub-content').forEach(c => c.classList.remove('active'));
  if(e && e.target) e.target.classList.add('active');
  const subEl = document.getElementById(`${tab === 'test'? 'test' : tab === 'stats'? 'stats' : 'sit'}-${subtab}`); if(subEl) subEl.classList.add('active');
  if(tab === 'test') carregarPregunta(subtab);
  if(tab === 'sit') carregarSituacio(subtab);
  if(tab === 'stats') actualitzarEstadistiques_V94();
}
function mostrarEmoji(encert, element) {
  if(typeof EMOJIS_ENCERT === 'undefined' || typeof EMOJIS_FALLO === 'undefined') return;
  const llista = encert? EMOJIS_ENCERT : EMOJIS_FALLO;
  const emoji = llista[Math.floor(Math.random() * llista.length)];
  const span = document.createElement('span');
  span.textContent = emoji;
  span.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:32px;animation:bounceIn 0.4s;pointer-events:none;z-index:999;';
  element.style.position = 'relative'; element.appendChild(span);
  setTimeout(() => span.remove(), 600);
  if(navigator.vibrate) navigator.vibrate(encert? [30,20,30] : 100);
}
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(reg => console.log('SW registrat')).catch(err => console.log('SW error:', err));
  });
}