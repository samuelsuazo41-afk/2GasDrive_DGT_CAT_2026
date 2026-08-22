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
  // ========= PELIGRO P-1 A P-50 = 30 BASE + 5 TRAMPA = 35 =========
  // 1. INTERSECCIONES P-01
  { id: "P-1", categoria: "peligro", pregunta: "Què indica aquesta senyal P-1 de PERILL?", opcions: ["Intersecció amb prioritat a la dreta", "Intersecció amb prioritat a l'esquerra", "Glorieta"], correcta: 0, codi: "P-1", nombre_senal: "INTERSECCION CON PRIORIDAD A LA DERECHA", tip: "💡 APREN: P-1 = Creu. Regla general: Prioritat el de la DRETA. OJO: A les glorietes ja no aplica", audio: "Senyal P-1 de perill. Intersecció amb prioritat a la dreta.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-1a", categoria: "peligro", pregunta: "Què indica aquesta senyal P-1a de PERILL?", opcions: ["Intersecció amb prioritat a l'esquerra", "Intersecció amb prioritat a la dreta", "Glorieta"], correcta: 0, codi: "P-1a", nombre_senal: "INTERSECCION CON PRIORIDAD A LA IZQUIERDA", tip: "💡 TRAMPA: P-1a = Creu invertida. Aquí té prioritat el de L'ESQUERRA. És la única", audio: "Senyal P-1a de perill. Intersecció amb prioritat a l'esquerra.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-1b", categoria: "peligro", pregunta: "Què indica aquesta senyal P-1b de PERILL?", opcions: ["Incorporació per la dreta", "Incorporació per l'esquerra", "Desviament"], correcta: 0, codi: "P-1b", nombre_senal: "INCORPORACION POR LA DERECHA", tip: "💡 APREN: P-1b = Entra 1 carril per la DRETA. Vigila els que s'incorporen", audio: "Senyal P-1b de perill. Incorporació per la dreta.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-1c", categoria: "peligro", pregunta: "Què indica aquesta senyal P-1c de PERILL?", opcions: ["Incorporació per l'esquerra", "Incorporació per la dreta", "Desviament"], correcta: 0, codi: "P-1c", nombre_senal: "INCORPORACION POR LA IZQUIERDA", tip: "💡 APREN: P-1c = Entra 1 carril per L'ESQUERRA. Poc habitual", audio: "Senyal P-1c de perill. Incorporació per l'esquerra.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-1d", categoria: "peligro", pregunta: "Què indica aquesta senyal P-1d de PERILL?", opcions: ["Confluència per la dreta", "Confluència per l'esquerra", "Desviament"], correcta: 0, codi: "P-1d", nombre_senal: "CONFLUENCIA POR LA DERECHA", tip: "💡 APREN: P-1d = 2 carrils es fan 1 per la DRETA. Has de cedir", audio: "Senyal P-1d de perill. Confluència per la dreta.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-1e", categoria: "peligro", pregunta: "Què indica aquesta senyal P-1e de PERILL?", opcions: ["Confluència per l'esquerra", "Confluència per la dreta", "Desviament"], correcta: 0, codi: "P-1e", nombre_senal: "CONFLUENCIA POR LA IZQUIERDA", tip: "💡 APREN: P-1e = 2 carrils es fan 1 per L'ESQUERRA. Els de l'esquerra cedeixen", audio: "Senyal P-1e de perill. Confluència per l'esquerra.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-2", categoria: "peligro", pregunta: "Què indica aquesta senyal P-2 de PERILL?", opcions: ["Glorieta", "Intersecció", "Rotonda"], correcta: 0, codi: "P-2", nombre_senal: "GLORIETA", tip: "💡 TRAMPA DGT: P-2 Glorieta. Regla nova: Prioritat el que CIRCULA DINS. El de fora ha de cedir", audio: "Senyal P-2 de perill. Glorieta.", panel_id: "P-01", ruta_panel: "P-01_INTERSECCIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // 2. PASO A NIVEL P-02
  { id: "P-9b", categoria: "peligro", pregunta: "Què indica aquesta senyal P-9b de PERILL?", opcions: ["Pas a nivell amb barreres", "Pas a nivell sense barreres", "Tren"], correcta: 0, codi: "P-9b", nombre_senal: "PASO A NIVEL CON BARRERAS", tip: "💡 APREN: P-9b = Amb barreres. Veuràs les barreres baixant. Màxima precaució", audio: "Senyal P-9b de perill. Pas a nivell amb barreres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-9c", categoria: "peligro", pregunta: "Què indica aquesta senyal P-9c de PERILL?", opcions: ["Pas a nivell sense barreres", "Pas a nivell amb barreres", "Tren"], correcta: 0, codi: "P-9c", nombre_senal: "PASO A NIVEL SIN BARRERAS", tip: "💡 TRAMPA: P-9c = Sense barreres. CLAU: Creu de Sant Andreu. Has de parar i mirar", audio: "Senyal P-9c de perill. Pas a nivell sense barreres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-10a", categoria: "peligro", pregunta: "Què indica aquesta senyal P-10a de PERILL?", opcions: ["Proximitat pas a nivell 150m", "Proximitat pas a nivell 100m", "Proximitat pas a nivell 50m"], correcta: 0, codi: "P-10a", nombre_senal: "PROXIMIDAD PASO A NIVEL 150M", tip: "💡 TRAMPA: Compta ratlles. P-10a = 3 ratlles = 150m abans del pas a nivell", audio: "Senyal P-10a de perill. Proximitat pas a nivell a 150 metres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-10b", categoria: "peligro", pregunta: "Què indica aquesta senyal P-10b de PERILL?", opcions: ["Proximitat pas a nivell 100m", "Proximitat pas a nivell 150m", "Proximitat pas a nivell 50m"], correcta: 0, codi: "P-10b", nombre_senal: "PROXIMIDAD PASO A NIVEL 100M", tip: "💡 APREN: P-10b = 2 ratlles = 100m. Va baixant la distància", audio: "Senyal P-10b de perill. Proximitat pas a nivell a 100 metres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-10c", categoria: "peligro", pregunta: "Què indica aquesta senyal P-10c de PERILL?", opcions: ["Proximitat pas a nivell 50m", "Proximitat pas a nivell 100m", "Proximitat pas a nivell 150m"], correcta: 0, codi: "P-10c", nombre_senal: "PROXIMIDAD PASO A NIVEL 50M", tip: "💡 APREN: P-10c = 1 ratlla = 50m. Ja estàs a tocar del pas a nivell", audio: "Senyal P-10c de perill. Proximitat pas a nivell a 50 metres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-11", categoria: "peligro", pregunta: "Què indica aquesta senyal P-11 de PERILL?", opcions: ["Pas a nivell sense barreres", "Pas a nivell amb barreres", "Tren"], correcta: 0, codi: "P-11", nombre_senal: "PASO A NIVEL SIN BARRERAS", tip: "💡 APREN: P-11 = Igual que P-9c. Sense barreres = Creu de Sant Andreu. Obliga a parar", audio: "Senyal P-11 de perill. Pas a nivell sense barreres.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // 3. FERROCARRIL AEROPUERTO CURVAS P-03
  { id: "P-11a", categoria: "peligro", pregunta: "Què indica aquesta senyal P-11a de PERILL?", opcions: ["Sortida d'avions", "Aeroport", "Avió"], correcta: 0, codi: "P-11a", nombre_senal: "SALIDA DE AVIONES", tip: "💡 APREN: P-11a = Avió BAIXANT. Perill que enlairin o aterrin avions baixos", audio: "Senyal P-11a de perill. Sortida d'avions.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-12", categoria: "peligro", pregunta: "Què indica aquesta senyal P-12 de PERILL?", opcions: ["Aeroport", "Sortida d'avions", "Zona aèria"], correcta: 0, codi: "P-12", nombre_senal: "AEROPUERTO", tip: "💡 APREN: P-12 = Aeroport a prop. Soroll i trànsit de vehicles", audio: "Senyal P-12 de perill. Aeroport.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-13a", categoria: "peligro", pregunta: "Què indica aquesta senyal P-13a de PERILL?", opcions: ["Corba perillosa a la dreta", "Corba perillosa a l'esquerra", "Doble corba"], correcta: 0, codi: "P-13a", nombre_senal: "CURVA PELIGROSA A LA DERECHA", tip: "💡 TRAMPA: P-13a = Fletxa cap a la DRETA. Redueix velocitat", audio: "Senyal P-13a de perill. Corba perillosa a la dreta.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-13b", categoria: "peligro", pregunta: "Què indica aquesta senyal P-13b de PERILL?", opcions: ["Corba perillosa a l'esquerra", "Corba perillosa a la dreta", "Doble corba"], correcta: 0, codi: "P-13b", nombre_senal: "CURVA PELIGROSA A LA IZQUIERDA", tip: "💡 TRAMPA: P-13b = Fletxa cap a L'ESQUERRA. És el contrari de P-13a", audio: "Senyal P-13b de perill. Corba perillosa a l'esquerra.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-14a", categoria: "peligro", pregunta: "Què indica aquesta senyal P-14a de PERILL?", opcions: ["Doble corba primera a la dreta", "Doble corba primera a l'esquerra", "Corba tancada"], correcta: 0, codi: "P-14a", nombre_senal: "DOBLE CURVA PRIMERA A LA DERECHA", tip: "💡 APREN: P-14a = 2 fletxes. La PRIMERA va a la DRETA. Després esquerra", audio: "Senyal P-14a de perill. Doble corba primera a la dreta.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-14b", categoria: "peligro", pregunta: "Què indica aquesta senyal P-14b de PERILL?", opcions: ["Doble corba primera a l'esquerra", "Doble corba primera a la dreta", "Corba tancada"], correcta: 0, codi: "P-14b", nombre_senal: "DOBLE CURVA PRIMERA A LA IZQUIERDA", tip: "💡 APREN: P-14b = 2 fletxes. La PRIMERA va a L'ESQUERRA. Després dreta", audio: "Senyal P-14b de perill. Doble corba primera a l'esquerra.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-15", categoria: "peligro", pregunta: "Què indica aquesta senyal P-15 de PERILL?", opcions: ["Resalt", "Badén", "Bache"], correcta: 0, codi: "P-15", nombre_senal: "RESALTO", tip: "💡 APREN: P-15 = RESALT = Monticle. Redueix o et pegues cop. Triangle amb muntanya", audio: "Senyal P-15 de perill. Resalt.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // 4. TUNEL PENDIENTES P-04
  { id: "P-15a", categoria: "peligro", pregunta: "Què indica aquesta senyal P-15a de PERILL?", opcions: ["Badén", "Resalt", "Bache"], correcta: 0, codi: "P-15a", nombre_senal: "BADEN", tip: "💡 APREN: P-15a = BADÉN = Depressió/Vall. El contrari de Resalt. Triangle amb vall", audio: "Senyal P-15a de perill. Badén.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-15b", categoria: "peligro", pregunta: "Què indica aquesta senyal P-15b de PERILL?", opcions: ["Descenso peligroso", "Subida peligrosa", "Pendiente"], correcta: 0, codi: "P-15b", nombre_senal: "DESCENSO PELIGROSO", tip: "💡 APREN: P-15b = Baixada perillosa. Frena amb motor i vigila frens", audio: "Senyal P-15b de perill. Descens perillós.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-16a", categoria: "peligro", pregunta: "Què indica aquesta senyal P-16a de PERILL?", opcions: ["Subida peligrosa", "Descenso peligroso", "Pendiente"], correcta: 0, codi: "P-16a", nombre_senal: "SUBIDA PELIGROSA", tip: "💡 APREN: P-16a = Pujada perillosa. Perds potència. Vigila camions lents", audio: "Senyal P-16a de perill. Pujada perillosa.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-16b", categoria: "peligro", pregunta: "Què indica aquesta senyal P-16b de PERILL?", opcions: ["Estrechamiento por la derecha", "Estrechamiento por la izquierda", "Estrechamiento"], correcta: 0, codi: "P-16b", nombre_senal: "ESTRECHAMIENTO POR LA DERECHA", tip: "💡 TRAMPA: P-16b = S'estreta per la DRETA. La fletxa va cap a dins per la dreta", audio: "Senyal P-16b de perill. Estretament per la dreta.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-17", categoria: "peligro", pregunta: "Què indica aquesta senyal P-17 de PERILL?", opcions: ["Estrechamiento", "Estrechamiento por la izquierda", "Estrechamiento por la derecha"], correcta: 0, codi: "P-17", nombre_senal: "ESTRECHAMIENTO", tip: "💡 TRAMPA DGT: P-17 = S'estreta pels 2 COSTATS. P-17a = Només esquerra. P-16b = Només dreta", audio: "Senyal P-17 de perill. Estretament.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-17a", categoria: "peligro", pregunta: "Què indica aquesta senyal P-17a de PERILL?", opcions: ["Estrechamiento por la izquierda", "Estrechamiento", "Estrechamiento por la derecha"], correcta: 0, codi: "P-17a", nombre_senal: "ESTRECHAMIENTO POR LA IZQUIERDA", tip: "💡 TRAMPA: P-17a = Només s'estreta per L'ESQUERRA. Mira on apunta la fletxa", audio: "Senyal P-17a de perill. Estretament per l'esquerra.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-17b", categoria: "peligro", pregunta: "Què indica aquesta senyal P-17b de PERILL?", opcions: ["Túnel", "Pont", "Pas inferior"], correcta: 0, codi: "P-17b", nombre_senal: "TUNEL", tip: "💡 APREN: P-17b = TÚNEL a prop. Encén llums i vigila ventilació", audio: "Senyal P-17b de perill. Túnel.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // 5. OBRAS PEATONES P-05
  { id: "P-18", categoria: "peligro", pregunta: "Què indica aquesta senyal P-18 de PERILL?", opcions: ["Obras", "Desviament", "Carretera tallada"], correcta: 0, codi: "P-18", nombre_senal: "OBRAS", tip: "💡 TRAMPA: P-18 = OBRAS. Sempre reduir velocitat i precaució. Pot haver gent treballant", audio: "Senyal P-18 de perill. Obres.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-19", categoria: "peligro", pregunta: "Què indica aquesta senyal P-19 de PERILL?", opcions: ["Pavimento deslizante", "Obras", "Bache"], correcta: 0, codi: "P-19", nombre_senal: "PAVIMENTO DESLIZANTE", tip: "💡 APREN: P-19 = Paviment LLISCANT. Pluja, oli. No frenis de cop", audio: "Senyal P-19 de perill. Paviment lliscant.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-20a", categoria: "peligro", pregunta: "Què indica aquesta senyal P-20a de PERILL?", opcions: ["Peatones", "Niños", "Escuela"], correcta: 0, codi: "P-20a", nombre_senal: "PEATONES", tip: "💡 APREN: P-20a = VIANANTS. Zona amb molt pas de gent. Redueix", audio: "Senyal P-20a de perill. Vianants.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-20b", categoria: "peligro", pregunta: "Què indica aquesta senyal P-20b de PERILL?", opcions: ["Niños", "Peatones", "Escuela"], correcta: 0, codi: "P-20b", nombre_senal: "NIÑOS", tip: "💡 TRAMPA REAL DGT: P-20b = NENS. Màxim risc a ENTRADA I SORTIDA D'ESCOLA", audio: "Senyal P-20b de perill. Nens.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-20c", categoria: "peligro", pregunta: "Què indica aquesta senyal P-20c de PERILL?", opcions: ["Ciclistas", "Peatones", "Motos"], correcta: 0, codi: "P-20c", nombre_senal: "CICLISTAS", tip: "💡 APREN: P-20c = CICLISTES. Deixa 1.5m de distància en avançar", audio: "Senyal P-20c de perill. Ciclistes.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // 6. ESCUELA ANIMALES P-06
  { id: "P-21a", categoria: "peligro", pregunta: "Què indica aquesta senyal P-21a de PERILL?", opcions: ["Paso de animales domésticos", "Paso de animales salvajes", "Ganado"], correcta: 0, codi: "P-21a", nombre_senal: "PASO DE ANIMALES DOMESTICOS", tip: "💡 APREN: P-21a = Animals DOMÈSTICS. Vaca, ovella. Vigila ramats", audio: "Senyal P-21a de perill. Pas d'animals domèstics.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-21b", categoria: "peligro", pregunta: "Què indica aquesta senyal P-21b de PERILL?", opcions: ["Paso de animales salvajes", "Paso de animales domésticos", "Ciervo"], correcta: 0, codi: "P-21b", nombre_senal: "PASO DE ANIMALES SALVAJES", tip: "💡 APREN: P-21b = Animals SALVATGES. Cérvol, senglar. Surt de cop i de nit", audio: "Senyal P-21b de perill. Pas d'animals salvatges.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-22a", categoria: "peligro", pregunta: "Què indica aquesta senyal P-22a de PERILL?", opcions: ["Viento transversal", "Viento", "Ráfaga"], correcta: 0, codi: "P-22a", nombre_senal: "VIENTO TRANSVERSAL", tip: "💡 APREN: P-22a = VENT LATERAL. Agafa fort el volant. Perill per motos i alts", audio: "Senyal P-22a de perill. Vent transversal.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-22b", categoria: "peligro", pregunta: "Què indica aquesta senyal P-22b de PERILL?", opcions: ["Proyección de gravilla", "Piedras", "Caída"], correcta: 0, codi: "P-22b", nombre_senal: "PROYECCION DE GRAVILLA", tip: "💡 APREN: P-22b = PROJECCIÓ DE GRAVA. Augmenta distància per no trencar parabrises", audio: "Senyal P-22b de perill. Projecció de grava.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-23", categoria: "peligro", pregunta: "Què indica aquesta senyal P-23 de PERILL?", opcions: ["Circulación en los dos sentidos", "Doble sentido", "Cruce"], correcta: 0, codi: "P-23", nombre_senal: "CIRCULACION EN LOS DOS SENTIDOS", tip: "💡 APREN: P-23 = FI de calçada única. Passes a 2 sentits. Extrema precaució", audio: "Senyal P-23 de perill. Circulació en els dos sentits.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-24", categoria: "peligro", pregunta: "Què indica aquesta senyal P-24 de PERILL?", opcions: ["Embotezamiento", "Retención", "Tráfico"], correcta: 0, codi: "P-24", nombre_senal: "EMBOTELLAMIENTO", tip: "💡 APREN: P-24 = EMBÚS/RETENCIÓ. Trànsit aturat a prop. Frena suau", audio: "Senyal P-24 de perill. Embús.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
  { id: "P-24a", categoria: "peligro", pregunta: "Què indica aquesta senyal P-24a de PERILL?", opcions: ["Accidente", "Choque", "Peligro"], correcta: 0, codi: "P-24a", nombre_senal: "ACCIDENTE", tip: "💡 APREN: P-24a = ACCIDENT. Pot haver vehicles parats i gent a la calçada", audio: "Senyal P-24a de perill. Accident.", panel_id: "P-06", ruta_panel: "P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

  // 7. OTROS PELIGROS P-07
 // 7. OTROS PELIGROS P-07
{ id: "P-32", categoria: "peligro", pregunta: "Què indica aquesta senyal P-32 de PERILL?", opcions: ["Peligro genérico", "Otro peligro", "Atención"], correcta: 0, codi: "P-32", nombre_senal: "PELIGRO", tip: "💡 APREN: P-32 = PERILL GENÈRIC. Triangle amb !. Estigues atent, no especifica quin perill", audio: "Senyal P-32 de perill. Perill genèric.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-33", categoria: "peligro", pregunta: "Què indica aquesta senyal P-33 de PERILL?", opcions: ["Pavimento deslizante por hielo", "Hielo", "Nieve"], correcta: 0, codi: "P-33", nombre_senal: "PAVIMENTO DESLIZANTE POR HIELO", tip: "💡 APREN: P-33 = GEL/NEU. Conducció extrema. Cadenes obligatòries si cal", audio: "Senyal P-33 de perill. Paviment lliscant per gel.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-34", categoria: "peligro", pregunta: "Què indica aquesta senyal P-34 de PERILL?", opcions: ["Niebla", "Visibilidad reducida", "Nube"], correcta: 0, codi: "P-34", nombre_senal: "NIEBLA", tip: "💡 APREN: P-34 = BOIRA. Redueix velocitat i encén llums antiboira", audio: "Senyal P-34 de perill. Boira.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-35", categoria: "peligro", pregunta: "Què indica aquesta senyal P-35 de PERILL?", opcions: ["Avería", "Taller", "Coche roto"], correcta: 0, codi: "P-35", nombre_senal: "AVERIA", tip: "💡 APREN: P-35 = AVARIA. Pot haver vehicles parats al voral", audio: "Senyal P-35 de perill. Avaria.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "P-50", categoria: "peligro", pregunta: "Què indica aquesta senyal P-50 de PERILL?", opcions: ["Otros peligros", "Peligro", "Atención"], correcta: 0, codi: "P-50", nombre_senal: "OTROS PELIGROS", tip: "💡 TRAMPA: P-50 = Triangle BUIT. Indica un perill no definit a les altres P", audio: "Senyal P-50 de perill. Altres perills.", panel_id: "P-07", ruta_panel: "P-07_OTROS_PELIGROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// ========= TRAMPES PELIGRO = 5 TRAMPES =========
{ id: "T-P03", categoria: "trampa", pregunta: "P-13a vs P-13b. Quina és a la dreta?", opcions: ["P-13a", "P-13b", "Les 2"], correcta: 0, codi: "P-13a", nombre_senal: "CURVA DERECHA", tip: "💡 TRAMPA DGT: P-13a = dreta. P-13b = esquerra. Mira la direcció de la fletxa", audio: "Trampa de corbes.", panel_id: "P-03", ruta_panel: "P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-P04", categoria: "trampa", pregunta: "P-18 Obras. Has de reduir velocitat?", opcions: ["Sí", "No", "Només si hi ha gent"], correcta: 0, codi: "P-18", nombre_senal: "OBRAS", tip: "💡 TRAMPA DGT: P-18 = OBRAS. Sempre SÍ. Precaució encara que no vegis ningú", audio: "Trampa d'obres.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-P05", categoria: "trampa", pregunta: "P-20b Niños. A quina hora hi ha més risc?", opcions: ["Nit", "Entrada i sortida d'escola", "Migdia"], correcta: 1, codi: "P-20b", nombre_senal: "NIÑOS", tip: "💡 TRAMPA REAL DGT: P-20b = NENS. La resposta és ENTRADA I SORTIDA D'ESCOLA", audio: "Trampa de nens.", panel_id: "P-05", ruta_panel: "P-05_OBRAS_RESBALADIZO_PEATONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-P06", categoria: "trampa", pregunta: "P-17 vs P-17a. Quina s'estreta pels 2 costats?", opcions: ["P-17", "P-17a", "P-16b"], correcta: 0, codi: "P-17", nombre_senal: "ESTRECHAMIENTO", tip: "💡 TRAMPA DGT: P-17 = Els 2. P-17a = Només esquerra. P-16b = Només dreta", audio: "Trampa d'estretaments.", panel_id: "P-04", ruta_panel: "P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-P07", categoria: "trampa", pregunta: "P-10a, P-10b, P-10c. Quina està més a prop del pas a nivell?", opcions: ["P-10a", "P-10b", "P-10c"], correcta: 2, codi: "P-10c", nombre_senal: "PROXIMIDAD 50M", tip: "💡 TRAMPA: 3 ratlles=150m. 2=100m. 1=50m. P-10c està més a prop", audio: "Trampa de proximitat.", panel_id: "P-02", ruta_panel: "P-02_PASO_A_NIVEL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// ========= REGLAMENTARIA R-1 A R-516 = 129 BASE + 30 TRAMPA = 159 =========
// 1. PRIORIDAD R-01
{ id: "R-1", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-1 de REGLAMENTACIÓ?", opcions: ["Cede el paso", "Stop", "Prioridad"], correcta: 0, codi: "R-1", nombre_senal: "CEDA EL PASO", tip: "💡 APREN: R-1 = Triangle invertit. Cedeix el pas. NO obligatori parar si no ve ningú", audio: "Senyal R-1 de reglamentació. Cede el paso.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-2", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-2 de REGLAMENTACIÓ?", opcions: ["Stop", "Cede el paso", "Prohibido"], correcta: 0, codi: "R-2", nombre_senal: "STOP", tip: "💡 TRAMPA DGT: R-2 = Octàgon vermell. Parada OBLIGATÒRIA de 3s abans de la línia", audio: "Senyal R-2 de reglamentació. Stop.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-3", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-3 de REGLAMENTACIÓ?", opcions: ["Prioridad al sentido contrario", "Prioridad", "Cede el paso"], correcta: 0, codi: "R-3", nombre_senal: "PRIORIDAD AL SENTIDO CONTRARIO", tip: "💡 APREN: R-3 = Tu tens prioritat. Fletxa negra petita i vermella gran", audio: "Senyal R-3 de reglamentació. Prioritat al sentit contrari.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-4", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-4 de REGLAMENTACIÓ?", opcions: ["Fin de prioridad", "Cede el paso", "Stop"], correcta: 0, codi: "R-4", nombre_senal: "FIN DE PRIORIDAD", tip: "💡 TRAMPA: R-4 = Barra sobre R-3. Aquí ja NO tens prioritat. Aplica regla general", audio: "Senyal R-4 de reglamentació. Fi de prioritat.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-5", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-5 de REGLAMENTACIÓ?", opcions: ["Prioridad al sentido contrario", "Cede el paso", "Stop"], correcta: 0, codi: "R-5", nombre_senal: "PRIORIDAD AL SENTIDO CONTRARIO", tip: "💡 TRAMPA: R-5 = Tu has de CEDIR. Fletxa negra gran i vermella petita", audio: "Senyal R-5 de reglamentació. Prioritat al sentit contrari.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// 2. PROHIBICION VEHICULOS R-02
{ id: "R-106", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-106 de REGLAMENTACIÓ?", opcions: ["Entrada prohibida a vehículos de motor", "Prohibido camiones", "Prohibido motos"], correcta: 0, codi: "R-106", nombre_senal: "ENTRADA PROHIBIDA A VEHICULOS DE MOTOR", tip: "💡 APREN: R-106 = Prohibit COTXES i MOTOS. NO afecta a bicis ni vianants", audio: "Senyal R-106 de reglamentació. Entrada prohibida a vehicles de motor.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-107", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-107 de REGLAMENTACIÓ?", opcions: ["Entrada prohibida a camiones", "Prohibido turismos", "Prohibido motos"], correcta: 0, codi: "R-107", nombre_senal: "ENTRADA PROHIBIDA A CAMIONES", tip: "💡 APREN: R-107 = Prohibit CAMIONS. Turismes i motos SÍ poden passar", audio: "Senyal R-107 de reglamentació. Entrada prohibida a camions.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-108", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-108 de REGLAMENTACIÓ?", opcions: ["Entrada prohibida a motocicletas", "Prohibido coches", "Prohibido bicis"], correcta: 0, codi: "R-108", nombre_senal: "ENTRADA PROHIBIDA A MOTOCICLETAS", tip: "💡 APREN: R-108 = Prohibit MOTOS. Cotxes i bicis SÍ poden", audio: "Senyal R-108 de reglamentació. Entrada prohibida a motocicletes.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-109", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-109 de REGLAMENTACIÓ?", opcions: ["Entrada prohibida a ciclomotores", "Prohibido bicis", "Prohibido coches"], correcta: 0, codi: "R-109", nombre_senal: "ENTRADA PROHIBIDA A CICLOMOTORES", tip: "💡 APREN: R-109 = Prohibit CICLOMOTORS fins 50cc. Motos grans SÍ", audio: "Senyal R-109 de reglamentació. Entrada prohibida a ciclomotors.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// 3. PROHIBICION OTROS R-03
{ id: "R-111", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-111 de REGLAMENTACIÓ?", opcions: ["Entrada prohibida a vehículos de tracción animal", "Prohibido animales", "Prohibido carros"], correcta: 0, codi: "R-111", nombre_senal: "ENTRADA PROHIBIDA A VEHICULOS DE TRACCION ANIMAL", tip: "💡 APREN: R-111 = Prohibit CAVALLS i CARROS. Cavall dibuixat", audio: "Senyal R-111 de reglamentació. Entrada prohibida a vehicles de tracció animal.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-114", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-114 de REGLAMENTACIÓ?", opcions: ["Entrada prohibida a bicicletas", "Prohibido peatones", "Prohibido motos"], correcta: 0, codi: "R-114", nombre_senal: "ENTRADA PROHIBIDA A BICICLETAS", tip: "💡 TRAMPA: R-114 = Prohibit BICIS. Patinets han d'anar a carril bici", audio: "Senyal R-114 de reglamentació. Entrada prohibida a bicicletes.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-116", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-116 de REGLAMENTACIÓ?", opcions: ["Entrada prohibida a vehículos agrícolas", "Prohibido tractores", "Prohibido camiones"], correcta: 0, codi: "R-116", nombre_senal: "ENTRADA PROHIBIDA A VEHICULOS AGRICOLAS", tip: "💡 APREN: R-116 = Prohibit TRACTORS. Dibuix de tractor", audio: "Senyal R-116 de reglamentació. Entrada prohibida a vehicles agrícoles.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-117", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-117 de REGLAMENTACIÓ?", opcions: ["Entrada prohibida a vehículos de mano", "Prohibido carretillas", "Prohibido peatones"], correcta: 0, codi: "R-117", nombre_senal: "ENTRADA PROHIBIDA A VEHICULOS DE MANO", tip: "💡 APREN: R-117 = Prohibit CARRETONS. Vehicles que empenys", audio: "Senyal R-117 de reglamentació. Entrada prohibida a vehicles de mà.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-500", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-500 de REGLAMENTACIÓ?", opcions: ["Fin de prohibiciones", "Fin de velocidad", "Fin de todo"], correcta: 0, codi: "R-500", nombre_senal: "FIN DE PROHIBICIONES", tip: "💡 TRAMPA DGT: R-500 = 4 barres. ANUL·LA totes les prohibicions R anteriors", audio: "Senyal R-500 de reglamentació. Fi de prohibicions.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// 4. LIMITACIONES R-05 - CORREGIDO: R-301 a R-304 VAN AQUI
{ id: "R-200", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-200 de REGLAMENTACIÓ?", opcions: ["Prohibido adelantar", "Adelantar", "Ceder"], correcta: 0, codi: "R-200", nombre_senal: "PROHIBIDO ADELANTAR", tip: "💡 TRAMPA: R-200 = Prohibit avançar a TOTS. Inclòs bicis", audio: "Senyal R-200 de reglamentació. Prohibit avançar.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-201", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-201 de REGLAMENTACIÓ?", opcions: ["Prohibido adelantar a camiones", "Prohibido adelantar", "Adelantar"], correcta: 0, codi: "R-201", nombre_senal: "PROHIBIDO ADELANTAR A CAMIONES", tip: "💡 APREN: R-201 = Només camions >3500kg NO poden avançar. Tu sí", audio: "Senyal R-201 de reglamentació. Prohibit avançar a camions.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-202", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-202 de REGLAMENTACIÓ?", opcions: ["Fin de prohibido adelantar", "Prohibido adelantar", "Adelantar"], correcta: 0, codi: "R-202", nombre_senal: "FIN DE PROHIBIDO ADELANTAR", tip: "💡 APREN: R-202 = Barra sobre R-200. Aquí ja pots avançar", audio: "Senyal R-202 de reglamentació. Fi de prohibit avançar.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-203", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-203 de REGLAMENTACIÓ?", opcions: ["Fin de prohibido adelantar a camiones", "Prohibido adelantar", "Adelantar"], correcta: 0, codi: "R-203", nombre_senal: "FIN DE PROHIBIDO ADELANTAR A CAMIONES", tip: "💡 APREN: R-203 = Barra sobre R-201. Camions ja poden avançar", audio: "Senyal R-203 de reglamentació. Fi de prohibit avançar a camions.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-204", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-204 de REGLAMENTACIÓ?", opcions: ["Velocidad limitada", "Velocidad máxima", "Velocidad mínima"], correcta: 0, codi: "R-204", nombre_senal: "VELOCIDAD LIMITADA", tip: "💡 TRAMPA: R-204 = LÍMIT MÀXIM. No pots passar del número", audio: "Senyal R-204 de reglamentació. Velocitat limitada.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-205", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-205 de REGLAMENTACIÓ?", opcions: ["Fin de velocidad limitada", "Velocidad limitada", "Velocidad"], correcta: 0, codi: "R-205", nombre_senal: "FIN DE VELOCIDAD LIMITADA", tip: "💡 APREN: R-205 = Barra sobre R-204. Torna el límit genèric", audio: "Senyal R-205 de reglamentació. Fi de velocitat limitada.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-301", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-301 de REGLAMENTACIÓ?", opcions: ["Velocidad limitada", "Velocidad máxima", "Velocidad mínima"], correcta: 0, codi: "R-301", nombre_senal: "VELOCIDAD LIMITADA", tip: "💡 APREN: R-301 = Igual que R-204. Cercle vermell = Màxim", audio: "Senyal R-301 de reglamentació. Velocitat limitada.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-302", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-302 de REGLAMENTACIÓ?", opcions: ["Velocidad mínima", "Velocidad máxima", "Velocidad"], correcta: 0, codi: "R-302", nombre_senal: "VELOCIDAD MINIMA", tip: "💡 TRAMPA: R-302 = Cercle BLAU. Obligatori anar com a mínim a eixa velocitat", audio: "Senyal R-302 de reglamentació. Velocitat mínima.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-303", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-303 de REGLAMENTACIÓ?", opcions: ["Fin de velocidad limitada", "Velocidad limitada", "Velocidad"], correcta: 0, codi: "R-303", nombre_senal: "FIN DE VELOCIDAD LIMITADA", tip: "💡 APREN: R-303 = Barra sobre R-301/R-204. Fi de límit màxim", audio: "Senyal R-303 de reglamentació. Fi de velocitat limitada.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-304", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-304 de REGLAMENTACIÓ?", opcions: ["Fin de velocidad mínima", "Velocidad mínima", "Velocidad"], correcta: 0, codi: "R-304", nombre_senal: "FIN DE VELOCIDAD MINIMA", tip: "💡 APREN: R-304 = Barra sobre R-302. Ja pots anar més lent", audio: "Senyal R-304 de reglamentació. Fi de velocitat mínima.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// 5. PROHIBICION MANIOBRAS R-06
{ id: "R-305", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-305 de REGLAMENTACIÓ?", opcions: ["Prohibido usar señales acústicas", "Tocar claxon", "Silencio"], correcta: 0, codi: "R-305", nombre_senal: "PROHIBIDO USAR SEÑALES ACUSTICAS", tip: "💡 APREN: R-305 = Prohibit CLAXON. Només perill imminent o per evitar accident", audio: "Senyal R-305 de reglamentació. Prohibit usar senyals acústiques.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-306", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-306 de REGLAMENTACIÓ?", opcions: ["Prohibido girar a la izquierda", "Girar izquierda", "Ceder"], correcta: 0, codi: "R-306", nombre_senal: "PROHIBIDO GIRAR A LA IZQUIERDA", tip: "💡 TRAMPA DGT: R-306 = Només prohibeix GIRAR. Canvi de sentit SÍ es pot fer", audio: "Senyal R-306 de reglamentació. Prohibit girar a l'esquerra.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// 6. PROHIBICION PARADA Y ESTACIONAMIENTO R-07
{ id: "R-307", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-307 de REGLAMENTACIÓ?", opcions: ["Prohibido estacionar", "Prohibido parar", "Zona azul"], correcta: 0, codi: "R-307", nombre_senal: "PROHIBIDO ESTACIONAR", tip: "💡 APREN: R-307 = 1 barra vermella. Pots PARAR però NO estacionar +5min", audio: "Senyal R-307 de reglamentació. Prohibit estacionar.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-307a", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-307a de REGLAMENTACIÓ?", opcions: ["Prohibido parar y estacionar", "Prohibido estacionar", "Zona azul"], correcta: 0, codi: "R-307a", nombre_senal: "PROHIBIDO PARAR Y ESTACIONAR", tip: "💡 TRAMPA: R-307a = 2 barres creuades. NI parar ni 1 segon per pujar gent", audio: "Senyal R-307a de reglamentació. Prohibit parar i estacionar.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// 7. RESTRICCIONES ESTACIONAMIENTO R-08
{ id: "R-308e", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-308e de REGLAMENTACIÓ?", opcions: ["Estacionamiento regulado", "Prohibido aparcar", "Zona azul"], correcta: 0, codi: "R-308e", nombre_senal: "ESTACIONAMIENTO REGULADO", tip: "💡 APREN: R-308e = P blau amb rellotge. Zona blava/ORA. Paga i posa hora", audio: "Senyal R-308e de reglamentació. Estacionament regulat.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-308f", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-308f de REGLAMENTACIÓ?", opcions: ["Prohibido aparcar días pares", "Prohibido aparcar", "Zona azul"], correcta: 0, codi: "R-308f", nombre_senal: "PROHIBIDO APARCAR DIAS PARES", tip: "💡 APREN: R-308f = 1 barra. Només prohibit aparcar els dies PARELLS del mes", audio: "Senyal R-308f de reglamentació. Prohibit aparcar dies parells.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-308g", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-308g de REGLAMENTACIÓ?", opcions: ["Prohibido aparcar días impares", "Prohibido aparcar", "Zona azul"], correcta: 0, codi: "R-308g", nombre_senal: "PROHIBIDO APARCAR DIAS IMPARES", tip: "💡 APREN: R-308g = 1 barra. Només prohibit aparcar els dies SENARS del mes", audio: "Senyal R-308g de reglamentació. Prohibit aparcar dies senars.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-308h", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-308h de REGLAMENTACIÓ?", opcions: ["Zona de carga y descarga", "Prohibido aparcar", "Taxi"], correcta: 0, codi: "R-308h", nombre_senal: "ZONA DE CARGA Y DESCARGA", tip: "💡 APREN: R-308h = Camió. Només vehicles de càrrega en horari indicat", audio: "Senyal R-308h de reglamentació. Zona de càrrega i descàrrega.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-309", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-309 de REGLAMENTACIÓ?", opcions: ["Fin de restricciones", "Prohibido", "Fin de zona"], correcta: 0, codi: "R-309", nombre_senal: "FIN DE RESTRICCIONES", tip: "💡 TRAMPA: R-309 = Barra grisa. FI de totes les restriccions d'aparcament R-308", audio: "Senyal R-309 de reglamentació. Fi de restriccions.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// 8. SENTIDO Y DIRECCION OBLIGATORIA R-09
{ id: "R-400a", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-400a de REGLAMENTACIÓ?", opcions: ["Sentido obligatorio", "Giro", "Desvío"], correcta: 0, codi: "R-400a", nombre_senal: "SENTIDO OBLIGATORIO", tip: "💡 APREN: R-400a = Cercle blau. Fletxa indica direcció OBLIGATORIA", audio: "Senyal R-400a de reglamentació. Sentit obligatori.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-400b", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-400b de REGLAMENTACIÓ?", opcions: ["Giro obligatorio a la derecha", "Giro derecha", "Desvío"], correcta: 0, codi: "R-400b", nombre_senal: "GIRO OBLIGATORIO A LA DERECHA", tip: "💡 APREN: R-400b = A la cruïlla NOMÉS pots girar a la dreta", audio: "Senyal R-400b de reglamentació. Gir obligatori a la dreta.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-400c", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-400c de REGLAMENTACIÓ?", opcions: ["Giro obligatorio a la izquierda", "Giro izquierda", "Desvío"], correcta: 0, codi: "R-400c", nombre_senal: "GIRO OBLIGATORIO A LA IZQUIERDA", tip: "💡 APREN: R-400c = A la cruïlla NOMÉS pots girar a l'esquerra", audio: "Senyal R-400c de reglamentació. Gir obligatori a l'esquerra.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-400d", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-400d de REGLAMENTACIÓ?", opcions: ["Giro obligatorio de frente", "Seguir recto", "Desvío"], correcta: 0, codi: "R-400d", nombre_senal: "GIRO OBLIGATORIO DE FRENTE", tip: "💡 TRAMPA: R-400d = Només RECTE. Prohibit girar a dreta o esquerra", audio: "Senyal R-400d de reglamentació. Gir obligatori de front.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-400e", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-400e de REGLAMENTACIÓ?", opcions: ["Giro obligatorio derecha o izquierda", "Giro", "Desvío"], correcta: 0, codi: "R-400e", nombre_senal: "GIRO OBLIGATORIO DERECHA O IZQUIERDA", tip: "💡 APREN: R-400e = Prohibit seguir recte. Només dreta o esquerra", audio: "Senyal R-400e de reglamentació. Gir obligatori dreta o esquerra.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-401a", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-401a de REGLAMENTACIÓ?", opcions: ["Paso obligatorio a la derecha", "Giro derecha", "Desvío"], correcta: 0, codi: "R-401a", nombre_senal: "PASO OBLIGATORIO A LA DERECHA", tip: "💡 TRAMPA: R-401a = OBSTACLE. Passa per la DRETA. No és un gir", audio: "Senyal R-401a de reglamentació. Pas obligatori a la dreta.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-401b", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-401b de REGLAMENTACIÓ?", opcions: ["Paso obligatorio a la izquierda", "Giro izquierda", "Desvío"], correcta: 0, codi: "R-401b", nombre_senal: "PASO OBLIGATORIO A LA IZQUIERDA", tip: "💡 TRAMPA: R-401b = OBSTACLE. Passa per L'ESQUERRA. No és un gir", audio: "Senyal R-401b de reglamentació. Pas obligatori a l'esquerra.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// 9. PASO OBLIGATORIO ROTONDA R-10
{ id: "R-401c", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-401c de REGLAMENTACIÓ?", opcions: ["Paso obligatorio de frente", "Seguir recto", "Desvío"], correcta: 0, codi: "R-401c", nombre_senal: "PASO OBLIGATORIO DE FRENTE", tip: "💡 APREN: R-401c = OBSTACLE. Passa RECTE per dalt", audio: "Senyal R-401c de reglamentació. Pas obligatori de front.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-402", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-402 de REGLAMENTACIÓ?", opcions: ["Glorieta", "Rotonda", "Intersección"], correcta: 0, codi: "R-402", nombre_senal: "GLORIETA", tip: "💡 TRAMPA DGT: R-402 = Glorieta. Prioritat el que CIRCULA DINS", audio: "Senyal R-402 de reglamentació. Glorieta.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-403a", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-403a de REGLAMENTACIÓ?", opcions: ["Giro obligatorio a la derecha", "Giro derecha", "Desvío"], correcta: 0, codi: "R-403a", nombre_senal: "GIRO OBLIGATORIO A LA DERECHA", tip: "💡 APREN: R-403a = Igual que R-400b però per carrils", audio: "Senyal R-403a de reglamentació. Gir obligatori a la dreta.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-403b", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-403b de REGLAMENTACIÓ?", opcions: ["Giro obligatorio a la izquierda", "Giro izquierda", "Desvío"], correcta: 0, codi: "R-403b", nombre_senal: "GIRO OBLIGATORIO A LA IZQUIERDA", tip: "💡 APREN: R-403b = Igual que R-400c però per carrils", audio: "Senyal R-403b de reglamentació. Gir obligatori a l'esquerra.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-403c", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-403c de REGLAMENTACIÓ?", opcions: ["Giro obligatorio de frente", "Seguir recto", "Desvío"], correcta: 0, codi: "R-403c", nombre_senal: "GIRO OBLIGATORIO DE FRENTE", tip: "💡 APREN: R-403c = Igual que R-400d però per carrils", audio: "Senyal R-403c de reglamentació. Gir obligatori de front.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-404", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-404 de REGLAMENTACIÓ?", opcions: ["Calzada de sentido único", "Sentido único", "Prohibido"], correcta: 0, codi: "R-404", nombre_senal: "CALZADA DE SENTIDO UNICO", tip: "💡 APREN: R-404 = Fletxa blava. Aquesta calçada només va en 1 sentit", audio: "Senyal R-404 de reglamentació. Calçada de sentit únic.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// 10. FIN OBLIGACION VEHICULOS R-11
{ id: "R-507", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-507 de REGLAMENTACIÓ?", opcions: ["Fin de sentido obligatorio", "Fin de obligación", "Fin de zona"], correcta: 0, codi: "R-507", nombre_senal: "FIN DE SENTIDO OBLIGATORIO", tip: "💡 APREN: R-507 = Barra grisa sobre R-400a. Fi de sentit obligatori", audio: "Senyal R-507 de reglamentació. Fi de sentit obligatori.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-508", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-508 de REGLAMENTACIÓ?", opcions: ["Fin de paso obligatorio", "Fin de obligación", "Fin de zona"], correcta: 0, codi: "R-508", nombre_senal: "FIN DE PASO OBLIGATORIO", tip: "💡 APREN: R-508 = Barra grisa sobre R-401. Fi de pas obligatori", audio: "Senyal R-508 de reglamentació. Fi de pas obligatori.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-509", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-509 de REGLAMENTACIÓ?", opcions: ["Fin de giro obligatorio", "Fin de obligación", "Fin de zona"], correcta: 0, codi: "R-509", nombre_senal: "FIN DE GIRO OBLIGATORIO", tip: "💡 APREN: R-509 = Barra grisa sobre R-403. Fi de gir obligatori", audio: "Senyal R-509 de reglamentació. Fi de gir obligatori.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-510", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-510 de REGLAMENTACIÓ?", opcions: ["Fin de calzada sentido único", "Fin de sentido", "Fin de zona"], correcta: 0, codi: "R-510", nombre_senal: "FIN DE CALZADA SENTIDO UNICO", tip: "💡 APREN: R-510 = Barra grisa sobre R-404. Fi de sentit únic", audio: "Senyal R-510 de reglamentació. Fi de calçada sentit únic.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-511", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-511 de REGLAMENTACIÓ?", opcions: ["Fin de carril bus", "Fin de carril", "Fin de zona"], correcta: 0, codi: "R-511", nombre_senal: "FIN DE CARRIL BUS", tip: "💡 APREN: R-511 = Fi de carril exclusiu per autobusos", audio: "Senyal R-511 de reglamentació. Fi de carril bus.", panel_id: "R-11", ruta_panel: "R-11_FIN_OBLIGACION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// 11. FIN OBLIGACION PEATONES R-12
{ id: "R-512", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-512 de REGLAMENTACIÓ?", opcions: ["Fin de carril bici", "Fin de carril", "Fin de zona"], correcta: 0, codi: "R-512", nombre_senal: "FIN DE CARRIL BICI", tip: "💡 APREN: R-512 = Fi de carril exclusiu per bicis", audio: "Senyal R-512 de reglamentació. Fi de carril bici.", panel_id: "R-12", ruta_panel: "R-12_FIN_OBLIGACION_PEATONES_ESPECIALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-513", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-513 de REGLAMENTACIÓ?", opcions: ["Fin de zona peatonal", "Fin de zona", "Fin de obligación"], correcta: 0, codi: "R-513", nombre_senal: "FIN DE ZONA PEATONAL", tip: "💡 APREN: R-513 = Fi de zona on els vianants tenen prioritat", audio: "Senyal R-513 de reglamentació. Fi de zona peatonal.", panel_id: "R-12", ruta_panel: "R-12_FIN_OBLIGACION_PEATONES_ESPECIALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-514", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-514 de REGLAMENTACIÓ?", opcions: ["Fin de camino escolar", "Fin de zona", "Fin de obligación"], correcta: 0, codi: "R-514", nombre_senal: "FIN DE CAMINO ESCOLAR", tip: "💡 APREN: R-514 = Fi de ruta segura per anar a l'escola", audio: "Senyal R-514 de reglamentació. Fi de camí escolar.", panel_id: "R-12", ruta_panel: "R-12_FIN_OBLIGACION_PEATONES_ESPECIALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-515", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-515 de REGLAMENTACIÓ?", opcions: ["Fin de zona 30", "Fin de zona", "Fin de velocidad"], correcta: 0, codi: "R-515", nombre_senal: "FIN DE ZONA 30", tip: "💡 APREN: R-515 = Fi de zona amb límit 30km/h", audio: "Senyal R-515 de reglamentació. Fi de zona 30.", panel_id: "R-12", ruta_panel: "R-12_FIN_OBLIGACION_PEATONES_ESPECIALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "R-516", categoria: "reglamentaria", pregunta: "Què indica aquesta senyal R-516 de REGLAMENTACIÓ?", opcions: ["Fin de vía reservada", "Fin de vía", "Fin de obligación"], correcta: 0, codi: "R-516", nombre_senal: "FIN DE VIA RESERVADA", tip: "💡 APREN: R-516 = Fi de via reservada a bus/taxi. Ja pot usar-la tothom", audio: "Senyal R-516 de reglamentació. Fi de via reservada.", panel_id: "R-12", ruta_panel: "R-12_FIN_OBLIGACION_PEATONES_ESPECIALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// ========= TRAMPES REGLAMENTARIA = 30 TRAMPES =========
{ id: "T-R01", categoria: "trampa", pregunta: "R-1 vs R-2. Quina obliga a parar 3 segons?", opcions: ["Les 2", "R-1", "R-2"], correcta: 2, codi: "R-2", nombre_senal: "STOP", tip: "💡 TRAMPA DGT: R-2 Stop = Parada OBLIGATORIA. R-1 Ceda = Només frenar si cal", audio: "Trampa de prioritat.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R02", categoria: "trampa", pregunta: "R-106 vs R-111. Quina prohibeix tracció animal?", opcions: ["R-106", "R-111", "Les 2"], correcta: 1, codi: "R-111", nombre_senal: "TRACCION ANIMAL", tip: "💡 TRAMPA: R-111 = Cavall. R-106 = Motor. Són coses diferents", audio: "Trampa de prohibició.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R03", categoria: "trampa", pregunta: "R-301 a població sense senyal. Quin és el límit?", opcions: ["90 km/h", "50 km/h", "30 km/h"], correcta: 1, codi: "R-301", nombre_senal: "VELOCIDAD LIMITADA", tip: "💡 TRAMPA: Límit genèric a població = 50km/h si no diu res", audio: "Trampa de velocitat.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R04", categoria: "trampa", pregunta: "R-301 a carretera sense senyal. Quin és el límit turisme?", opcions: ["100 km/h", "90 km/h", "80 km/h"], correcta: 1, codi: "R-301", nombre_senal: "VELOCIDAD LIMITADA", tip: "💡 TRAMPA: Límit genèric a carretera convencional = 90km/h", audio: "Trampa de velocitat.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R05", categoria: "trampa", pregunta: "R-200 vs R-201. A qui afecta R-201?", opcions: ["A tots", "Només a turismes", "Només a camions > 3500kg"], correcta: 2, codi: "R-201", nombre_senal: "PROHIBIDO ADELANTAR CAMIONES", tip: "💡 TRAMPA: R-201 només per CAMIONS PESATS. Tu sí pots avançar", audio: "Trampa d'avançament.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R06", categoria: "trampa", pregunta: "R-307 vs R-307a. Quina prohibeix parar ni 1 segon?", opcions: ["R-307", "R-307a", "Les 2"], correcta: 1, codi: "R-307a", nombre_senal: "PROHIBIDO PARAR", tip: "💡 TRAMPA: R-307a = 2 barres = NI PARAR. R-307 = Només no aparcar", audio: "Trampa d'aparcament.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R07", categoria: "trampa", pregunta: "R-400a vs R-401a. Quina és per obstacle?", opcions: ["R-400a", "R-401a", "Les 2"], correcta: 1, codi: "R-401a", nombre_senal: "PASO OBLIGATORIO", tip: "💡 TRAMPA: R-401a = OBSTACLE. R-400a = CRUÏLLA", audio: "Trampa de sentit obligatori.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R08", categoria: "trampa", pregunta: "R-402. Qui té prioritat dins la glorieta?", opcions: ["El que entra", "El que circula per la glorieta", "El de la dreta"], correcta: 1, codi: "R-402", nombre_senal: "GLORIETA", tip: "💡 TRAMPA DGT: Amb R-402 té prioritat EL DE DINS de la rotonda", audio: "Trampa de rotonda.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R09", categoria: "trampa", pregunta: "R-500 anul·la...", opcions: ["Només velocitat", "Totes les prohibicions anteriors", "Només aparcament"], correcta: 1, codi: "R-500", nombre_senal: "FIN DE PROHIBICIONES", tip: "💡 TRAMPA: R-500 anul·la TOTES les R de prohibició anteriors", audio: "Trampa de fi de prohibicions.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R10", categoria: "trampa", pregunta: "R-3 vs R-4. Què passa després de R-4?", opcions: ["Segueixes tenint prioritat", "Perds la prioritat", "Has de parar"], correcta: 1, codi: "R-4", nombre_senal: "FIN DE PRIORIDAD", tip: "💡 TRAMPA: R-4 anul·la R-3. Després aplica regla general", audio: "Trampa de fi de prioritat.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R11", categoria: "trampa", pregunta: "R-114. Pot circular un patinet elèctric?", opcions: ["Sí", "No", "Només a carril bici"], correcta: 2, codi: "R-114", nombre_senal: "PROHIBIDO BICICLETAS", tip: "💡 TRAMPA: R-114 prohibeix BICIS. Els VMP han d'anar a carril bici", audio: "Trampa de bicicletes.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R12", categoria: "trampa", pregunta: "R-204 50. Pots anar a 60 a població?", opcions: ["Sí", "No", "Depèn"], correcta: 1, codi: "R-204", nombre_senal: "VELOCIDAD LIMITADA", tip: "💡 TRAMPA DGT: R-204 és LÍMIT MÀXIM. No el pots superar encara que sigui a població", audio: "Trampa de velocitat.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R13", categoria: "trampa", pregunta: "R-306. Pots fer canvi de sentit?", opcions: ["Sí", "No", "Només si no hi ha senyal"], correcta: 0, codi: "R-306", nombre_senal: "PROHIBIDO GIRAR IZQUIERDA", tip: "💡 TRAMPA: R-306 només prohibeix GIRAR. El canvi de sentit SÍ està permès", audio: "Trampa de girs.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R14", categoria: "trampa", pregunta: "R-400b. Després de girar pots canviar de carril?", opcions: ["Sí, immediat", "No", "Sí, quan sigui segur"], correcta: 2, codi: "R-400b", nombre_senal: "GIRO OBLIGATORIO", tip: "💡 TRAMPA: R-400b obliga al gir, no al carril. Pots canviar quan sigui segur", audio: "Trampa de gir obligatori.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R15", categoria: "trampa", pregunta: "R-402. Cal indicar amb intermitent?", opcions: ["Sí, sempre", "No", "Només per sortir"], correcta: 2, codi: "R-402", nombre_senal: "GLORIETA", tip: "💡 TRAMPA: A la rotonda NO. Només has de posar intermitent per SORTIR", audio: "Trampa de rotonda.", panel_id: "R-10", ruta_panel: "R-10_PASO_OBLIGATORIO_ROTONDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R16", categoria: "trampa", pregunta: "R-307a. Pots parar per pujar passatger?", opcions: ["Sí", "No", "Només 1 min"], correcta: 1, codi: "R-307a", nombre_senal: "PROHIBIDO PARAR", tip: "💡 TRAMPA: R-307a = NI PARAR. Ni 1 segon. Prohibit parar i estacionar", audio: "Trampa de parada.", panel_id: "R-07", ruta_panel: "R-07_PROHIBICION_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R17", categoria: "trampa", pregunta: "R-200. Pots avançar a ciclista?", opcions: ["No", "Sí", "Només si va sol"], correcta: 0, codi: "R-200", nombre_senal: "PROHIBIDO ADELANTAR", tip: "💡 TRAMPA: R-200 prohibeix avançar a QUALSEVOL vehicle. Inclòs bicis", audio: "Trampa d'avançament.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R18", categoria: "trampa", pregunta: "R-305. Pots tocar el claxon de nit?", opcions: ["Sí", "No", "Només emergència"], correcta: 1, codi: "R-305", nombre_senal: "PROHIBIDO SEÑALES ACUSTICAS", tip: "💡 TRAMPA: R-305 prohibeix SEMPRE. Excepte perill imminent", audio: "Trampa de claxon.", panel_id: "R-06", ruta_panel: "R-06_PROHIBICION_MANIOBRAS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R19", categoria: "trampa", pregunta: "R-1. Has de parar si no ve ningú?", opcions: ["Sí", "No", "Només mirar"], correcta: 1, codi: "R-1", nombre_senal: "CEDA EL PASO", tip: "💡 TRAMPA: R-1 = CEDIR. No obligatori parar. Només si ve vehicle", audio: "Trampa de ceda.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R20", categoria: "trampa", pregunta: "R-106. Afecta a bicicletes?", opcions: ["Sí", "No", "Depèn"], correcta: 1, codi: "R-106", nombre_senal: "VEHICULOS DE MOTOR", tip: "💡 TRAMPA: R-106 = Només VEHICLES DE MOTOR. Bicis i vianants SÍ poden", audio: "Trampa de prohibició.", panel_id: "R-02", ruta_panel: "R-02_PROHIBICION_VEHICULOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R21", categoria: "trampa", pregunta: "R-204 120. És vàlida a autopista?", opcions: ["Sí", "No", "Només turismes"], correcta: 0, codi: "R-204", nombre_senal: "VELOCIDAD LIMITADA", tip: "💡 APREN: R-204 120 = Límit màxim a autopista per turismes i motos", audio: "Trampa de velocitat.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R22", categoria: "trampa", pregunta: "R-500 anul·la R-1?", opcions: ["Sí", "No", "Només algunes"], correcta: 0, codi: "R-500", nombre_senal: "FIN DE PROHIBICIONES", tip: "💡 TRAMPA: R-500 anul·la TOTES les R de prohibició. R-1 i R-2 són d'obligació", audio: "Trampa de fi de prohibicions.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R23", categoria: "trampa", pregunta: "R-308h. Qui pot aparcar?", opcions: ["Tothom", "Només càrrega", "Residents"], correcta: 1, codi: "R-308h", nombre_senal: "CARGA Y DESCARGA", tip: "💡 TRAMPA: R-308h = Només vehicles de càrrega i en horari indicat", audio: "Trampa de càrrega.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R24", categoria: "trampa", pregunta: "R-401a. Has de girar obligatori?", opcions: ["Sí", "No", "Només passar"], correcta: 1, codi: "R-401a", nombre_senal: "PASO OBLIGATORIO", tip: "💡 TRAMPA: R-401a = PASSAR per la dreta. No obliga a girar", audio: "Trampa de pas obligatori.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R25", categoria: "trampa", pregunta: "R-302 40. Pots anar a menys?", opcions: ["Sí", "No", "Només si hi ha trànsit"], correcta: 1, codi: "R-302", nombre_senal: "VELOCIDAD MINIMA", tip: "💡 TRAMPA: R-302 = VELOCITAT MÍNIMA. Obligatori anar com a mínim a 40", audio: "Trampa de velocitat mínima.", panel_id: "R-05", ruta_panel: "R-05_LIMITACIONES_DIMENSIONES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R26", categoria: "trampa", pregunta: "R-114. Pot anar una moto?", opcions: ["Sí", "No", "Només 125cc"], correcta: 1, codi: "R-114", nombre_senal: "PROHIBIDO BICICLETAS", tip: "💡 TRAMPA: R-114 només prohibeix BICICLETES. Motos no", audio: "Trampa de prohibició.", panel_id: "R-03", ruta_panel: "R-03_PROHIBICION_OTROS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R27", categoria: "trampa", pregunta: "R-309. Anul·la R-204?", opcions: ["Sí", "No", "Només parcialment"], correcta: 1, codi: "R-309", nombre_senal: "FIN DE RESTRICCIONES", tip: "💡 TRAMPA: R-309 només anul·la restriccions d'APARCAMENT R-308. No velocitat", audio: "Trampa de fi de restriccions.", panel_id: "R-08", ruta_panel: "R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R28", categoria: "trampa", pregunta: "R-400d. Pots girar?", opcions: ["Sí", "No", "Només a la dreta"], correcta: 1, codi: "R-400d", nombre_senal: "FRENTE OBLIGATORIO", tip: "💡 TRAMPA: R-400d = NOMÉS RECTE. Prohibit girar a dreta o esquerra", audio: "Trampa de sentit obligatori.", panel_id: "R-09", ruta_panel: "R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R29", categoria: "trampa", pregunta: "R-516. Després d'aquesta senyal...", opcions: ["Tothom pot usar la via", "Només cotxes", "Segueix reservada"], correcta: 0, codi: "R-516", nombre_senal: "FIN VIA RESERVADA", tip: "💡 APREN: R-516 = Fi de via reservada a bus/taxi. Ja la pot usar qualsevol", audio: "Trampa de fi de via.", panel_id: "R-12", ruta_panel: "R-12_FIN_OBLIGACION_PEATONES_ESPECIALES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "T-R30", categoria: "trampa", pregunta: "R-2. Si no hi ha línia, on pares?", opcions: ["On vulguis", "Abans de la intersecció", "Al mig"], correcta: 1, codi: "R-2", nombre_senal: "STOP", tip: "💡 TRAMPA: R-2 sense línia = Parar ABANS d'incorporar-te a la via", audio: "Trampa de stop.", panel_id: "R-01", ruta_panel: "R-01_A_R_05_PRIORIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

// ========= BLOQUE 3: INDICACION = 62 SENYALS = SOLO PANELES REALES =========
{ id: "S-1", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-1 d'INFORMACIÓ?", opcions: ["Autopista", "Autovia", "Via ràpida"], correcta: 0, codi: "S-1", nombre_senal: "AUTOPISTA", tip: "💡 TRAMPA DGT: S-1 = AUTOPISTA. 1 sol pont. Límit 120km/h. Prohibit vianants, bicis, tractors i vehicles sense motor", audio: "Senyal S-1 d'informació. Autopista.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-1a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-1a d'INFORMACIÓ?", opcions: ["Autovia", "Autopista", "Via ràpida"], correcta: 0, codi: "S-1a", nombre_senal: "AUTOVIA", tip: "💡 TRAMPA DGT: S-1a = AUTOVIA. 2 calçades separades. Límit 120km/h. Sí poden anar ciclomotors i tractors", audio: "Senyal S-1a d'informació. Autovia.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-1b", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-1b d'INFORMACIÓ?", opcions: ["Carretera multicarril", "Autopista", "Autovia"], correcta: 0, codi: "S-1b", nombre_senal: "MULTI-CARRIL", tip: "💡 APREN: S-1b = MULTI-CARRIL. 2 o més carrils per sentit sense separació física", audio: "Senyal S-1b d'informació. Carretera multicarril.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-1c", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-1c d'INFORMACIÓ?", opcions: ["Carretera 2+1", "Autovia", "Autopista"], correcta: 0, codi: "S-1c", nombre_senal: "CARRETERA 2+1", tip: "💡 APREN: S-1c = CARRETERA 2+1. 1 carril va alternant per avançar. Molt usada a Girona", audio: "Senyal S-1c d'informació. Carretera 2+1.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-2", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-2 d'INFORMACIÓ?", opcions: ["Fi d'autopista", "Fi d'autovia", "Fi de via"], correcta: 0, codi: "S-2", nombre_senal: "FIN AUTOPISTA", tip: "💡 TRAMPA DGT: S-2 = FI D'AUTOPISTA. Barra vermella sobre S-1. Torna límit genèric 90/100", audio: "Senyal S-2 d'informació. Fi d'autopista.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-2a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-2a d'INFORMACIÓ?", opcions: ["Fi d'autovia", "Fi d'autopista", "Fi de via"], correcta: 0, codi: "S-2a", nombre_senal: "FIN AUTOVIA", tip: "💡 APREN: S-2a = FI D'AUTOVIA. Barra vermella sobre S-1a", audio: "Senyal S-2a d'informació. Fi d'autovia.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-2b", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-2b d'INFORMACIÓ?", opcions: ["Fi de multicarril", "Fi d'autovia", "Fi d'autopista"], correcta: 0, codi: "S-2b", nombre_senal: "FIN MULTI-CARRIL", tip: "💡 APREN: S-2b = FI de carretera multicarril. Barra vermella sobre S-1b", audio: "Senyal S-2b d'informació. Fi multi-carril.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-2c", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-2c d'INFORMACIÓ?", opcions: ["Fi carretera 2+1", "Fi d'autovia", "Fi d'autopista"], correcta: 0, codi: "S-2c", nombre_senal: "FIN CARRETERA 2+1", tip: "💡 APREN: S-2c = FI de carretera 2+1. Barra vermella sobre S-1c", audio: "Senyal S-2c d'informació. Fi carretera 2+1.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-3", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-3 d'INFORMACIÓ?", opcions: ["Calçada per a automòbils", "Autopista", "Via ràpida"], correcta: 0, codi: "S-3", nombre_senal: "CALZADA PARA AUTOMOVILES", tip: "💡 TRAMPA DGT: S-3 = Només COTXES i MOTOS. Prohibit camions, busos, vianants i bicis", audio: "Senyal S-3 d'informació. Calçada per a automòbils.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-4", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-4 d'INFORMACIÓ?", opcions: ["Via reservada per a automòbils", "Autopista", "Carretera"], correcta: 0, codi: "S-4", nombre_senal: "VIA RESERVADA PARA AUTOMOVILES", tip: "💡 TRAMPA DGT: S-4 = Només TURISMES. Prohibit CAMIONS, BUSOS i MOTOS", audio: "Senyal S-4 d'informació. Via reservada.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-5", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-5 d'INFORMACIÓ?", opcions: ["Túnel", "Pas inferior", "Pont"], correcta: 0, codi: "S-5", nombre_senal: "TUNEL", tip: "💡 APREN: S-5 = TÚNEL a prop. Encén llums de curt abast i prohibida la marxa enrere", audio: "Senyal S-5 d'informació. Túnel.", panel_id: "S-02", ruta_panel: "S-02_TIPOS_DE_VIA_FIN.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-6", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-6 d'INFORMACIÓ?", opcions: ["Carril reversible", "Carril bus", "Carril bici"], correcta: 0, codi: "S-6", nombre_senal: "CARRIL REVERSIBLE", tip: "💡 TRAMPA DGT: S-6 = Fletxes vermella i blanca. El sentit del carril canvia segons l'hora", audio: "Senyal S-6 d'informació. Carril reversible.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-7", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-7 d'INFORMACIÓ?", opcions: ["Velocitat", "Velocitat màxima", "Velocitat mínima"], correcta: 0, codi: "S-7", nombre_senal: "VELOCIDAD", tip: "💡 APREN: S-7 = Panell informatiu. Indica la velocitat a la que vas. No obliga", audio: "Senyal S-7 d'informació. Velocitat.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-8", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-8 d'INFORMACIÓ?", opcions: ["Fi de velocitat 70", "Velocitat 70", "Velocitat recomanada"], correcta: 0, codi: "S-8", nombre_senal: "FIN VELOCIDAD 70", tip: "💡 APREN: S-8 = Barra vermella sobre S-7. Fi de velocitat indicada al panell", audio: "Senyal S-8 d'informació. Fi velocitat.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-9", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-9 d'INFORMACIÓ?", opcions: ["Velocitats diferents per carril", "Velocitat màxima", "Velocitat mínima"], correcta: 0, codi: "S-9", nombre_senal: "VELOCIDADES 70 90", tip: "💡 APREN: S-9 = Velocitat diferent per cada carril. De dalt a baix", audio: "Senyal S-9 d'informació. Velocitats per carrils.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-10", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-10 d'INFORMACIÓ?", opcions: ["Fi de velocitats per carril", "Velocitat 70", "Velocitat 90"], correcta: 0, codi: "S-10", nombre_senal: "FIN VELOCIDADES 70 90", tip: "💡 APREN: S-10 = Barra vermella sobre S-9. Fi velocitats per carril", audio: "Senyal S-10 d'informació. Fi velocitats.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-11", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-11 d'INFORMACIÓ?", opcions: ["Direcció obligatòria", "Velocitat recomanada", "Gir"], correcta: 0, codi: "S-11", nombre_senal: "DIRECCION OBLIGATORIA", tip: "💡 APREN: S-11 = Fletxa blanca. Direcció que has de seguir. No confondre amb R-400", audio: "Senyal S-11 d'informació. Direcció obligatòria.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-12", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-12 d'INFORMACIÓ?", opcions: ["Sentit únic", "Prohibit girar", "Direcció obligatòria"], correcta: 0, codi: "S-12", nombre_senal: "SENTIDO UNICO", tip: "💡 APREN: S-12 = Fletxa blanca. Carrer de sentit únic", audio: "Senyal S-12 d'informació. Sentit únic.", panel_id: "S-04", ruta_panel: "S-11A_A_S-14A_SENTIDO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-13", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-13 d'INFORMACIÓ?", opcions: ["Pas de vianants", "Escola", "Zona peatonal"], correcta: 0, codi: "S-13", nombre_senal: "PASO DE PEATONES", tip: "💡 TRAMPA DGT: S-13 = PAS DE VIANANTS. Els vianants tenen prioritat", audio: "Senyal S-13 d'informació. Pas de vianants.", panel_id: "S-04", ruta_panel: "S-11A_A_S-14A_SENTIDO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-14", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-14 d'INFORMACIÓ?", opcions: ["Passarel·la", "Escales", "Pas subterrani"], correcta: 0, codi: "S-14", nombre_senal: "PASARELA", tip: "💡 APREN: S-14 = Per creuar per dalt. Recomanat usar-la", audio: "Senyal S-14 d'informació. Passarel·la.", panel_id: "S-04", ruta_panel: "S-11A_A_S-14A_SENTIDO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-15", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-15 d'INFORMACIÓ?", opcions: ["Cul de sac", "Gir obligatori", "Desviament"], correcta: 0, codi: "S-15", nombre_senal: "CALLE SIN SALIDA", tip: "💡 APREN: S-15 = Carrer sense sortida", audio: "Senyal S-15 d'informació. Cul de sac.", panel_id: "S-04", ruta_panel: "S-11A_A_S-14A_SENTIDO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-16", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-16 d'INFORMACIÓ?", opcions: ["Sortida d'emergència", "Desviament", "Túnel"], correcta: 0, codi: "S-16", nombre_senal: "SALIDA EMERGENCIA", tip: "💡 APREN: S-16 = Sortida d'emergència en túnels. Llums verdes", audio: "Senyal S-16 d'informació. Sortida emergència.", panel_id: "S-05", ruta_panel: "S-16_A_S-17_DIRECCIONES2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-17", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-17 d'INFORMACIÓ?", opcions: ["Aparcament", "Zona blava", "Prohibit aparcar"], correcta: 0, codi: "S-17", nombre_senal: "APARCAMIENTO", tip: "💡 APREN: S-17 = P blava. Zona per aparcar vehicles", audio: "Senyal S-17 d'informació. Aparcament.", panel_id: "S-05", ruta_panel: "S-16_A_S-17_DIRECCIONES2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-18", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-18 d'INFORMACIÓ?", opcions: ["Situació de senyal", "Aparcament", "Hospital"], correcta: 0, codi: "S-18", nombre_senal: "SITUACION", tip: "💡 APREN: S-18 = Indica que la senyal està situada més endavant", audio: "Senyal S-18 d'informació. Situació.", panel_id: "S-06", ruta_panel: "S-18_A_S-19_SITUACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-19", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-19 d'INFORMACIÓ?", opcions: ["Situació de senyal", "Aparcament", "Hospital"], correcta: 0, codi: "S-19", nombre_senal: "SITUACION", tip: "💡 APREN: S-19 = Variant de situació de senyal", audio: "Senyal S-19 d'informació. Situació.", panel_id: "S-06", ruta_panel: "S-18_A_S-19_SITUACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-20", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-20 d'INFORMACIÓ?", opcions: ["Carril", "Aparcament", "Servei"], correcta: 0, codi: "S-20", nombre_senal: "CARRIL", tip: "💡 APREN: S-20 = Indica un carril de circulació", audio: "Senyal S-20 d'informació. Carril.", panel_id: "S-07", ruta_panel: "S-20_A_S-21_CARRIL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-21", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-21 d'INFORMACIÓ?", opcions: ["Servei", "Carril", "Aparcament"], correcta: 0, codi: "S-21", nombre_senal: "SERVICIO", tip: "💡 APREN: S-21 = Indica servei proper", audio: "Senyal S-21 d'informació. Servei.", panel_id: "S-07", ruta_panel: "S-20_A_S-21_CARRIL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-22", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-22 d'INFORMACIÓ?", opcions: ["Servei", "Hospital", "Aparcament"], correcta: 0, codi: "S-22", nombre_senal: "SERVICIO", tip: "💡 APREN: S-22 = Serveis a la via", audio: "Senyal S-22 d'informació. Servei.", panel_id: "S-08", ruta_panel: "S-22_A_S-25_SERVICIOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-23", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-23 d'INFORMACIÓ?", opcions: ["Servei", "Hospital", "Aparcament"], correcta: 0, codi: "S-23", nombre_senal: "SERVICIO", tip: "💡 APREN: S-23 = Serveis a la via", audio: "Senyal S-23 d'informació. Servei.", panel_id: "S-08", ruta_panel: "S-22_A_S-25_SERVICIOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-24", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-24 d'INFORMACIÓ?", opcions: ["Servei", "Hospital", "Aparcament"], correcta: 0, codi: "S-24", nombre_senal: "SERVICIO", tip: "💡 APREN: S-24 = Serveis a la via", audio: "Senyal S-24 d'informació. Servei.", panel_id: "S-08", ruta_panel: "S-22_A_S-25_SERVICIOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-25", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-25 d'INFORMACIÓ?", opcions: ["Servei", "Hospital", "Aparcament"], correcta: 0, codi: "S-25", nombre_senal: "SERVICIO", tip: "💡 APREN: S-25 = Serveis a la via", audio: "Senyal S-25 d'informació. Servei.", panel_id: "S-08", ruta_panel: "S-22_A_S-25_SERVICIOS.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-26", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-26 d'INFORMACIÓ?", opcions: ["Servei", "Hospital", "Aparcament"], correcta: 0, codi: "S-26", nombre_senal: "SERVICIO", tip: "💡 APREN: S-26 = Serveis a la via", audio: "Senyal S-26 d'informació. Servei.", panel_id: "S-09", ruta_panel: "S-26_A_S-29_SERVICIOS2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-27", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-27 d'INFORMACIÓ?", opcions: ["Telèfon SOS", "Emergència", "Taller"], correcta: 0, codi: "S-27", nombre_senal: "SOS", tip: "💡 APREN: S-27 = TELÈFON SOS. Per emergències a l'autopista", audio: "Senyal S-27 d'informació. Telèfon SOS.", panel_id: "S-09", ruta_panel: "S-26_A_S-29_SERVICIOS2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-28", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-28 d'INFORMACIÓ?", opcions: ["Zona residencial 10km/h", "Zona escolar", "Zona 30"], correcta: 0, codi: "S-28", nombre_senal: "ZONA RESIDENCIAL 10", tip: "💡 TRAMPA DGT: S-28 = ZONA RESIDENCIAL. Màxim 10km/h. Prioritat vianants", audio: "Senyal S-28 d'informació. Zona residencial.", panel_id: "S-09", ruta_panel: "S-26_A_S-29_SERVICIOS2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-29", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-29 d'INFORMACIÓ?", opcions: ["Fi zona residencial", "Fi zona 30", "Fi zona escolar"], correcta: 0, codi: "S-29", nombre_senal: "FIN ZONA RESIDENCIAL", tip: "💡 APREN: S-29 = Fi de zona residencial. Barra vermella sobre S-28", audio: "Senyal S-29 d'informació. Fi zona residencial.", panel_id: "S-09", ruta_panel: "S-26_A_S-29_SERVICIOS2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-30", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-30 d'INFORMACIÓ?", opcions: ["Zona de vianants", "Zona escolar", "Zona 30"], correcta: 0, codi: "S-30", nombre_senal: "ZONA PEATONAL", tip: "💡 APREN: S-30 = ZONA DE VIANANTS. Prioritat total vianants", audio: "Senyal S-30 d'informació. Zona de vianants.", panel_id: "S-10", ruta_panel: "S-30_A_S-33_SERVICIOS3.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-31", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-31 d'INFORMACIÓ?", opcions: ["Fi de zona de vianants", "Fi de zona 30", "Fi de zona escolar"], correcta: 0, codi: "S-31", nombre_senal: "FIN ZONA PEATONAL", tip: "💡 APREN: S-31 = Fi de zona de vianants. Barra vermella sobre S-30", audio: "Senyal S-31 d'informació. Fi de zona de vianants.", panel_id: "S-10", ruta_panel: "S-30_A_S-33_SERVICIOS3.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-32", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-32 d'INFORMACIÓ?", opcions: ["Estació de peatge", "Túnel", "Aparcament"], correcta: 0, codi: "S-32", nombre_senal: "ESTACION DE PEAJE", tip: "💡 APREN: S-32 = ESTACIÓ DE PEATGE. Per pagar autopista", audio: "Senyal S-32 d'informació. Estació de peatge.", panel_id: "S-10", ruta_panel: "S-30_A_S-33_SERVICIOS3.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-33", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-33 d'INFORMACIÓ?", opcions: ["Via verda", "Parc", "Zona peatonal"], correcta: 0, codi: "S-33", nombre_senal: "VIA VERDE", tip: "💡 APREN: S-33 = VIA VERDA. Per vianants i bicis. Fons verd", audio: "Senyal S-33 d'informació. Via verda.", panel_id: "S-10", ruta_panel: "S-30_A_S-33_SERVICIOS3.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-34", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-34 d'INFORMACIÓ?", opcions: ["Telèfon SOS a la dreta", "Telèfon SOS a l'esquerra", "Taller"], correcta: 0, codi: "S-34", nombre_senal: "TELEFON SOS DRETA", tip: "💡 APREN: S-34 = TELÈFON SOS. Està al costat dret de la via", audio: "Senyal S-34 d'informació. Telèfon SOS a la dreta.", panel_id: "S-11", ruta_panel: "S-34_A_S-37_SERVICIOS4.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-35", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-35 d'INFORMACIÓ?", opcions: ["Carril bici", "Zona bici", "Prohibit bici"], correcta: 0, codi: "S-35", nombre_senal: "CARRIL BICI", tip: "💡 APREN: S-35 = CARRIL BICI. Només per bicicletes", audio: "Senyal S-35 d'informació. Carril bici.", panel_id: "S-11", ruta_panel: "S-34_A_S-37_SERVICIOS4.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-36", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-36 d'INFORMACIÓ?", opcions: ["Prohibit bicicletes", "Fi carril bici", "Zona bici"], correcta: 0, codi: "S-36", nombre_senal: "PROHIBIDO BICICLETAS", tip: "💡 TRAMPA DGT: S-36 = Barra vermella. Prohibit circular en bici", audio: "Senyal S-36 d'informació. Prohibit bicicletes.", panel_id: "S-11", ruta_panel: "S-34_A_S-37_SERVICIOS4.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-37", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-37 d'INFORMACIÓ?", opcions: ["Carril patinets", "Carril bici", "Zona VMP"], correcta: 0, codi: "S-37", nombre_senal: "CARRIL PATINETS", tip: "💡 APREN: S-37 = CARRIL PATINETS. Només per vehicles de mobilitat personal", audio: "Senyal S-37 d'informació. Carril patinets.", panel_id: "S-11", ruta_panel: "S-34_A_S-37_SERVICIOS4.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-38", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-38 d'INFORMACIÓ?", opcions: ["Carril bici + patinets", "Carril bici", "Carril patinets"], correcta: 0, codi: "S-38", nombre_senal: "CARRIL BICI + PATINETS", tip: "💡 APREN: S-38 = CARRIL COMPARTIT. Bicis i patinets junts", audio: "Senyal S-38 d'informació. Carril bici i patinets.", panel_id: "S-12", ruta_panel: "S-38_A_S-41_SERVICIOS5.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-39", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-39 d'INFORMACIÓ?", opcions: ["Prohibit patinets", "Fi carril patinets", "Zona VMP"], correcta: 0, codi: "S-39", nombre_senal: "PROHIBIDO PATINETS", tip: "💡 TRAMPA DGT: S-39 = Barra vermella. Prohibit VMP", audio: "Senyal S-39 d'informació. Prohibit patinets.", panel_id: "S-12", ruta_panel: "S-38_A_S-41_SERVICIOS5.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-40", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-40 d'INFORMACIÓ?", opcions: ["Prohibit bicicletes i patinets", "Fi carril", "Prohibit bici"], correcta: 0, codi: "S-40", nombre_senal: "PROHIBIDO BICICLETAS Y PATINETS", tip: "💡 TRAMPA DGT: S-40 = Creu vermella. Prohibit bicis i VMP en aquest tram", audio: "Senyal S-40 d'informació. Prohibit bicicletes i patinets.", panel_id: "S-12", ruta_panel: "S-38_A_S-41_SERVICIOS5.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-41", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-41 d'INFORMACIÓ?", opcions: ["Via ciclista i de vianants", "Carril bici", "Zona peatonal"], correcta: 0, codi: "S-41", nombre_senal: "VIA CICLISTA I DE VIANANTS", tip: "💡 APREN: S-41 = Via separada. Esquerra bici, dreta vianant amb línia al mig", audio: "Senyal S-41 d'informació. Via ciclista i de vianants.", panel_id: "S-12", ruta_panel: "S-38_A_S-41_SERVICIOS5.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-42", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-42 d'INFORMACIÓ?", opcions: ["Fi de via ciclista i de vianants", "Fi carril bici", "Fi zona"], correcta: 0, codi: "S-42", nombre_senal: "FIN VIA CICLISTA I DE VIANANTS", tip: "💡 TRAMPA DGT: S-42 = Creu vermella sobre S-41. Fi de via compartida", audio: "Senyal S-42 d'informació. Fi de via ciclista i de vianants.", panel_id: "S-13", ruta_panel: "S-42_A_S-45_SERVICIOS6.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-43", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-43 d'INFORMACIÓ?", opcions: ["Via ciclista, VMP i de vianants", "Carril bici", "Zona peatonal"], correcta: 0, codi: "S-43", nombre_senal: "VIA CICLISTA, VMP I DE VIANANTS", tip: "💡 APREN: S-43 = Via per bici, patinet i vianant separats en 3 franges", audio: "Senyal S-43 d'informació. Via ciclista, VMP i de vianants.", panel_id: "S-13", ruta_panel: "S-42_A_S-45_SERVICIOS6.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-44", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-44 d'INFORMACIÓ?", opcions: ["Fi de via ciclista, VMP i de vianants", "Fi carril", "Fi zona"], correcta: 0, codi: "S-44", nombre_senal: "FIN VIA CICLISTA, VMP I DE VIANANTS", tip: "💡 TRAMPA DGT: S-44 = Creu vermella sobre S-43. Fi de via compartida", audio: "Senyal S-44 d'informació. Fi de via ciclista, VMP i de vianants.", panel_id: "S-13", ruta_panel: "S-42_A_S-45_SERVICIOS6.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-45", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-45 d'INFORMACIÓ?", opcions: ["Pas per a ciclistes", "Carril bici", "Pas de vianants"], correcta: 0, codi: "S-45", nombre_senal: "PASO PARA CICLISTAS", tip: "💡 APREN: S-45 = PAS PER A BICIS. Triangle blanc. Han de cedir pas", audio: "Senyal S-45 d'informació. Pas per a ciclistes.", panel_id: "S-13", ruta_panel: "S-42_A_S-45_SERVICIOS6.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-46", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-46 d'INFORMACIÓ?", opcions: ["Pas per a ciclistes", "Carril bici", "Pas de vianants"], correcta: 0, codi: "S-46", nombre_senal: "PASO PARA CICLISTAS", tip: "💡 APREN: S-46 = Variant de pas per a ciclistes. Triangle blanc", audio: "Senyal S-46 d'informació. Pas per a ciclistes.", panel_id: "S-14", ruta_panel: "S-46_A_S-49_SERVICIOS7.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-47", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-47 d'INFORMACIÓ?", opcions: ["Zona 20", "Zona 30", "Zona residencial"], correcta: 0, codi: "S-47", nombre_senal: "ZONA 20", tip: "💡 APREN: S-47 = ZONA 20. Màxim 20km/h. Prioritat vianants, bicis i cotxes", audio: "Senyal S-47 d'informació. Zona 20.", panel_id: "S-14", ruta_panel: "S-46_A_S-49_SERVICIOS7.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-48", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-48 d'INFORMACIÓ?", opcions: ["Fi de zona 20", "Fi de zona 30", "Fi de zona residencial"], correcta: 0, codi: "S-48", nombre_senal: "FIN DE ZONA 20", tip: "💡 TRAMPA DGT: S-48 = Barra vermella sobre S-47. Fi zona 20", audio: "Senyal S-48 d'informació. Fi de zona 20.", panel_id: "S-14", ruta_panel: "S-46_A_S-49_SERVICIOS7.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-49", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-49 d'INFORMACIÓ?", opcions: ["Carril per a motos i bicis", "Carril bus", "Carril taxi"], correcta: 0, codi: "S-49", nombre_senal: "CARRIL PER A MOTOS I BICIS", tip: "💡 APREN: S-49 = Fletxa avall. Carril reservat per motos i bicis", audio: "Senyal S-49 d'informació. Carril per a motos i bicis.", panel_id: "S-14", ruta_panel: "S-46_A_S-49_SERVICIOS7.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-50", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-50 d'INFORMACIÓ?", opcions: ["Velocitat per carrils", "Velocitat màxima", "Carril reversible"], correcta: 0, codi: "S-50", nombre_senal: "VELOCIDAD POR CARRILES", tip: "💡 APREN: S-50 = Velocitat recomanada diferent per cada carril", audio: "Senyal S-50 d'informació. Velocitat per carrils.", panel_id: "S-15", ruta_panel: "S-50_A_S-51_SERVICIOS8.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-51", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-51 d'INFORMACIÓ?", opcions: ["Carril bus", "Carril bici", "Carril taxi"], correcta: 0, codi: "S-51", nombre_senal: "CARRIL BUS", tip: "💡 APREN: S-51 = Carril reservat només per busos", audio: "Senyal S-51 d'informació. Carril bus.", panel_id: "S-15", ruta_panel: "S-50_A_S-51_SERVICIOS8.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-52d", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-52d d'INFORMACIÓ?", opcions: ["Desdoblament", "Bifurcació", "Sortida"], correcta: 0, codi: "S-52d", nombre_senal: "DESDOBLAMIENTO", tip: "💡 APREN: S-52d = 1 carril es desdobla en 2. Vés pel carril que et toca", audio: "Senyal S-52d d'informació. Desdoblament.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-52e", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-52e d'INFORMACIÓ?", opcions: ["Desdoblament", "Bifurcació", "Sortida"], correcta: 0, codi: "S-52e", nombre_senal: "DESDOBLAMIENTO", tip: "💡 APREN: S-52e = Variant de desdoblament de carrils", audio: "Senyal S-52e d'informació. Desdoblament.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-52f", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-52f d'INFORMACIÓ?", opcions: ["Desdoblament", "Bifurcació", "Sortida"], correcta: 0, codi: "S-52f", nombre_senal: "DESDOBLAMIENTO", tip: "💡 APREN: S-52f = Variant de desdoblament de carrils", audio: "Senyal S-52f d'informació. Desdoblament.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-52g", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-52g d'INFORMACIÓ?", opcions: ["Desdoblament", "Bifurcació", "Sortida"], correcta: 0, codi: "S-52g", nombre_senal: "DESDOBLAMIENTO", tip: "💡 APREN: S-52g = Variant de desdoblament de carrils", audio: "Senyal S-52g d'informació. Desdoblament.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-53", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-53 d'INFORMACIÓ?", opcions: ["Bifurcació", "Sortida", "Desdoblament"], correcta: 0, codi: "S-53", nombre_senal: "BIFURCACION", tip: "💡 APREN: S-53 = La via es divideix en 2 direccions diferents", audio: "Senyal S-53 d'informació. Bifurcació.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-53a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-53a d'INFORMACIÓ?", opcions: ["Bifurcació", "Sortida", "Desdoblament"], correcta: 0, codi: "S-53a", nombre_senal: "BIFURCACION", tip: "💡 APREN: S-53a = Variant de bifurcació", audio: "Senyal S-53a d'informació. Bifurcació.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-53b", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-53b d'INFORMACIÓ?", opcions: ["Bifurcació", "Sortida", "Desdoblament"], correcta: 0, codi: "S-53b", nombre_senal: "BIFURCACION", tip: "💡 APREN: S-53b = Variant de bifurcació", audio: "Senyal S-53b d'informació. Bifurcació.", panel_id: "S-17", ruta_panel: "S-53B_A_S-61A_SALIDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-53c", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-53c d'INFORMACIÓ?", opcions: ["Bifurcació", "Sortida", "Desdoblament"], correcta: 0, codi: "S-53c", nombre_senal: "BIFURCACION", tip: "💡 APREN: S-53c = Variant de bifurcació", audio: "Senyal S-53c d'informació. Bifurcació.", panel_id: "S-17", ruta_panel: "S-53B_A_S-61A_SALIDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-60a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-60a d'INFORMACIÓ?", opcions: ["Sortida", "Bifurcació", "Desdoblament"], correcta: 0, codi: "S-60a", nombre_senal: "SALIDA", tip: "💡 APREN: S-60a = Senyal de sortida propera", audio: "Senyal S-60a d'informació. Sortida.", panel_id: "S-17", ruta_panel: "S-53B_A_S-61A_SALIDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-60b", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-60b d'INFORMACIÓ?", opcions: ["Sortida", "Bifurcació", "Desdoblament"], correcta: 0, codi: "S-60b", nombre_senal: "SALIDA", tip: "💡 APREN: S-60b = Senyal de sortida propera", audio: "Senyal S-60b d'informació. Sortida.", panel_id: "S-17", ruta_panel: "S-53B_A_S-61A_SALIDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-61a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-61a d'INFORMACIÓ?", opcions: ["Carril de sortida", "Carril recte", "Desdoblament"], correcta: 0, codi: "S-61a", nombre_senal: "CARRIL DE SORTIDA", tip: "💡 APREN: S-61a = El carril dret és només per sortir", audio: "Senyal S-61a d'informació. Carril de sortida.", panel_id: "S-17", ruta_panel: "S-53B_A_S-61A_SALIDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-61b", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-61b d'INFORMACIÓ?", opcions: ["Carril de sortida", "Carril recte", "Desdoblament"], correcta: 0, codi: "S-61b", nombre_senal: "CARRIL DE SORTIDA", tip: "💡 APREN: S-61b = El carril dret és només per sortir", audio: "Senyal S-61b d'informació. Carril de sortida.", panel_id: "S-18", ruta_panel: "S-61B_A_S-63A_SALIDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-61c", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-61c d'INFORMACIÓ?", opcions: ["Carril en sentit contrari", "Carril de sortida", "Carril recte"], correcta: 0, codi: "S-61c", nombre_senal: "CARRIL CONTRARI", tip: "💡 TRAMPA DGT: S-61c = 1 fletxa cap avall. Sentit contrari al teu", audio: "Senyal S-61c d'informació. Carril contrari.", panel_id: "S-18", ruta_panel: "S-61B_A_S-63A_SALIDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-62a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-62a d'INFORMACIÓ?", opcions: ["Carril d'incorporació", "Carril de sortida", "Carril recte"], correcta: 0, codi: "S-62a", nombre_senal: "CARRIL INCORPORACIO", tip: "💡 APREN: S-62a = S'incorpora 1 carril nou per l'esquerra", audio: "Senyal S-62a d'informació. Carril d'incorporació.", panel_id: "S-18", ruta_panel: "S-61B_A_S-63A_SALIDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-62b", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-62b d'INFORMACIÓ?", opcions: ["Carril de sortida", "Carril recte", "Desdoblament"], correcta: 0, codi: "S-62b", nombre_senal: "CARRIL DE SORTIDA", tip: "💡 APREN: S-62b = El carril dret és només per sortir", audio: "Senyal S-62b d'informació. Carril de sortida.", panel_id: "S-18", ruta_panel: "S-61B_A_S-63A_SALIDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-63a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-63a d'INFORMACIÓ?", opcions: ["4 carrils", "Desdoblament", "Bifurcació"], correcta: 0, codi: "S-63a", nombre_senal: "4 CARRILS", tip: "💡 APREN: S-63a = Els 4 carrils segueixen recte", audio: "Senyal S-63a d'informació. 4 carrils.", panel_id: "S-18", ruta_panel: "S-61B_A_S-63A_SALIDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-65a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-65a d'INFORMACIÓ?", opcions: ["Carril reversible", "Carril bus", "Carril bici"], correcta: 0, codi: "S-65a", nombre_senal: "CARRIL REVERSIBLE", tip: "💡 APREN: S-65a = Fletxes grogues. El sentit canvia segons l'hora", audio: "Senyal S-65a d'informació. Carril reversible.", panel_id: "S-19", ruta_panel: "S-65A_A_S-70A_CARRILES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-65b", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-65b d'INFORMACIÓ?", opcions: ["Carril reversible", "Carril bus", "Carril bici"], correcta: 0, codi: "S-65b", nombre_senal: "CARRIL REVERSIBLE", tip: "💡 APREN: S-65b = Variant de carril reversible", audio: "Senyal S-65b d'informació. Carril reversible.", panel_id: "S-19", ruta_panel: "S-65A_A_S-70A_CARRILES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-66", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-66 d'INFORMACIÓ?", opcions: ["Fi carril reversible", "Fi carril bus", "Fi carril bici"], correcta: 0, codi: "S-66", nombre_senal: "FIN CARRIL REVERSIBLE", tip: "💡 TRAMPA DGT: S-66 = Creu vermella. Fi de carril reversible", audio: "Senyal S-66 d'informació. Fi carril reversible.", panel_id: "S-19", ruta_panel: "S-65A_A_S-70A_CARRILES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-68", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-68 d'INFORMACIÓ?", opcions: ["Carril bus", "Carril taxi", "Carril bici"], correcta: 0, codi: "S-68", nombre_senal: "CARRIL BUS", tip: "💡 APREN: S-68 = Carril reservat només per busos", audio: "Senyal S-68 d'informació. Carril bus.", panel_id: "S-19", ruta_panel: "S-65A_A_S-70A_CARRILES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-70a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-70a d'INFORMACIÓ?", opcions: ["Carril bus + taxi + bici", "Carril bus", "Carril bici"], correcta: 0, codi: "S-70a", nombre_senal: "CARRIL BUS TAXI BICI", tip: "💡 APREN: S-70a = Carril reservat per bus, taxi i bici", audio: "Senyal S-70a d'informació. Carril bus, taxi i bici.", panel_id: "S-19", ruta_panel: "S-65A_A_S-70A_CARRILES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-70b", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-70b d'INFORMACIÓ?", opcions: ["Carril bus + taxi + bici + VMP", "Carril bus", "Carril bici"], correcta: 0, codi: "S-70b", nombre_senal: "CARRIL BUS TAXI BICI VMP", tip: "💡 APREN: S-70b = Carril reservat per bus, taxi, bici i patinet", audio: "Senyal S-70b d'informació. Carril bus, taxi, bici i VMP.", panel_id: "S-20", ruta_panel: "S-70B_A_S-72B_CONFLUENCIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-71a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-71a d'INFORMACIÓ?", opcions: ["Confluència per l'esquerra", "Confluència per la dreta", "Carril recte"], correcta: 0, codi: "S-71a", nombre_senal: "CONFLUENCIA IZQUIERDA", tip: "💡 APREN: S-71a = S'incorpora carril per l'esquerra", audio: "Senyal S-71a d'informació. Confluència per l'esquerra.", panel_id: "S-20", ruta_panel: "S-70B_A_S-72B_CONFLUENCIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-71b", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-71b d'INFORMACIÓ?", opcions: ["Confluència per la dreta", "Confluència per l'esquerra", "Carril recte"], correcta: 0, codi: "S-71b", nombre_senal: "CONFLUENCIA DERECHA", tip: "💡 APREN: S-71b = S'incorpora carril per la dreta", audio: "Senyal S-71b d'informació. Confluència per la dreta.", panel_id: "S-20", ruta_panel: "S-70B_A_S-72B_CONFLUENCIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-72a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-72a d'INFORMACIÓ?", opcions: ["Carril bici", "Carril bus", "Carril taxi"], correcta: 0, codi: "S-72a", nombre_senal: "CARRIL BICI", tip: "💡 APREN: S-72a = Carril reservat només per bicicletes", audio: "Senyal S-72a d'informació. Carril bici.", panel_id: "S-20", ruta_panel: "S-70B_A_S-72B_CONFLUENCIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-72b", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-72b d'INFORMACIÓ?", opcions: ["Carril bici", "Carril bus", "Carril taxi"], correcta: 0, codi: "S-72b", nombre_senal: "CARRIL BICI", tip: "💡 APREN: S-72b = Variant de carril bici", audio: "Senyal S-72b d'informació. Carril bici.", panel_id: "S-20", ruta_panel: "S-70B_A_S-72B_CONFLUENCIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-73a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-73a d'INFORMACIÓ?", opcions: ["Confluència per l'esquerra", "Confluència per la dreta", "Carril recte"], correcta: 0, codi: "S-73a", nombre_senal: "CONFLUENCIA IZQUIERDA", tip: "💡 APREN: S-73a = S'incorpora carril per l'esquerra", audio: "Senyal S-73a d'informació. Confluència per l'esquerra.", panel_id: "S-21", ruta_panel: "S-73A_A_S-73B_CONFLUENCIA2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-73b", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-73b d'INFORMACIÓ?", opcions: ["Confluència per la dreta", "Confluència per l'esquerra", "Carril recte"], correcta: 0, codi: "S-73b", nombre_senal: "CONFLUENCIA DERECHA", tip: "💡 APREN: S-73b = S'incorpora carril per la dreta", audio: "Senyal S-73b d'informació. Confluència per la dreta.", panel_id: "S-21", ruta_panel: "S-73A_A_S-73B_CONFLUENCIA2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-105c", categoria: "SERVICIO", pregunta: "Què indica aquesta senyal S-105c d'INFORMACIÓ?", opcions: ["Servei WC", "Hotel", "Restaurant"], correcta: 0, codi: "S-105c", nombre_senal: "SERVICIO WC", tip: "💡 APREN: S-105c = Serveis. WC", audio: "Senyal S-105c d'informació. Servei WC.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-105d", categoria: "SERVICIO", pregunta: "Què indica aquesta senyal S-105d d'INFORMACIÓ?", opcions: ["Servei gasolinera", "Taller", "Aparcament"], correcta: 0, codi: "S-105d", nombre_senal: "SERVICIO GASOLINERA", tip: "💡 APREN: S-105d = Serveis. Gasolinera", audio: "Senyal S-105d d'informació. Servei gasolinera.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-105e", categoria: "SERVICIO", pregunta: "Què indica aquesta senyal S-105e d'INFORMACIÓ?", opcions: ["Servei hotel", "Restaurant", "WC"], correcta: 0, codi: "S-105e", nombre_senal: "SERVICIO HOTEL", tip: "💡 APREN: S-105e = Serveis. Hotel", audio: "Senyal S-105e d'informació. Servei hotel.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-105f", categoria: "SERVICIO", pregunta: "Què indica aquesta senyal S-105f d'INFORMACIÓ?", opcions: ["Servei restaurant", "Hotel", "WC"], correcta: 0, codi: "S-105f", nombre_senal: "SERVICIO RESTAURANT", tip: "💡 APREN: S-105f = Serveis. Restaurant", audio: "Senyal S-105f d'informació. Servei restaurant.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-106", categoria: "SERVICIO", pregunta: "Què indica aquesta senyal S-106 d'INFORMACIÓ?", opcions: ["Estació de servei", "Taller", "Gasolinera"], correcta: 0, codi: "S-106", nombre_senal: "ESTACION DE SERVICIO", tip: "💡 APREN: S-106 = Estació de servei completa. Gasolinera + WC + Botiga", audio: "Senyal S-106 d'informació. Estació de servei.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-107", categoria: "SERVICIO", pregunta: "Què indica aquesta senyal S-107 d'INFORMACIÓ?", opcions: ["Càmping", "Hotel", "Aparcament"], correcta: 0, codi: "S-107", nombre_senal: "CAMPING", tip: "💡 APREN: S-107 = Zona de càmping. Per caravanes i tendes", audio: "Senyal S-107 d'informació. Càmping.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-108", categoria: "SERVICIO", pregunta: "Què indica aquesta senyal S-108 d'INFORMACIÓ?", opcions: ["Àrea de descans", "Càmping", "Hotel"], correcta: 0, codi: "S-108", nombre_senal: "AREA DE DESCANSO", tip: "💡 APREN: S-108 = ÀREA DE DESCANS. Per parar, menjar i descansar", audio: "Senyal S-108 d'informació. Àrea de descans.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-200", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-200 d'INFORMACIÓ?", opcions: ["Preseñalització rotonda", "Direcció", "Sortida"], correcta: 0, codi: "S-200", nombre_senal: "PRESEÑALIZACION ROTONDA", tip: "💡 APREN: S-200 = PRESEÑALITZACIÓ DE ROTONDA. Et diu les 4 sortides abans", audio: "Senyal S-200 d'informació. Preseñalització rotonda.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-201", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-201 d'INFORMACIÓ?", opcions: ["Preseñalització rotonda", "Direcció", "Sortida"], correcta: 0, codi: "S-201", nombre_senal: "PRESEÑALIZACION ROTONDA", tip: "💡 APREN: S-201 = PRESEÑALITZACIÓ DE ROTONDA", audio: "Senyal S-201 d'informació. Preseñalització rotonda.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-202", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-202 d'INFORMACIÓ?", opcions: ["Preseñalització rotonda", "Direcció", "Sortida"], correcta: 0, codi: "S-202", nombre_senal: "PRESEÑALIZACION ROTONDA", tip: "💡 APREN: S-202 = PRESEÑALITZACIÓ DE ROTONDA", audio: "Senyal S-202 d'informació. Preseñalització rotonda.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-203", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-203 d'INFORMACIÓ?", opcions: ["Preseñalització rotonda", "Direcció", "Sortida"], correcta: 0, codi: "S-203", nombre_senal: "PRESEÑALIZACION ROTONDA", tip: "💡 APREN: S-203 = PRESEÑALITZACIÓ DE ROTONDA", audio: "Senyal S-203 d'informació. Preseñalització rotonda.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-220", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-220 d'INFORMACIÓ?", opcions: ["Preseñalització Haro 500m", "Direcció", "Sortida"], correcta: 0, codi: "S-220", nombre_senal: "PRESEÑALIZACION HARO", tip: "💡 APREN: S-220 = PRESEÑALITZACIÓ. Et diu que Haro està a 500m", audio: "Senyal S-220 d'informació. Preseñalització Haro a 500 metres.", panel_id: "S-24", ruta_panel: "S-220_A_S-222_PRESEÑAL2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-220a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-220a d'INFORMACIÓ?", opcions: ["Preseñalització múltiple", "Direcció", "Sortida"], correcta: 0, codi: "S-220a", nombre_senal: "PRESEÑALIZACION", tip: "💡 APREN: S-220a = PRESEÑALITZACIÓ múltiple de diverses poblacions", audio: "Senyal S-220a d'informació. Preseñalització.", panel_id: "S-24", ruta_panel: "S-220_A_S-222_PRESEÑAL2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-222", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-222 d'INFORMACIÓ?", opcions: ["Preseñalització", "Direcció", "Sortida"], correcta: 0, codi: "S-222", nombre_senal: "PRESEÑALIZACION", tip: "💡 APREN: S-222 = PRESEÑALITZACIÓ de direccions", audio: "Senyal S-222 d'informació. Preseñalització.", panel_id: "S-24", ruta_panel: "S-220_A_S-222_PRESEÑAL2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-222a", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-222a d'INFORMACIÓ?", opcions: ["Preseñalització Torrelavega", "Direcció", "Sortida"], correcta: 0, codi: "S-222a", nombre_senal: "PRESEÑALIZACION TORRELAVEGA", tip: "💡 APREN: S-222a = PRESEÑALITZACIÓ. Torrelavega a 500m", audio: "Senyal S-222a d'informació. Preseñalització Torrelavega.", panel_id: "S-25", ruta_panel: "S-222A_A_S-230_PRESEÑAL3.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-225", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-225 d'INFORMACIÓ?", opcions: ["Preseñalització Ataquines", "Direcció", "Sortida"], correcta: 0, codi: "S-225", nombre_senal: "PRESEÑALIZACION ATAQUINES", tip: "💡 APREN: S-225 = PRESEÑALITZACIÓ. Ataquines a 500m", audio: "Senyal S-225 d'informació. Preseñalització Ataquines.", panel_id: "S-25", ruta_panel: "S-222A_A_S-230_PRESEÑAL3.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-230", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-230 d'INFORMACIÓ?", opcions: ["Preseñalització Besalú", "Direcció", "Sortida"], correcta: 0, codi: "S-230", nombre_senal: "PRESEÑALIZACION BESALU", tip: "💡 APREN: S-230 = PRESEÑALITZACIÓ. Besalú a 1000m", audio: "Senyal S-230 d'informació. Preseñalització Besalú.", panel_id: "S-25", ruta_panel: "S-222A_A_S-230_PRESEÑAL3.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },

{ id: "S-321", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-321 d'INFORMACIÓ?", opcions: ["Aeroport a 3 km", "Via ciclista 0,2 km", "Sortida 22"], correcta: 0, codi: "S-321", nombre_senal: "AEROPORT 3 KM", tip: "💡 APREN: S-321 = DIRECCIÓ. Aeroport a 3 km per aquesta via", audio: "Senyal S-321 d'informació. Aeroport a 3 quilòmetres.", panel_id: "S-26", ruta_panel: "S-321_A_S-342_DIRECCION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-322", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-322 d'INFORMACIÓ?", opcions: ["Via ciclista a 0,2 km", "Aeroport a 3 km", "Sortida 22"], correcta: 0, codi: "S-322", nombre_senal: "VIA CICLISTA 0,2 KM", tip: "💡 APREN: S-322 = DIRECCIÓ. Via ciclista a 200 metres", audio: "Senyal S-322 d'informació. Via ciclista a 0,2 quilòmetres.", panel_id: "S-26", ruta_panel: "S-321_A_S-342_DIRECCION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-341", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-341 d'INFORMACIÓ?", opcions: ["Sortida cap a carretera multicarril 22", "Sortida cap a autopista 22", "Direcció 22"], correcta: 0, codi: "S-341", nombre_senal: "SORTIDA MULTICARRIL 22", tip: "💡 TRAMPA DGT: S-341 = Fons blanc. Sortida cap a CARRETERA", audio: "Senyal S-341 d'informació. Sortida cap a carretera multicarril.", panel_id: "S-26", ruta_panel: "S-321_A_S-342_DIRECCION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-342", categoria: "INDICACION", pregunta: "Què indica aquesta senyal S-342 d'INFORMACIÓ?", opcions: ["Sortida cap a autopista 22", "Sortida cap a carretera 22", "Direcció 22"], correcta: 0, codi: "S-342", nombre_senal: "SORTIDA AUTOPISTA 22", tip: "💡 TRAMPA DGT: S-342 = Fons blau. Sortida cap a AUTOPISTA", audio: "Senyal S-342 d'informació. Sortida cap a autopista.", panel_id: "S-26", ruta_panel: "S-321_A_S-342_DIRECCION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },


{ id: "S-1-TRAMPA-1", categoria: "INDICACION", pregunta: "Veus una senyal blava S-1 amb un pont. Què NO hi pot circular?", opcions: ["Vianants, bicicletes i ciclomotors", "Turismes i motos", "Autobusos i camions"], correcta: 0, codi: "S-1", nombre_senal: "AUTOPISTA - TRAMPA", tip: "💡 TRAMPA EXAMEN: AUTOPISTA S-1 = Prohibit tot vehicle sense motor i <60km/h. La S-1a AUTOVIA sí deixa passar tractors i ciclomotors", audio: "Trampa S-1. Què no hi pot circular per autopista?", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-1a-TRAMPA-2", categoria: "INDICACION", pregunta: "Quina diferència hi ha entre S-1 Autopista i S-1a Autovia?", opcions: ["S-1 un sol pont, S-1a dos ponts amb separació", "No hi ha diferència", "S-1a és més ràpida"], correcta: 0, codi: "S-1a", nombre_senal: "AUTOVIA VS AUTOPISTA", tip: "💡 TRAMPA CLAU: Dibuix S-1 = 1 pont. S-1a = 2 calçades. Mateix límit 120 però diferent accés", audio: "Trampa diferència autopista i autovia.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-2-TRAMPA-3", categoria: "INDICACION", pregunta: "Veus S-2 amb barra vermella sobre S-1. Què passa amb la velocitat?", opcions: ["S'acaba autopista i torna límit genèric 90/100", "Continua límit 120", "Ara límit 50"], correcta: 0, codi: "S-2", nombre_senal: "FIN AUTOPISTA - TRAMPA", tip: "💡 TRAMPA: Fi autopista no vol dir stop, vol dir que ja no ets a autopista. Límit baixa", audio: "Trampa fi d'autopista.", panel_id: "S-01", ruta_panel: "S-01_TIPOS_DE_VIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-6-TRAMPA-4", categoria: "INDICACION", pregunta: "Veus S-6 amb fletxes vermella i blanca. Quin carril és?", opcions: ["Carril reversible que canvia de sentit segons hores", "Carril bus", "Carril d'emergència"], correcta: 0, codi: "S-6", nombre_senal: "CARRIL REVERSIBLE - TRAMPA", tip: "💡 TRAMPA DGT: Vermell + Blanc = REVERSIBLE. Groc + Blanc = ADDICIONAL. Blau = BUS", audio: "Trampa carril reversible.", panel_id: "S-03", ruta_panel: "S-06_A_S-11_VELOCIDAD.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-13-TRAMPA-5", categoria: "INDICACION", pregunta: "Senyal S-13 blau amb vianant. Què has de fer?", opcions: ["Cedir pas a vianants que vulguin creuar", "Pitar i passar", "Només avisa que hi ha pas"], correcta: 0, codi: "S-13", nombre_senal: "PAS DE VIANANTS - TRAMPA", tip: "💡 TRAMPA EXAMEN: S-13 no és només informatiu, obliga a cedir pas al vianant al pas", audio: "Trampa pas de vianants.", panel_id: "S-04", ruta_panel: "S-11A_A_S-14A_SENTIDO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-28-TRAMPA-6", categoria: "INDICACION", pregunta: "Veus S-28 zona residencial. Quina és la velocitat màxima?", opcions: ["10 km/h", "20 km/h", "30 km/h"], correcta: 0, codi: "S-28", nombre_senal: "ZONA RESIDENCIAL 10 - TRAMPA", tip: "💡 TRAMPA CLAU DGT: S-28 = 10km/h i prioritat vianants. S-47 = 20km/h. S-30 = Zona peatonal sense límit marcat", audio: "Trampa zona residencial 10.", panel_id: "S-09", ruta_panel: "S-26_A_S-29_SERVICIOS2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-30-TRAMPA-7", categoria: "INDICACION", pregunta: "Quina diferència hi ha entre S-28 i S-30?", opcions: ["S-28 zona residencial 10km/h, S-30 zona peatonal només vianants", "Són iguals", "S-30 és 30km/h"], correcta: 0, codi: "S-30", nombre_senal: "ZONA PEATONAL VS RESIDENCIAL", tip: "💡 TRAMPA: S-28 = Cotxes + vianants a 10. S-30 = Només vianants, cotxes prohibits excepte excepcions", audio: "Trampa diferència S-28 i S-30.", panel_id: "S-10", ruta_panel: "S-30_A_S-33_SERVICIOS3.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-36-TRAMPA-8", categoria: "INDICACION", pregunta: "Veus S-36 amb bici i barra vermella. Què vol dir?", opcions: ["Prohibit circular en bicicleta", "Fi carril bici", "Zona bici"], correcta: 0, codi: "S-36", nombre_senal: "PROHIBIDO BICICLETAS - TRAMPA", tip: "💡 TRAMPA: S-36 = Prohibit bici. S-35 = Carril bici obligatori. S-40 = Prohibit bici I patinet", audio: "Trampa prohibit bicicletes.", panel_id: "S-11", ruta_panel: "S-34_A_S-37_SERVICIOS4.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-40-TRAMPA-9", categoria: "INDICACION", pregunta: "Veus S-40 amb bici i patinet i creu vermella. Què vol dir?", opcions: ["Prohibit bicicletes i VMP", "Prohibit només bici", "Fi de carril"], correcta: 0, codi: "S-40", nombre_senal: "PROHIBIDO BICI Y VMP - TRAMPA", tip: "💡 TRAMPA: S-40 = Dos símbols + creu. Prohibit tot vehicle de 2 rodes no motor i VMP", audio: "Trampa prohibit bici i VMP.", panel_id: "S-12", ruta_panel: "S-38_A_S-41_SERVICIOS5.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-41-TRAMPA-10", categoria: "INDICACION", pregunta: "Veus S-41 amb línia vertical. Com es circula?", opcions: ["Bicis a l'esquerra i vianants a la dreta separats", "Bicis i vianants barrejats", "Només vianants"], correcta: 0, codi: "S-41", nombre_senal: "VIA CICLISTA I VIANANTS - TRAMPA", tip: "💡 TRAMPA DGT: S-41 = Línia separa. S-43 = 3 franges bici+VMP+vianant", audio: "Trampa via ciclista i vianants.", panel_id: "S-12", ruta_panel: "S-38_A_S-41_SERVICIOS5.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-47-TRAMPA-11", categoria: "INDICACION", pregunta: "Veus S-47 ZONA 20. Quina velocitat?", opcions: ["Màxim 20km/h i prioritat vianants", "Mínim 20km/h", "Recomanat 20km/h"], correcta: 0, codi: "S-47", nombre_senal: "ZONA 20 - TRAMPA", tip: "💡 TRAMPA: ZONA 20 = 20 max. ZONA 30 = 30 max. RESIDENCIAL = 10 max", audio: "Trampa zona 20.", panel_id: "S-14", ruta_panel: "S-46_A_S-49_SERVICIOS7.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-51-TRAMPA-12", categoria: "INDICACION", pregunta: "Veus S-51 blau amb BUS. Pots circular-hi amb cotxe?", opcions: ["No, només busos", "Sí sempre", "Sí si no ve bus"], correcta: 0, codi: "S-51", nombre_senal: "CARRIL BUS - TRAMPA", tip: "💡 TRAMPA: Carril BUS = Prohibit cotxe. Només bus. S-70b = Bus+taxi+bici+VMP sí", audio: "Trampa carril bus.", panel_id: "S-15", ruta_panel: "S-50_A_S-51_SERVICIOS8.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-52-TRAMPA-13", categoria: "INDICACION", pregunta: "Veus S-52d. Quina diferència amb S-53?", opcions: ["S-52d desdoblament mateixa direcció, S-53 bifurcació dues direccions diferents", "Són iguals", "S-52 és sortida"], correcta: 0, codi: "S-52d", nombre_senal: "DESDOBLAMIENTO VS BIFURCACION", tip: "💡 TRAMPA CLAU: Desdoblament = 1 en 2 mateix destí. Bifurcació = 2 destins diferents", audio: "Trampa desdoblament vs bifurcació.", panel_id: "S-16", ruta_panel: "S-52D_A_S-53A_BIFURCACION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-61-TRAMPA-14", categoria: "INDICACION", pregunta: "Veus S-61a. El carril dret...", opcions: ["És només per sortir de la via", "Continua recte", "És reversible"], correcta: 0, codi: "S-61a", nombre_senal: "CARRIL DE SORTIDA - TRAMPA", tip: "💡 TRAMPA: Fletxa que surt = Només sortida. Si vas recte i estàs a aquest carril has de sortir", audio: "Trampa carril de sortida.", panel_id: "S-17", ruta_panel: "S-53B_A_S-61A_SALIDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-61c-TRAMPA-15", categoria: "INDICACION", pregunta: "Veus S-61c amb fletxa cap avall en sentit contrari. Què vol dir?", opcions: ["Vas en sentit contrari al teu, perill frontal", "Carril de sortida", "Carril reversible"], correcta: 0, codi: "S-61c", nombre_senal: "CARRIL CONTRARI - TRAMPA", tip: "💡 TRAMPA DGT: 1 sola fletxa cap a tu = SENTIT CONTRARI. Molt perillós", audio: "Trampa carril contrari.", panel_id: "S-18", ruta_panel: "S-61B_A_S-63A_SALIDA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-66-TRAMPA-16", categoria: "INDICACION", pregunta: "Veus S-66 amb creu vermella sobre carril reversible. Què vol dir?", opcions: ["Fi de carril reversible", "Prohibit circular", "Carril tancat per obres"], correcta: 0, codi: "S-66", nombre_senal: "FIN REVERSIBLE - TRAMPA", tip: "💡 APREN: Creu vermella sobre fletxes = Fi de la regulació reversible", audio: "Trampa fi carril reversible.", panel_id: "S-19", ruta_panel: "S-65A_A_S-70A_CARRILES.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-71-TRAMPA-17", categoria: "INDICACION", pregunta: "Veus S-71a confluència per l'esquerra. Què has de fer?", opcions: ["Vigilar incorporació de vehicles per l'esquerra", "Incorporar-te a l'esquerra", "Girar a l'esquerra"], correcta: 0, codi: "S-71a", nombre_senal: "CONFLUENCIA - TRAMPA", tip: "💡 APREN: Confluència = Vehicles que s'uneixen. No és un gir teu", audio: "Trampa confluència.", panel_id: "S-20", ruta_panel: "S-70B_A_S-72B_CONFLUENCIA.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-200-TRAMPA-18", categoria: "INDICACION", pregunta: "Veus S-200 amb cercle i fletxes. Què és?", opcions: ["Preseñalització de rotonda propera", "Rotonda obligatòria aquí", "Direcció prohibida"], correcta: 0, codi: "S-200", nombre_senal: "PRESEÑALIZACION ROTONDA - TRAMPA", tip: "💡 TRAMPA: Preseñalització = Abans de rotonda. R-402 = Rotonda aquí mateix", audio: "Trampa preseñalització rotonda.", panel_id: "S-23", ruta_panel: "S-200_A_S-203_PRESEÑAL.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-220-TRAMPA-19", categoria: "INDICACION", pregunta: "Veus S-220 amb Haro 500m i fletxa. Què vol dir?", opcions: ["A 500m trobaràs direcció cap a Haro", "Haro està a 500m d'aquí", "Prohibit anar a Haro"], correcta: 0, codi: "S-220", nombre_senal: "PRESEÑAL 500M - TRAMPA", tip: "💡 APREN: Preseñalització amb metres = Anticipa sortida, no està aquí encara", audio: "Trampa preseñalització Haro.", panel_id: "S-24", ruta_panel: "S-220_A_S-222_PRESEÑAL2.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-341-TRAMPA-20", categoria: "INDICACION", pregunta: "Veus S-341 fons blanc amb sortida 22. Cap on vas?", opcions: ["Sortida cap a carretera convencional", "Sortida cap a autopista", "Sortida cap a autovia"], correcta: 0, codi: "S-341", nombre_senal: "SORTIDA BLANCA VS BLAVA - TRAMPA", tip: "💡 TRAMPA CLAU DGT: FONS BLANC = CARRETERA. FONS BLAU = AUTOPISTA/AUTOVIA. S-341 blanc, S-342 blau", audio: "Trampa sortida blanca vs blava.", panel_id: "S-26", ruta_panel: "S-321_A_S-342_DIRECCION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-342-TRAMPA-21", categoria: "INDICACION", pregunta: "Veus S-342 fons blau amb sortida 22. Cap on vas?", opcions: ["Sortida cap a autopista o autovia", "Sortida cap a carretera", "Sortida cap a poble"], correcta: 0, codi: "S-342", nombre_senal: "SORTIDA AUTOPISTA - TRAMPA", tip: "💡 TRAMPA CLAU: FONS BLAU = AUTOPISTA. Això surt molt a l'examen", audio: "Trampa sortida cap a autopista.", panel_id: "S-26", ruta_panel: "S-321_A_S-342_DIRECCION.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } },
{ id: "S-105-TRAMPA-22", categoria: "SERVICIO", pregunta: "Veus S-105c WC, S-105d gasolinera, S-105e hotel. Quina categoria són?", opcions: ["Senyals de servei", "Senyals d'indicació general", "Senyals de preseñalització"], correcta: 0, codi: "S-105c", nombre_senal: "SERVICIO - TRAMPA", tip: "💡 APREN: S-100 a S-199 són SERVEIS. Blau amb pictograma blanc", audio: "Trampa senyals de servei.", panel_id: "S-22", ruta_panel: "S-105C_A_S-108_SERVICIO.jpg", coords: { x1: 0, y1: 0, x2: 0, y2: 0 } }
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


