// GASDRIVE DGT V8.14 CAT - 630 PREGUNTES DGT 2026
const VERSION = "8.15";

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
{id:1,q:"El senyal P-1 Què indica?",a:["Corba perillosa a la dreta","Corba perillosa a l'esquerra","Rotonda"],ok:0,codigo:"p-1",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M70 140 Q100 80 130 140" stroke="#000" stroke-width="12" fill="none"/></svg>`},
{id:2,q:"El senyal P-2 Què indica?",a:["Doble corba perillosa, primera a la dreta","Doble corba, primera a l'esquerra","Corba tancada"],ok:0,codigo:"p-2",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M60 140 Q90 100 120 140 Q150 100 180 140" stroke="#000" stroke-width="12" fill="none"/></svg>`},
{id:3,q:"El senyal P-3 Què indica?",a:["Intersecció amb via sense prioritat","Intersecció amb via amb prioritat","Rotonda"],ok:0,codigo:"p-3",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M40 100 L160 100 M100 40 L100 160" stroke="#000" stroke-width="12"/></svg>`},
{id:4,q:"El senyal P-4 Què indica?",a:["Glorieta","Intersecció","Fi de via"],ok:0,codigo:"p-4",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="100" cy="100" r="30" stroke="#000" stroke-width="12" fill="none"/></svg>`},
{id:5,q:"El senyal P-5 Què indica?",a:["Creuament amb via de ciclistes","Pas de vianants","Prohibit bicis"],ok:0,codigo:"p-5",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="75" cy="130" r="10" stroke="#000" stroke-width="6" fill="none"/><circle cx="125" cy="130" r="10" stroke="#000" stroke-width="6" fill="none"/><path d="M75 130 L95 110 L105 130 L95 110 L95 100" stroke="#000" stroke-width="6" fill="none"/></svg>`},
{id:6,q:"El senyal P-6 Què indica?",a:["Pas de vianants","Prohibit vianants","Zona de vianants"],ok:0,codigo:"p-6",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="100" cy="80" r="10" fill="#000"/><rect x="95" y="95" width="10" height="20" fill="#000"/><path d="M100 115 L85 145 M100 115 L115 145" stroke="#000" stroke-width="8"/></svg>`},
{id:7,q:"El senyal P-7 Què indica?",a:["Pas de nens","Prohibit nens","Zona escolar"],ok:0,codigo:"p-7",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="80" cy="75" r="8" fill="#000"/><circle cx="120" cy="75" r="8" fill="#000"/><rect x="75" y="88" width="10" height="18" fill="#000"/><rect x="115" y="88" width="10" height="18" fill="#000"/><path d="M80 106 L120 106" stroke="#000" stroke-width="6"/></svg>`},
{id:8,q:"El senyal P-8 Què indica?",a:["Pas d'animals domèstics","Prohibit animals","Zona de caça"],ok:0,codigo:"p-8",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M70 120 Q100 90 130 120" stroke="#000" stroke-width="10" fill="none"/></svg>`},
{id:9,q:"El senyal P-9 Què indica?",a:["Sortida de camions","Prohibit camions","Zona de càrrega"],ok:0,codigo:"p-9",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><rect x="60" y="90" width="80" height="40" fill="#000"/></svg>`},
{id:10,q:"El senyal P-10 Què indica?",a:["Pont mòbil","Pont estret","Prohibit pont"],ok:0,codigo:"p-10",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><rect x="40" y="120" width="120" height="10" fill="#000"/><rect x="90" y="90" width="20" height="30" fill="#000"/></svg>`},
{id:11,q:"El senyal R-1 Què indica?",a:["Cedeixi el pas","Stop, detenció obligatòria","Prioritat a la dreta"],ok:1,codigo:"r-1",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#fff" stroke="#D32F2F" stroke-width="10"/><text x="100" y="140" fill="#D32F2F" font-size="32" font-weight="900" font-family="Arial Black" text-anchor="middle">STOP</text></svg>`},
{id:12,q:"El senyal R-2 Què indica?",a:["Cedeixi el pas","Prohibit girar","Zona 20"],ok:0,codigo:"r-2",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#fff" stroke="#D32F2F" stroke-width="10"/></svg>`},
{id:13,q:"El senyal R-3 Què indica?",a:["Prohibit el pas","Prohibit girar","Prohibit avançar"],ok:0,codigo:"r-3",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/></svg>`},
{id:14,q:"El senyal R-4 Què indica?",a:["Prohibit girar a la dreta","Prohibit girar a l'esquerra","Gir obligatori"],ok:0,codigo:"r-4",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><path d="M100 50 L100 100 L150 100" stroke="#fff" stroke-width="18" fill="none" stroke-linecap="round"/></svg>`},
{id:15,q:"El senyal R-5 Què indica?",a:["Prohibit girar a l'esquerra","Prohibit girar a la dreta","Gir obligatori"],ok:0,codigo:"r-5",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><path d="M100 50 L100 100 L50 100" stroke="#fff" stroke-width="18" fill="none" stroke-linecap="round"/></svg>`},
{id:16,q:"El senyal R-6 Què indica?",a:["Prohibit girar en U","Gir en U obligatori","Rotonda"],ok:0,codigo:"r-6",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><path d="M100 60 A40 40 0 1 1 99 60" stroke="#fff" stroke-width="16" fill="none" stroke-linecap="round"/></svg>`},
{id:17,q:"El senyal R-7 Què indica?",a:["Prohibit avançar","Avançament obligatori","Fi de prohibició"],ok:0,codigo:"r-7",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><rect x="60" y="75" width="28" height="50" fill="#fff"/><rect x="112" y="75" width="28" height="50" fill="#A9A9A9"/></svg>`},
{id:18,q:"El senyal R-8 Què indica?",a:["Prohibit avançar a camions","Avançament obligatori","Fi de prohibició"],ok:0,codigo:"r-8",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><rect x="60" y="75" width="28" height="50" fill="#fff"/><rect x="112" y="75" width="28" height="50" fill="#A9A9A9"/><text x="126" y="110" fill="#fff" font-size="16" font-weight="900">T</text></svg>`},
{id:19,q:"El senyal R-9 Què indica?",a:["Limitació de velocitat","Velocitat mínima","Fi de velocitat"],ok:0,codigo:"r-9",tipus:"limitacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><text x="100" y="115" fill="#fff" font-size="60" font-weight="900" text-anchor="middle">50</text></svg>`},
{id:20,q:"El senyal R-10 Què indica?",a:["Prohibit ús del clàxon","Ús obligatori","Silenci"],ok:0,codigo:"r-10",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><path d="M70 100 L90 80 L90 120 Z" fill="#fff"/><path d="M95 70 Q120 100 95 130" stroke="#fff" stroke-width="6" fill="none"/></svg>`},
{id:21,q:"El senyal R-11 Què indica?",a:["Limitació de pes","Pes màxim","Prohibit camions"],ok:0,codigo:"r-11",tipus:"limitacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><text x="100" y="115" fill="#fff" font-size="55" font-weight="900" text-anchor="middle">5t</text></svg>`},
{id:22,q:"El senyal R-12 Què indica?",a:["Limitació d'amplada","Amplada màxima","Prohibit vehicles amples"],ok:0,codigo:"r-12",tipus:"limitacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><text x="100" y="115" fill="#fff" font-size="50" font-weight="900" text-anchor="middle">2m</text></svg>`},
{id:23,q:"El senyal R-13 Què indica?",a:["Limitació d'altura","Altura màxima","Prohibit vehicles alts"],ok:0,codigo:"r-13",tipus:"limitacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><text x="100" y="115" fill="#fff" font-size="50" font-weight="900" text-anchor="middle">3m</text></svg>`},
{id:24,q:"El senyal R-14 Què indica?",a:["Limitació de longitud","Longitud màxima","Prohibit vehicles llargs"],ok:0,codigo:"r-14",tipus:"limitacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><text x="100" y="115" fill="#fff" font-size="45" font-weight="900" text-anchor="middle">10m</text></svg>`},
{id:25,q:"El senyal R-15 Què indica?",a:["Prohibit estacionar","Zona d'estacionament","Fi de prohibició"],ok:0,codigo:"r-15",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><rect x="55" y="70" width="90" height="60" fill="#fff"/></svg>`},
{id:26,q:"El senyal R-16 Què indica?",a:["Prohibit estacionar i parar","Zona d'estacionament","Fi de prohibició"],ok:0,codigo:"r-16",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><rect x="55" y="70" width="90" height="60" fill="#fff"/><rect x="55" y="135" width="90" height="10" fill="#fff"/></svg>`},
{id:27,q:"El senyal R-17 Què indica?",a:["Prohibit vianants","Zona de vianants","Pas de vianants"],ok:0,codigo:"r-17",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><circle cx="100" cy="75" r="10" fill="#fff"/><rect x="95" y="90" width="10" height="25" fill="#fff"/><path d="M100 115 L85 150 M100 115 L115 150" stroke="#fff" stroke-width="8"/></svg>`},
{id:28,q:"El senyal R-18 Què indica?",a:["Prohibit bicicletes","Carril bici","Zona de bicicletes"],ok:0,codigo:"r-18",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><circle cx="75" cy="135" r="14" stroke="#fff" stroke-width="6" fill="none"/><circle cx="125" cy="135" r="14" stroke="#fff" stroke-width="6" fill="none"/><path d="M75 135 L95 115 L115 135 L95 115 L95 100" stroke="#fff" stroke-width="6" fill="none"/></svg>`},
{id:29,q:"El senyal R-19 Què indica?",a:["Prohibit cavalls","Via eqüestre","Pas de cavalls"],ok:0,codigo:"r-19",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><path d="M70 110 Q100 85 130 110" stroke="#fff" stroke-width="8" fill="none"/></svg>`},
{id:30,q:"El senyal R-20 Què indica?",a:["Prohibit vehicles de motor","Zona de vehicles","Fi de prohibició"],ok:0,codigo:"r-20",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><rect x="55" y="80" width="90" height="40" fill="#fff"/></svg>`},
{id:31,q:"El senyal R-202 Què indica obligatòriament?",a:["Passar per la dreta o per l'esquerra","Només per la dreta","Només per l'esquerra"],ok:0,codigo:"r-202",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 55 L150 100 L100 145 L50 100 Z" fill="#fff"/></svg>`},
{id:32,q:"El senyal R-203 Què indica obligatòriament?",a:["Passar per la dreta de l'obstacle","Passar per l'esquerra","Aturar-se"],ok:0,codigo:"r-203",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><rect x="80" y="55" width="40" height="90" fill="#fff"/><path d="M100 55 L150 100 L100 145" stroke="#fff" stroke-width="16" fill="none"/></svg>`},
{id:33,q:"El senyal R-204 Què indica obligatòriament?",a:["Passar per l'esquerra de l'obstacle","Passar per la dreta","Aturar-se"],ok:0,codigo:"r-204",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><rect x="80" y="55" width="40" height="90" fill="#fff"/><path d="M100 55 L50 100 L100 145" stroke="#fff" stroke-width="16" fill="none"/></svg>`},
{id:34,q:"El senyal R-205 Què indica obligatòriament?",a:["Continuar recte","Girar a la dreta","Girar a l'esquerra"],ok:0,codigo:"r-205",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 55 L100 145" stroke="#fff" stroke-width="18" stroke-linecap="round"/></svg>`},
{id:35,q:"El senyal R-206 Què indica obligatòriament?",a:["Girar a la dreta","Girar a l'esquerra","Continuar recte"],ok:0,codigo:"r-206",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 65 L100 110 L150 110" stroke="#fff" stroke-width="18" fill="none" stroke-linecap="round"/></svg>`},
{id:36,q:"El senyal R-207 Què indica obligatòriament?",a:["Continuar recte o girar a la dreta","Només recte","Només girar"],ok:0,codigo:"r-207",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 65 L100 110 M100 110 L150 110" stroke="#fff" stroke-width="16" fill="none"/></svg>`},
{id:37,q:"El senyal R-208 Què indica obligatòriament?",a:["Continuar recte o girar a l'esquerra","Només recte","Només girar"],ok:0,codigo:"r-208",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 65 L100 110 M100 110 L50 110" stroke="#fff" stroke-width="16" fill="none"/></svg>`},
{id:38,q:"El senyal R-209 Què indica obligatòriament?",a:["Girar a la dreta","Girar a l'esquerra","Continuar recte"],ok:0,codigo:"r-209",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 75 Q150 100 100 125" stroke="#fff" stroke-width="18" fill="none"/></svg>`},
{id:39,q:"El senyal R-210 Què indica obligatòriament?",a:["Girar a l'esquerra","Girar a la dreta","Continuar recte"],ok:0,codigo:"r-210",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 75 Q50 100 100 125" stroke="#fff" stroke-width="18" fill="none"/></svg>`},
{id:40,q:"El senyal R-211 Què indica obligatòriament?",a:["Circulació en rotonda","Cedir el pas","Prohibit entrar"],ok:0,codigo:"r-211",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 60 A40 40 0 1 1 99 60" stroke="#fff" stroke-width="16" fill="none"/></svg>`},
{id:41,q:"El senyal R-212 Què indica obligatòriament?",a:["Carril bici","Zona de vianants","Pas de ciclistes"],ok:0,codigo:"r-212",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><circle cx="75" cy="135" r="14" stroke="#fff" stroke-width="6" fill="none"/><circle cx="125" cy="135" r="14" stroke="#fff" stroke-width="6" fill="none"/><path d="M75 135 L95 115 L115 135 L95 115 L95 100" stroke="#fff" stroke-width="6" fill="none"/></svg>`},
{id:42,q:"El senyal R-213 Què indica obligatòriament?",a:["Camí per a vianants","Zona de vianants","Pas de vianants"],ok:0,codigo:"r-213",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><circle cx="100" cy="80" r="10" fill="#fff"/><rect x="95" y="95" width="10" height="25" fill="#fff"/><path d="M100 120 L85 155 M100 120 L115 155" stroke="#fff" stroke-width="8"/></svg>`},
{id:43,q:"El senyal R-214 Què indica obligatòriament?",a:["Camí per a cavalls","Via eqüestre","Pas de cavalls"],ok:0,codigo:"r-214",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M70 110 Q100 85 130 110" stroke="#fff" stroke-width="8" fill="none"/></svg>`},
{id:44,q:"El senyal R-215 Què indica obligatòriament?",a:["Velocitat mínima","Velocitat màxima","Fi de velocitat mínima"],ok:0,codigo:"r-215",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><text x="100" y="115" fill="#fff" font-size="60" font-weight="900" text-anchor="middle">40</text></svg>`},
{id:45,q:"El senyal R-216 Què indica obligatòriament?",a:["Cadenes per a neu","Prohibit cadenes","Fi de cadenes"],ok:0,codigo:"r-216",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><circle cx="100" cy="100" r="35" stroke="#fff" stroke-width="8" fill="none"/></svg>`},
{id:46,q:"El senyal R-217 Què indica obligatòriament?",a:["Llums de curt abast","Llums de llarg abast","Prohibit llums"],ok:0,codigo:"r-217",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><circle cx="100" cy="100" r="22" fill="#fff"/></svg>`},
{id:47,q:"El senyal R-218 Què indica obligatòriament?",a:["Ús del clàxon","Prohibit clàxon","Silenci"],ok:0,codigo:"r-218",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M70 100 L90 80 L90 120 Z" fill="#fff"/><path d="M95 70 Q120 100 95 130" stroke="#fff" stroke-width="6" fill="none"/></svg>`},
{id:48,q:"El senyal R-301 Què indica?",a:["Fi de totes les prohibicions anteriors","Inici de prohibició","Zona 20"],ok:0,codigo:"r-301",tipus:"fi-prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:49,q:"El senyal R-302 Què indica?",a:["Fi de prohibició d'avançar","Inici de prohibició","Avançament obligatori"],ok:0,codigo:"r-302",tipus:"fi-prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><rect x="60" y="75" width="28" height="50" fill="#000"/><rect x="112" y="75" width="28" height="50" fill="#A9A9A9"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:50,q:"El senyal R-303 Què indica?",a:["Fi de prohibició d'avançar a camions","Inici de prohibició","Avançament obligatori"],ok:0,codigo:"r-303",tipus:"fi-prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><rect x="60" y="75" width="28" height="50" fill="#000"/><rect x="112" y="75" width="28" height="50" fill="#A9A9A9"/><text x="126" y="110" fill="#000" font-size="16" font-weight="900">T</text><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:51,q:"El senyal R-304 Què indica?",a:["Fi de limitació de velocitat","Inici de limitació","Velocitat màxima"],ok:0,codigo:"r-304",tipus:"fi-prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><text x="100" y="115" fill="#000" font-size="60" font-weight="900" text-anchor="middle">80</text><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:52,q:"El senyal R-305 Què indica?",a:["Fi de prohibició d'ús del clàxon","Inici de prohibició","Ús obligatori"],ok:0,codigo:"r-305",tipus:"fi-prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><path d="M70 100 L90 80 L90 120 Z" fill="#000"/><path d="M95 70 Q120 100 95 130" stroke="#000" stroke-width="6" fill="none"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:53,q:"Què finalitza el senyal R-310?",a:["La prohibició d'estacionar","La prohibició de parar","La zona d'estacionament"],ok:0,codigo:"r-310",tipus:"fi-prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><rect x="55" y="70" width="90" height="60" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:54,q:"Què finalitza el senyal R-311?",a:["La prohibició d'estacionar i parar","La prohibició d'estacionar","La zona d'aparcament"],ok:0,codigo:"r-311",tipus:"fi-prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><rect x="55" y="70" width="90" height="60" fill="#000"/><rect x="55" y="135" width="90" height="10" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:55,q:"Què finalitza el senyal R-312?",a:["La velocitat mínima","La velocitat màxima","La prohibició d'avançar"],ok:0,codigo:"r-312",tipus:"fi-obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><text x="100" y="115" fill="#000" font-size="60" font-weight="900" text-anchor="middle">40</text><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:56,q:"Què finalitza el senyal R-313?",a:["L'ús obligatori de cadenes per a neu","La prohibició de cadenes","La limitació de velocitat"],ok:0,codigo:"r-313",tipus:"fi-obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><circle cx="100" cy="100" r="35" stroke="#000" stroke-width="8" fill="none"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:57,q:"Què indica el senyal S-1?",a:["Inici d'autopista","Fi d'autopista","Inici d'autovia"],ok:0,codigo:"s-1",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="70" font-weight="900" text-anchor="middle">AP</text></svg>`},
{id:58,q:"Què indica el senyal S-2?",a:["Inici d'autovia","Fi d'autovia","Inici d'autopista"],ok:0,codigo:"s-2",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="70" font-weight="900" text-anchor="middle">A</text></svg>`},
{id:59,q:"Què indica el senyal S-3?",a:["Fi d'autopista","Inici d'autopista","Fi d'autovia"],ok:0,codigo:"s-3",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="70" font-weight="900" text-anchor="middle">AP</text><line x1="30" y1="30" x2="170" y2="170" stroke="#fff" stroke-width="8"/></svg>`},
{id:60,q:"Què indica el senyal S-4?",a:["Fi d'autovia","Inici d'autovia","Fi d'autopista"],ok:0,codigo:"s-4",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="70" font-weight="900" text-anchor="middle">A</text><line x1="30" y1="30" x2="170" y2="170" stroke="#fff" stroke-width="8"/></svg>`},
{id:61,q:"Què indica el senyal S-5?",a:["Inici de via amb prioritat","Fi de via amb prioritat","Cedeixi el pas"],ok:0,codigo:"s-5",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#FFD400"/><rect x="50" y="50" width="100" height="100" fill="#000"/></svg>`},
{id:62,q:"Què indica el senyal S-6?",a:["Fi de via amb prioritat","Inici de via amb prioritat","Stop"],ok:0,codigo:"s-6",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#FFD400"/><rect x="50" y="50" width="100" height="100" fill="#000"/><line x1="30" y1="30" x2="170" y2="170" stroke="#000" stroke-width="8"/></svg>`},
{id:63,q:"Què indica el senyal S-7?",a:["Inici de zona 30","Fi de zona 30","Limitació de velocitat a 30"],ok:0,codigo:"s-7",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="115" fill="#fff" font-size="50" font-weight="900" text-anchor="middle">30</text></svg>`},
{id:64,q:"Què indica el senyal S-8?",a:["Fi de zona 30","Inici de zona 30","Limitació de velocitat a 30"],ok:0,codigo:"s-8",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="115" fill="#fff" font-size="50" font-weight="900" text-anchor="middle">30</text><line x1="30" y1="30" x2="170" y2="170" stroke="#fff" stroke-width="8"/></svg>`},
{id:65,q:"Què indica el senyal S-11?",a:["Pas de vianants","Prohibit vianants","Zona de vianants"],ok:0,codigo:"s-11",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><circle cx="100" cy="80" r="12" fill="#fff"/><rect x="94" y="98" width="12" height="24" fill="#fff"/><path d="M100 122 L84 156 M100 122 L116 156" stroke="#fff" stroke-width="8"/></svg>`},
{id:66,q:"Què indica el senyal S-13?",a:["Aparcament autoritzat","Prohibit estacionar","Zona de càrrega i descàrrega"],ok:0,codigo:"s-13",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="80" font-weight="900" text-anchor="middle">P</text></svg>`},
{id:67,q:"Què indica el senyal S-14?",a:["Estació de servei","Taller mecànic","Hospital"],ok:0,codigo:"s-14",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="70" font-weight="900" text-anchor="middle">S</text></svg>`},
{id:68,q:"Què indica el senyal S-15?",a:["Telèfon","Taller","Taxi"],ok:0,codigo:"s-15",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M70 80 Q100 60 130 80 L120 140 Q100 160 80 140 Z" fill="#fff"/></svg>`},
{id:69,q:"Què indica el senyal S-16?",a:["Taller de reparacions","Estació de servei","Hospital"],ok:0,codigo:"s-16",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M100 60 L100 140 M60 100 L140 100" stroke="#fff" stroke-width="12"/></svg>`},
{id:70,q:"Què indica el senyal S-17?",a:["Hotel","Restaurant","Càmping"],ok:0,codigo:"s-17",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><rect x="60" y="60" width="80" height="80" fill="#fff"/><rect x="75" y="100" width="50" height="40" fill="#005EB8"/></svg>`},
{id:71,q:"Què indica el senyal S-18?",a:["Restaurant","Hotel","Bar"],ok:0,codigo:"s-18",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M70 100 Q100 70 130 100 L130 140 L70 140 Z" fill="#fff"/></svg>`},
{id:72,q:"Què indica el senyal S-20?",a:["Càmping","Hotel","Àrea de descans"],ok:0,codigo:"s-20",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M60 140 L60 80 L140 80 L140 140" fill="#fff"/></svg>`},
{id:73,q:"Què indica el senyal S-21?",a:["Àrea de descans","Càmping","Estacionament"],ok:0,codigo:"s-21",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><circle cx="100" cy="100" r="40" fill="#fff"/></svg>`},
{id:74,q:"Què indica el senyal S-25?",a:["Hospital","Farmàcia","Centre mèdic"],ok:0,codigo:"s-25",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M100 60 L100 140 M60 100 L140 100" stroke="#fff" stroke-width="14"/></svg>`},
{id:75,q:"Quin perill indica el senyal P-11?",a:["Estretament de calçada","Pont estret","Túnel"],ok:0,codigo:"p-11",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M50 100 L80 60 L120 140 L150 100" stroke="#000" stroke-width="12" fill="none"/></svg>`},
{id:76,q:"Quin perill indica el senyal P-12?",a:["Perill per neu o gel","Perill per pluja","Perill per boira"],ok:0,codigo:"p-12",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M100 60 L100 140 M80 80 L120 80 M80 120 L120 120" stroke="#000" stroke-width="8"/></svg>`},
{id:77,q:"Quin perill indica el senyal P-13?",a:["Projecció de grava","Caiguda de pedres","Carretera relliscosa"],ok:0,codigo:"p-13",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="100" cy="100" r="8" fill="#000"/><circle cx="120" cy="120" r="8" fill="#000"/><circle cx="80" cy="120" r="8" fill="#000"/></svg>`},
{id:78,q:"Quin perill indica el senyal P-14?",a:["Caiguda de pedres","Projecció de grava","Despreniments"],ok:0,codigo:"p-14",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M100 50 L60 120 L140 120 Z" fill="#000"/></svg>`},
{id:79,q:"Quin perill indica el senyal P-15?",a:["Vent lateral","Vent fort","Tempesta"],ok:0,codigo:"p-15",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M60 100 Q100 70 140 100 Q100 130 60 100" stroke="#000" stroke-width="8" fill="none"/></svg>`},
{id:80,q:"Quin perill indica el senyal P-16?",a:["Circulació en els dos sentits","Fi de via única","Prohibit avançar"],ok:0,codigo:"p-16",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M60 100 L140 100 M60 100 L80 80 M60 100 L80 120 M140 100 L120 80 M140 100 L120 120" stroke="#000" stroke-width="10"/></svg>`},
{id:81,q:"Quin perill indica el senyal P-17?",a:["Pas a nivell amb barreres","Pas a nivell sense barreres","Prohibit tren"],ok:0,codigo:"p-17",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><rect x="60" y="80" width="80" height="40" fill="#000"/><rect x="50" y="130" width="100" height="10" fill="#000"/></svg>`},
{id:82,q:"Quin perill indica el senyal P-18?",a:["Pas a nivell sense barreres","Pas a nivell amb barreres","Prohibit tren"],ok:0,codigo:"p-18",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><rect x="60" y="80" width="80" height="40" fill="#000"/></svg>`},
{id:83,q:"Quin perill indica el senyal P-20?",a:["Aproximació a aeroport","Aterratge d'avions","Prohibit volar"],ok:0,codigo:"p-20",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M60 100 L140 100 L120 80 L140 100 L120 120" stroke="#000" stroke-width="10" fill="none"/></svg>`},
{id:84,q:"Quin perill indica el senyal P-21?",a:["Quai o moll","Desnivell","Pont mòbil"],ok:0,codigo:"p-21",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M40 120 L160 120 L160 140 L40 140 Z" fill="#000"/></svg>`},
{id:85,q:"Quin perill indica el senyal P-22?",a:["Sortida a un dic o moll","Perill d'inundació","Port"],ok:0,codigo:"p-22",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M50 130 L150 130 L150 150 L50 150 Z" fill="#000"/></svg>`},
{id:86,q:"Quin perill indica el senyal P-24?",a:["Pas d'animals en llibertat","Pas de bestiar","Prohibit animals"],ok:0,codigo:"p-24",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M70 110 Q100 80 130 110" stroke="#000" stroke-width="10" fill="none"/></svg>`},
{id:87,q:"Quin perill indica el senyal P-25?",a:["Perill per trànsit de vianants","Zona de vianants","Prohibit vianants"],ok:0,codigo:"p-25",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="100" cy="80" r="10" fill="#000"/><rect x="95" y="95" width="10" height="20" fill="#000"/><path d="M100 115 L85 145 M100 115 L115 145" stroke="#000" stroke-width="8"/></svg>`},
{id:88,q:"Quin perill indica el senyal P-26?",a:["Perill per trànsit de ciclistes","Carril bici","Prohibit bicis"],ok:0,codigo:"p-26",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="80" cy="130" r="10" stroke="#000" stroke-width="6" fill="none"/><circle cx="120" cy="130" r="10" stroke="#000" stroke-width="6" fill="none"/><path d="M80 130 L100 110 L120 130 L100 110 L100 100" stroke="#000" stroke-width="6" fill="none"/></svg>`},
{id:89,q:"Quin perill indica el senyal P-27?",a:["Perill per trànsit d'animals","Prohibit animals","Zona de caça"],ok:0,codigo:"p-27",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M70 120 Q100 90 130 120" stroke="#000" stroke-width="10" fill="none"/></svg>`},
{id:90,q:"Quin perill indica el senyal P-28?",a:["Perill per trànsit agrícola","Prohibit tractors","Zona rural"],ok:0,codigo:"p-28",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><rect x="65" y="95" width="70" height="30" fill="#000"/></svg>`},
{id:91,q:"Quin perill indica el senyal P-29?",a:["Perill per trànsit de vianants i ciclistes","Pas de vianants","Carril bici"],ok:0,codigo:"p-29",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="85" cy="80" r="8" fill="#000"/><rect x="81" y="93" width="8" height="16" fill="#000"/><circle cx="115" cy="130" r="10" stroke="#000" stroke-width="6" fill="none"/></svg>`},
{id:92,q:"Quin perill indica el senyal P-30?",a:["Altres perills","Perill genèric","Zona perillosa"],ok:0,codigo:"p-30",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><text x="100" y="140" font-size="80" font-weight="900" text-anchor="middle">!</text></svg>`},
{id:93,q:"Què indica el senyal R-415?",a:["Inici de zona de velocitat limitada","Fi de zona de velocitat","Limitació puntual"],ok:0,codigo:"r-415",tipus:"zona",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><text x="100" y="115" fill="#fff" font-size="40" font-weight="900" text-anchor="middle">ZONE</text><text x="100" y="150" fill="#fff" font-size="30" font-weight="900" text-anchor="middle">50</text></svg>`},
{id:94,q:"Què indica el senyal R-416?",a:["Fi de zona de velocitat limitada","Inici de zona","Limitació puntual"],ok:0,codigo:"r-416",tipus:"zona",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><text x="100" y="115" fill="#000" font-size="40" font-weight="900" text-anchor="middle">ZONE</text><text x="100" y="150" fill="#000" font-size="30" font-weight="900" text-anchor="middle">50</text><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:95,q:"Què indica el senyal R-417?",a:["Inici de zona residencial","Fi de zona residencial","Carrer 20"],ok:0,codigo:"r-417",tipus:"zona",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><path d="M60 80 L60 120 L80 120 L80 100 L120 100 L120 120 L140 120 L140 80 L120 80 L120 60 L80 60 L80 80 Z" fill="#fff"/></svg>`},
{id:96,q:"Què indica el senyal R-418?",a:["Fi de zona residencial","Inici de zona residencial","Carrer 20"],ok:0,codigo:"r-418",tipus:"zona",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><path d="M60 80 L60 120 L80 120 L80 100 L120 100 L120 120 L140 120 L140 80 L120 80 L120 60 L80 60 L80 80 Z" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:97,q:"Què indica el senyal R-419?",a:["Inici de zona de vianants","Fi de zona de vianants","Carril bici"],ok:0,codigo:"r-419",tipus:"zona",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><circle cx="100" cy="75" r="10" fill="#fff"/><rect x="95" y="90" width="10" height="25" fill="#fff"/><path d="M100 115 L85 150 M100 115 L115 150" stroke="#fff" stroke-width="8"/></svg>`},
{id:98,q:"Què indica el senyal R-420?",a:["Fi de zona de vianants","Inici de zona de vianants","Carril bici"],ok:0,codigo:"r-420",tipus:"zona",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><circle cx="100" cy="75" r="10" fill="#000"/><rect x="95" y="90" width="10" height="25" fill="#000"/><path d="M100 115 L85 150 M100 115 L115 150" stroke="#000" stroke-width="8"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:99,q:"Si coincideixen els senyals R-1 i P-6, quin s'ha de respectar?",a:["El senyal R-1 Stop","El senyal P-6","Tots dos per igual"],ok:0,codigo:"trampa-1",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#fff" stroke="#D32F2F" stroke-width="10"/><text x="100" y="140" fill="#D32F2F" font-size="24" font-weight="900" text-anchor="middle">STOP</text></svg>`},
{id:100,q:"Quina és la diferència entre el senyal R-301 i el R-302?",a:["R-301 aixeca totes les prohibicions, R-302 només avançar","Són iguals","R-302 aixeca totes"],ok:0,codigo:"trampa-2",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:101,q:"Entre el senyal R-7 i el R-8, quin prohibeix avançar als camions?",a:["R-8","R-7","Tots dos"],ok:0,codigo:"trampa-3",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><rect x="60" y="75" width="28" height="50" fill="#fff"/><rect x="112" y="75" width="28" height="50" fill="#A9A9A9"/><text x="126" y="110" fill="#fff" font-size="16" font-weight="900">T</text></svg>`},
{id:102,q:"Entre el senyal S-1 i el S-2, quin indica l'inici d'autopista?",a:["S-1","S-2","Tots dos"],ok:0,codigo:"trampa-4",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="70" font-weight="900" text-anchor="middle">AP</text></svg>`},
{id:103,q:"Quina diferència hi ha entre el senyal R-215 i el R-312?",a:["R-215 obliga velocitat mínima, R-312 la finalitza","Són iguals","R-312 obliga velocitat mínima"],ok:0,codigo:"trampa-5",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><text x="100" y="115" fill="#fff" font-size="60" font-weight="900" text-anchor="middle">40</text></svg>`},
{id:104,q:"Quin perill indica el senyal P-9?",a:["Intersecció amb prioritat a la dreta","Intersecció amb via sense prioritat","Rotonda"],ok:0,codigo:"p-9",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M40 100 L160 100 M100 40 L100 160" stroke="#000" stroke-width="12"/></svg>`},
{id:105,q:"Què indica el senyal S-30?",a:["Fi de totes les indicacions","Inici de zona","Fi de zona"],ok:0,codigo:"s-30",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="50" font-weight="900" text-anchor="middle">FI</text></svg>`},
{id:106,q:"Què prohibeix el senyal R-21?",a:["La circulació de vehicles agrícoles","La circulació de turismes","La circulació de motos"],ok:0,codigo:"r-21",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><rect x="60" y="80" width="80" height="40" fill="#fff"/></svg>`},
{id:107,q:"Què obliga el senyal R-219?",a:["La circulació per a vehicles de transport col·lectiu","La circulació per a taxis","La circulació per a motos"],ok:0,codigo:"r-219",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><rect x="60" y="70" width="80" height="60" fill="#fff"/></svg>`},
{id:108,q:"Què obliga el senyal R-220?",a:["La circulació per a taxis","La circulació per a autobusos","La circulació per a camions"],ok:0,codigo:"r-220",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="50" font-weight="900" text-anchor="middle">TAXI</text></svg>`},
{id:109,q:"Què indica el senyal S-23?",a:["Lloc de socors","Hospital","Farmàcia"],ok:0,codigo:"s-23",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M100 60 L100 140 M60 100 L140 100" stroke="#fff" stroke-width="14"/></svg>`},
{id:110,q:"Què indica el senyal S-24?",a:["Farmàcia","Hospital","Centre de salut"],ok:0,codigo:"s-24",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M100 60 L100 140 M60 100 L140 100" stroke="#fff" stroke-width="14"/><circle cx="100" cy="100" r="20" stroke="#fff" stroke-width="6" fill="none"/></svg>`},
{id:111,q:"Quina limitació indica el senyal R-9 amb 120?",a:["Velocitat màxima de 120 km/h","Velocitat mínima de 120 km/h","Velocitat recomanada"],ok:0,codigo:"r-9-120",tipus:"limitacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><text x="100" y="115" fill="#fff" font-size="60" font-weight="900" text-anchor="middle">120</text></svg>`},
{id:112,q:"Què finalitza el senyal R-304?",a:["La limitació de velocitat","La prohibició d'avançar","La zona 30"],ok:0,codigo:"r-304",tipus:"fi-prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><text x="100" y="115" fill="#000" font-size="60" font-weight="900" text-anchor="middle">80</text><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:113,q:"Què indica el senyal S-33?",a:["Pas inferior","Túnel","Pont"],ok:0,codigo:"s-33",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M40 120 Q100 60 160 120" stroke="#fff" stroke-width="12" fill="none"/></svg>`},
{id:114,q:"Què indica el senyal S-34?",a:["Pas superior","Túnel","Pont"],ok:0,codigo:"s-34",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M40 80 Q100 140 160 80" stroke="#fff" stroke-width="12" fill="none"/></svg>`},
{id:115,q:"Què indica el senyal S-35?",a:["Calçada sense sortida","Carrer sense sortida","Fi de via"],ok:0,codigo:"s-35",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><rect x="50" y="90" width="100" height="20" fill="#fff"/></svg>`},
{id:116,q:"Què prohibeix el senyal R-22?",a:["La circulació de vehicles amb mercaderies perilloses","La circulació de vehicles amb remolc","La circulació de vehicles pesants"],ok:0,codigo:"r-22",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><path d="M70 100 L130 100 L100 70 Z" fill="#fff"/></svg>`},
{id:117,q:"Què obliga el senyal R-217?",a:["L'ús de llums de curt abast","L'ús de llums de llarg abast","L'ús de llums antiniebla"],ok:0,codigo:"r-217",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><circle cx="100" cy="100" r="22" fill="#fff"/></svg>`},
{id:118,q:"Quin perill indica el senyal P-3?",a:["Intersecció amb via sense prioritat","Intersecció amb via amb prioritat","Rotonda"],ok:0,codigo:"p-3",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M40 100 L160 100 M100 40 L100 160" stroke="#000" stroke-width="12"/></svg>`},
{id:119,q:"Què indica el senyal S-12?",a:["Hospital","Centre de salut","Farmàcia"],ok:0,codigo:"s-12",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M100 60 L100 140 M60 100 L140 100" stroke="#fff" stroke-width="14"/></svg>`},
{id:120,q:"Què finalitza el senyal R-416?",a:["La zona de velocitat limitada","La zona residencial","La zona de vianants"],ok:0,codigo:"r-416",tipus:"zona",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><text x="100" y="115" fill="#000" font-size="40" font-weight="900" text-anchor="middle">ZONE</text><text x="100" y="150" fill="#000" font-size="30" font-weight="900" text-anchor="middle">50</text><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:121,q:"Què indica el senyal S-28?",a:["Càmping","Àrea de servei","Estacionament"],ok:0,codigo:"s-28",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M60 140 L60 80 L140 80 L140 140" fill="#fff"/></svg>`},
{id:122,q:"Què prohibeix el senyal R-23?",a:["La circulació de vehicles amb mercaderies que contaminen l'aigua","La circulació de vehicles amb remolc","La circulació de vehicles pesants"],ok:0,codigo:"r-23",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><path d="M70 120 Q100 90 130 120" stroke="#fff" stroke-width="8" fill="none"/></svg>`},
{id:123,q:"Què indica el senyal S-36?",a:["Direccions","Sortida","Entrada"],ok:0,codigo:"s-36",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M100 60 L130 90 L100 120 L70 90 Z" fill="#fff"/></svg>`},
{id:124,q:"Què obliga el senyal R-212?",a:["La circulació per al carril bici","La circulació per a vianants","La circulació per a motos"],ok:0,codigo:"r-212",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><circle cx="75" cy="135" r="14" stroke="#fff" stroke-width="6" fill="none"/><circle cx="125" cy="135" r="14" stroke="#fff" stroke-width="6" fill="none"/><path d="M75 135 L95 115 L115 135 L95 115 L95 100" stroke="#fff" stroke-width="6" fill="none"/></svg>`},
{id:125,q:"Què indica el senyal S-38?",a:["Zona de peatge","Peatge","Aparcament de pagament"],ok:0,codigo:"s-38",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="50" font-weight="900" text-anchor="middle">€</text></svg>`},
{id:126,q:"Quin perill indica el senyal P-4?",a:["Glorieta","Intersecció","Fi de via"],ok:0,codigo:"p-4",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="100" cy="100" r="30" stroke="#000" stroke-width="12" fill="none"/></svg>`},
{id:127,q:"Què indica el senyal S-40?",a:["Informació general","Informació turística","Informació de trànsit"],ok:0,codigo:"s-40",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="80" font-weight="900" text-anchor="middle">i</text></svg>`},
{id:128,q:"Què prohibeix el senyal R-24?",a:["La circulació de vianants","La circulació de bicicletes","La circulació de vehicles de motor"],ok:0,codigo:"r-24",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><circle cx="100" cy="75" r="10" fill="#fff"/><rect x="95" y="90" width="10" height="25" fill="#fff"/><path d="M100 115 L85 150 M100 115 L115 150" stroke="#fff" stroke-width="8"/></svg>`},
{id:129,q:"Què obliga el senyal R-213?",a:["El camí per a vianants","La zona de vianants","El pas de vianants"],ok:0,codigo:"r-213",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><circle cx="100" cy="80" r="10" fill="#fff"/><rect x="95" y="95" width="10" height="25" fill="#fff"/><path d="M100 120 L85 155 M100 120 L115 155" stroke="#fff" stroke-width="8"/></svg>`},
{id:130,q:"Què indica el senyal S-39?",a:["Zona de peatge electrònic","Peatge","Aparcament de pagament"],ok:0,codigo:"s-39",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="50" font-weight="900" text-anchor="middle">T</text></svg>`},
{id:131,q:"Quin perill indica el senyal P-5?",a:["Creuament amb via de ciclistes","Pas de vianants","Prohibit bicis"],ok:0,codigo:"p-5",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="75" cy="130" r="10" stroke="#000" stroke-width="6" fill="none"/><circle cx="125" cy="130" r="10" stroke="#000" stroke-width="6" fill="none"/><path d="M75 130 L95 110 L105 130 L95 110 L95 100" stroke="#000" stroke-width="6" fill="none"/></svg>`},
{id:132,q:"Què finalitza el senyal R-418?",a:["La zona residencial","La zona de velocitat","La zona de vianants"],ok:0,codigo:"r-418",tipus:"zona",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><path d="M60 80 L60 120 L80 120 L80 100 L120 100 L120 120 L140 120 L140 80 L120 80 L120 60 L80 60 L80 80 Z" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:133,q:"Què indica el senyal S-37?",a:["Autopista de peatge","Autovia","Carretera convencional"],ok:0,codigo:"s-37",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="50" font-weight="900" text-anchor="middle">AP</text><text x="100" y="160" fill="#fff" font-size="30" font-weight="900" text-anchor="middle">€</text></svg>`},
{id:134,q:"Què prohibeix el senyal R-25?",a:["La circulació de vehicles amb remolc","La circulació de vehicles pesants","La circulació de vehicles agrícoles"],ok:0,codigo:"r-25",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><rect x="55" y="80" width="90" height="40" fill="#fff"/></svg>`},
{id:135,q:"Què obliga el senyal R-214?",a:["El camí per a cavalls","La via eqüestre","El pas de cavalls"],ok:0,codigo:"r-214",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M70 110 Q100 85 130 110" stroke="#fff" stroke-width="8" fill="none"/></svg>`},
{id:136,q:"Què indica el senyal S-31?",a:["Presenyalització","Direcció","Sortida"],ok:0,codigo:"s-31",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M60 100 L140 100 L120 80 L140 100 L120 120" stroke="#fff" stroke-width="12" fill="none"/></svg>`},
{id:137,q:"Què indica el senyal S-32?",a:["Presenyalització de direccions","Direcció","Sortida"],ok:0,codigo:"s-32",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M60 100 L140 100 L120 80 L140 100 L120 120" stroke="#fff" stroke-width="12" fill="none"/></svg>`},
{id:138,q:"Quin perill indica el senyal P-7?",a:["Pas de nens","Prohibit nens","Zona escolar"],ok:0,codigo:"p-7",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="80" cy="75" r="8" fill="#000"/><circle cx="120" cy="75" r="8" fill="#000"/><rect x="75" y="88" width="10" height="18" fill="#000"/><rect x="115" y="88" width="10" height="18" fill="#000"/><path d="M80 106 L120 106" stroke="#000" stroke-width="6"/></svg>`},
{id:139,q:"Què finalitza el senyal R-420?",a:["La zona de vianants","La zona residencial","La zona de velocitat"],ok:0,codigo:"r-420",tipus:"zona",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><circle cx="100" cy="75" r="10" fill="#000"/><rect x="95" y="90" width="10" height="25" fill="#000"/><path d="M100 115 L85 150 M100 115 L115 150" stroke="#000" stroke-width="8"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:140,q:"Què indica el senyal S-19?",a:["Restaurant","Hotel","Bar"],ok:0,codigo:"s-19",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M70 100 Q100 70 130 100 L130 140 L70 140 Z" fill="#fff"/></svg>`},
{id:141,q:"Què prohibeix el senyal R-26?",a:["La circulació de vehicles amb mercaderies perilloses","La circulació de vehicles amb remolc","La circulació de vehicles pesants"],ok:0,codigo:"r-26",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><path d="M70 100 L130 100 L100 70 Z" fill="#fff"/></svg>`},
{id:142,q:"Què obliga el senyal R-216?",a:["L'ús de cadenes per a neu","L'ús de pneumàtics d'hivern","La reducció de velocitat"],ok:0,codigo:"r-216",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><circle cx="100" cy="100" r="35" stroke="#fff" stroke-width="8" fill="none"/></svg>`},
{id:143,q:"Quin perill indica el senyal P-8?",a:["Pas d'animals domèstics","Prohibit animals","Zona de caça"],ok:0,codigo:"p-8",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M70 120 Q100 90 130 120" stroke="#000" stroke-width="10" fill="none"/></svg>`},
{id:144,q:"Què indica el senyal S-22?",a:["Àrea de servei","Àrea de descans","Estacionament"],ok:0,codigo:"s-22",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><circle cx="100" cy="100" r="40" fill="#fff"/></svg>`},
{id:145,q:"Què finalitza el senyal R-311?",a:["La prohibició d'estacionar i parar","La prohibició d'estacionar","La zona d'aparcament"],ok:0,codigo:"r-311",tipus:"fi-prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><rect x="55" y="70" width="90" height="60" fill="#000"/><rect x="55" y="135" width="90" height="10" fill="#000"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:146,q:"Què indica el senyal S-27?",a:["Càmping","Hotel","Àrea de descans"],ok:0,codigo:"s-27",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><path d="M60 140 L60 80 L140 80 L140 140" fill="#fff"/></svg>`},
{id:147,q:"Què prohibeix el senyal R-27?",a:["La circulació de vehicles de motor","La circulació de bicicletes","La circulació de vianants"],ok:0,codigo:"r-27",tipus:"prohibicio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><rect x="55" y="80" width="90" height="40" fill="#fff"/></svg>`},
{id:148,q:"Què obliga el senyal R-218?",a:["L'ús del clàxon","La prohibició del clàxon","El silenci"],ok:0,codigo:"r-218",tipus:"obligacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M70 100 L90 80 L90 120 Z" fill="#fff"/><path d="M95 70 Q120 100 95 130" stroke="#fff" stroke-width="6" fill="none"/></svg>`},
{id:149,q:"Quin perill indica el senyal P-10?",a:["Pont mòbil","Pont estret","Prohibit pont"],ok:0,codigo:"p-10",tipus:"perill",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><rect x="40" y="120" width="120" height="10" fill="#000"/><rect x="90" y="90" width="20" height="30" fill="#000"/></svg>`},
{id:150,q:"Què indica el senyal S-26?",a:["Àrea de servei","Àrea de descans","Estacionament"],ok:0,codigo:"s-26",tipus:"indicacio",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><circle cx="100" cy="100" r="40" fill="#fff"/></svg>`},
{id:151,q:"Entre el senyal R-15 i el R-16, quin prohibeix també parar?",a:["R-16","R-15","Tots dos"],ok:0,codigo:"trampa-6",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><rect x="55" y="70" width="90" height="60" fill="#fff"/><rect x="55" y="135" width="90" height="10" fill="#fff"/></svg>`},
{id:152,q:"Quina diferència hi ha entre el senyal P-1 i el P-2?",a:["P-1 és una corba, P-2 són dues corbes","Són iguals","P-2 és una corba"],ok:0,codigo:"trampa-7",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M60 140 Q90 100 120 140 Q150 100 180 140" stroke="#000" stroke-width="12" fill="none"/></svg>`},
{id:153,q:"Entre el senyal R-202 i el R-205, quin obliga a continuar recte?",a:["R-205","R-202","Tots dos"],ok:0,codigo:"trampa-8",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 55 L100 145" stroke="#fff" stroke-width="18" stroke-linecap="round"/></svg>`},
{id:154,q:"Què preval entre un senyal R-9 de 50 i un senyal R-215 de 40?",a:["El R-215 velocitat mínima","El R-9 velocitat màxima","Tots dos"],ok:0,codigo:"trampa-9",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><text x="100" y="115" fill="#fff" font-size="60" font-weight="900" text-anchor="middle">50</text></svg>`},
{id:155,q:"Entre el senyal S-13 i el S-13a, quin indica aparcament gratuït?",a:["S-13a","S-13","Tots dos"],ok:0,codigo:"trampa-10",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="80" font-weight="900" text-anchor="middle">P</text></svg>`},
{id:156,q:"Quina diferència hi ha entre el senyal R-415 i el R-9?",a:["R-415 és zona, R-9 és puntual","Són iguals","R-9 és zona"],ok:0,codigo:"trampa-11",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><text x="100" y="115" fill="#fff" font-size="40" font-weight="900" text-anchor="middle">ZONE</text></svg>`},
{id:157,q:"Entre el senyal R-206 i el R-207, quin permet continuar recte?",a:["R-207","R-206","Cap"],ok:0,codigo:"trampa-12",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 65 L100 110 M100 110 L150 110" stroke="#fff" stroke-width="16" fill="none"/></svg>`},
{id:158,q:"Què indica abans: el senyal P-6 o el senyal R-1?",a:["El R-1 Stop","El P-6","Tots dos alhora"],ok:0,codigo:"trampa-13",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="100" cy="80" r="10" fill="#000"/><rect x="95" y="95" width="10" height="20" fill="#000"/><path d="M100 115 L85 145 M100 115 L115 145" stroke="#000" stroke-width="8"/></svg>`},
{id:159,q:"Entre el senyal R-417 i el R-419, quin és zona residencial?",a:["R-417","R-419","Tots dos"],ok:0,codigo:"trampa-14",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><path d="M60 80 L60 120 L80 120 L80 100 L120 100 L120 120 L140 120 L140 80 L120 80 L120 60 L80 60 L80 80 Z" fill="#fff"/></svg>`},
{id:160,q:"Quina diferència hi ha entre el senyal R-3 i el R-20?",a:["R-3 prohibeix a tothom, R-20 només vehicles de motor","Són iguals","R-20 prohibeix a tothom"],ok:0,codigo:"trampa-15",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/></svg>`},
{id:161,q:"Entre el senyal S-3 i el S-4, quin indica fi d'autopista?",a:["S-3","S-4","Tots dos"],ok:0,codigo:"trampa-16",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="70" font-weight="900" text-anchor="middle">AP</text><line x1="30" y1="30" x2="170" y2="170" stroke="#fff" stroke-width="8"/></svg>`},
{id:162,q:"Què obliga abans: el senyal R-211 o el senyal R-2?",a:["R-2 Cedeixi el pas","R-211 Rotonda","Tots dos"],ok:0,codigo:"trampa-17",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 60 A40 40 0 1 1 99 60" stroke="#fff" stroke-width="16" fill="none"/></svg>`},
{id:163,q:"Entre el senyal R-304 i el R-312, quin finalitza una limitació?",a:["Tots dos","Només R-304","Només R-312"],ok:0,codigo:"trampa-18",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><text x="100" y="115" fill="#000" font-size="60" font-weight="900" text-anchor="middle">80</text><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:164,q:"Quina diferència hi ha entre el senyal P-17 i el P-18?",a:["P-17 amb barreres, P-18 sense barreres","Són iguals","P-18 amb barreres"],ok:0,codigo:"trampa-19",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><rect x="60" y="80" width="80" height="40" fill="#000"/><rect x="50" y="130" width="100" height="10" fill="#000"/></svg>`},
{id:165,q:"Entre el senyal R-15 i el R-310, quin inicia i quin finalitza?",a:["R-15 inicia, R-310 finalitza","R-310 inicia, R-15 finalitza","Tots dos inicien"],ok:0,codigo:"trampa-20",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><rect x="55" y="70" width="90" height="60" fill="#fff"/></svg>`},
{id:166,q:"Què indica el senyal S-5 respecte al S-6?",a:["S-5 inici, S-6 fi de via amb prioritat","Són iguals","S-6 inici"],ok:0,codigo:"trampa-21",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#FFD400"/><rect x="50" y="50" width="100" height="100" fill="#000"/></svg>`},
{id:167,q:"Entre el senyal R-7 i el R-302, quin prohibeix i quin aixeca?",a:["R-7 prohibeix, R-302 aixeca","R-302 prohibeix, R-7 aixeca","Tots dos prohibeixen"],ok:0,codigo:"trampa-22",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><rect x="60" y="75" width="28" height="50" fill="#fff"/><rect x="112" y="75" width="28" height="50" fill="#A9A9A9"/></svg>`},
{id:168,q:"Quina diferència hi ha entre el senyal R-209 i el R-210?",a:["R-209 gir dreta, R-210 gir esquerra","Són iguals","R-210 gir dreta"],ok:0,codigo:"trampa-23",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 75 Q150 100 100 125" stroke="#fff" stroke-width="18" fill="none"/></svg>`},
{id:169,q:"Entre el senyal R-11 i el R-12, quin limita pes i quin amplada?",a:["R-11 pes, R-12 amplada","R-12 pes, R-11 amplada","Tots dos pes"],ok:0,codigo:"trampa-24",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><text x="100" y="115" fill="#fff" font-size="55" font-weight="900" text-anchor="middle">5t</text></svg>`},
{id:170,q:"Què preval entre un senyal R-205 i un senyal R-4?",a:["El R-4 prohibició","El R-205 obligació","Tots dos"],ok:0,codigo:"trampa-25",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><path d="M100 55 L100 145" stroke="#fff" stroke-width="18" stroke-linecap="round"/></svg>`},
{id:171,q:"Entre el senyal S-7 i el R-415, quin és zona i quin és puntual?",a:["S-7 zona, R-415 zona","S-7 puntual, R-415 zona","R-415 puntual"],ok:0,codigo:"trampa-26",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="115" fill="#fff" font-size="50" font-weight="900" text-anchor="middle">30</text></svg>`},
{id:172,q:"Quina diferència hi ha entre el senyal P-12 i el P-13?",a:["P-12 neu/gel, P-13 projecció grava","Són iguals","P-13 neu/gel"],ok:0,codigo:"trampa-27",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><path d="M100 60 L100 140 M80 80 L120 80 M80 120 L120 120" stroke="#000" stroke-width="8"/></svg>`},
{id:173,q:"Entre el senyal R-203 i el R-204, per quin costat s'ha de passar?",a:["R-203 dreta, R-204 esquerra","R-204 dreta, R-203 esquerra","Tots dos per la dreta"],ok:0,codigo:"trampa-28",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><rect x="80" y="55" width="40" height="90" fill="#fff"/><path d="M100 55 L150 100 L100 145" stroke="#fff" stroke-width="16" fill="none"/></svg>`},
{id:174,q:"Què indica el senyal R-301 respecte al R-304?",a:["R-301 aixeca tot, R-304 només velocitat","Són iguals","R-304 aixeca tot"],ok:0,codigo:"trampa-29",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:175,q:"Entre el senyal R-18 i el R-212, quin prohibeix i quin obliga?",a:["R-18 prohibeix bici, R-212 obliga carril bici","R-212 prohibeix, R-18 obliga","Tots dos prohibeixen"],ok:0,codigo:"trampa-30",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#D32F2F"/><circle cx="75" cy="135" r="14" stroke="#fff" stroke-width="6" fill="none"/><circle cx="125" cy="135" r="14" stroke="#fff" stroke-width="6" fill="none"/><path d="M75 135 L95 115 L115 135 L95 115 L95 100" stroke="#fff" stroke-width="6" fill="none"/></svg>`},
{id:176,q:"Quina diferència hi ha entre el senyal S-1 i el S-37?",a:["S-1 autopista lliure, S-37 autopista de peatge","Són iguals","S-37 és lliure"],ok:0,codigo:"trampa-31",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="160" height="160" rx="20" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="70" font-weight="900" text-anchor="middle">AP</text></svg>`},
{id:177,q:"Entre el senyal R-1 i el R-2, quin obliga a aturar-se del tot?",a:["R-1 Stop","R-2 Cedeixi","Tots dos"],ok:0,codigo:"trampa-32",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#fff" stroke="#D32F2F" stroke-width="10"/><text x="100" y="140" fill="#D32F2F" font-size="32" font-weight="900" font-family="Arial Black" text-anchor="middle">STOP</text></svg>`},
{id:178,q:"Què finalitza abans: el senyal R-416 o el R-418?",a:["R-416 zona velocitat, R-418 zona residencial","Són iguals","R-418 zona velocitat"],ok:0,codigo:"trampa-33",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#fff" stroke="#000" stroke-width="10"/><text x="100" y="115" fill="#000" font-size="40" font-weight="900" text-anchor="middle">ZONE</text><line x1="35" y1="35" x2="165" y2="165" stroke="#000" stroke-width="8"/></svg>`},
{id:179,q:"Entre el senyal P-25 i el P-26, quin és de vianants i quin de bicis?",a:["P-25 vianants, P-26 bicis","P-26 vianants, P-25 bicis","Tots dos vianants"],ok:0,codigo:"trampa-34",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 185,185 15,185" fill="#FFD400" stroke="#000" stroke-width="8"/><circle cx="100" cy="80" r="10" fill="#000"/><rect x="95" y="95" width="10" height="20" fill="#000"/><path d="M100 115 L85 145 M100 115 L115 145" stroke="#000" stroke-width="8"/></svg>`},
{id:180,q:"Quina diferència hi ha entre el senyal R-219 i el R-220?",a:["R-219 bus, R-220 taxi","Són iguals","R-220 bus"],ok:0,codigo:"trampa-35",tipus:"trampa",img:`<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="90" fill="#005EB8"/><text x="100" y="120" fill="#fff" font-size="50" font-weight="900" text-anchor="middle">TAXI</text></svg>`}
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


// ===== GASDRIVE DGT CAT V9.5.6 - SISTEMA PROGRESO REAL + 180 SEÑALES =====
let tipsData = [];
let currentTip = 0;
let tempsIniciTemari = null;
let contadorTemari = null;
let sitCategoriaActiva = 'clima';


// ===== V9.5.6 BANCO DE SVGS VACIO - YA VIENEN EN CADA PREGUNTA =====
const SENALES_SVG = {}; // VACIO A PROPOSITO

// ===== V9.5.6 FUNCIÓN QUE PINTA EL CUADRO TEST + EXAMEN =====
function pintarImatgeSiExisteix(cat, pregunta) {
  const imgDiv = document.getElementById(`test-${cat}-imagen`) || document.getElementById(`examen-imagen`);
  if (!imgDiv) return;

  if (pregunta.img && pregunta.img.trim()!== '') {
    imgDiv.innerHTML = pregunta.img; // Pinta el SVG que ya viene en la pregunta
    imgDiv.style.border = '2px solid #00D9FF';
    imgDiv.style.boxShadow = '0 0 25px rgba(0, 217, 255, 0.3)';
  } else {
    imgDiv.innerHTML = `<div class="placeholder">Sense pictograma</div>`; // Placeholder
    imgDiv.style.border = '2px dashed rgba(0, 217, 255, 0.3)';
    imgDiv.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.1)';
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
  console.log("GasDrive V9.5.6 CAT carregat");
  autoMapearTotesPreguntes(); // V9.5.6 YA NO CARGA PRUEBAS
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
  if(!preguntaId || isNaN(preguntaId)) return;
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

  // 1. RETENCIÓ 30% - CON CAP DIARIO DE 3%
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

  // 2. CONSTÀNCIA 40% - AHORA PESA MÁS Y PIDE 20 DÍAS
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

  // 3. COBERTURA ACTIVA 20% - CON CAP DIARIO DE 5%
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

  // 4. ESTABILITAT SIMULACRES 10%
  let maxRatxa = 0, ratxa = 0;
  PROGRESO.examen.historial.forEach(e => {
    if(e.nota >= 27) { ratxa++; maxRatxa = Math.max(maxRatxa, ratxa); }
    else ratxa = 0;
  });
  const estabilitat = maxRatxa >= 6? 100 : Math.round((maxRatxa / 6) * 100);

  const preparacio = Math.round((retencio * 0.3) + (constancia * 0.4) + (cobertura * 0.2) + (estabilitat * 0.1));
  return { preparacio, retencio, constancia, cobertura, estabilitat, domina, aprenent, diesValids, maxRatxa, total: totalPreg };
}

// ===== PASE 20 MIN =====
function iniciarComptadorTemari() {
  if(contadorTemari) clearInterval(contadorTemari);
  actualitzarPaseUI();
  contadorTemari = setInterval(() => {
    const tabTemari = document.getElementById('tab-temari');
    if(tabTemari && tabTemari.classList.contains('active')) {
      if(tempsIniciTemari === null) tempsIniciTemari = Date.now();
      const ara = Date.now(); const minutsPassats = (ara - tempsIniciTemari) / 1000 / 60;
      estat.stats.tempsEstudiatAvui += minutsPassats; tempsIniciTemari = ara; guardar(); actualitzarPaseUI();
      if(estat.stats.tempsEstudiatAvui >= 20 &&!estat.stats.paseCompletado) {
        estat.stats.paseCompletado = true;
        estat.coins += 50; guardar();
        alert(`✅ PASE DESBLOQUEJAT!\n\nHas estudiat 20 minuts. +50 coins\nAra ja pots fer tests tot el dia`);
        actualitzarEstadistiques_V94();
      }
    } else {
      if(tempsIniciTemari!== null) {
        const ara = Date.now(); const minutsPassats = (ara - tempsIniciTemari) / 1000 / 60;
        estat.stats.tempsEstudiatAvui += minutsPassats; tempsIniciTemari = null; guardar(); actualitzarPaseUI();
      }
    }
  }, 2000);
}

function comprovarNouDia() {
  const avui = new Date().toISOString().split('T')[0];
  if(estat.stats.diaActual!== avui) {
    const stats = calcularPreparacioDGT_V94();
    estat.stats.historialEvolucio.push({
      dia: estat.stats.diaActual,
      percent: stats.preparacio,
      retencio: stats.retencio,
      cobertura: stats.cobertura
    });
    if(estat.stats.historialEvolucio.length > 30) estat.stats.historialEvolucio.shift();
    estat.stats.tempsEstudiatAvui = 0; estat.stats.diaActual = avui; estat.stats.paseCompletado = false; tempsIniciTemari = null;
    for(let c in PROGRESO.tests) PROGRESO.tests[c].dies = {};
    for(let c in PROGRESO.casos) PROGRESO.casos[c].dies = {};
    guardar(); actualitzarPaseUI();
  }
}

function actualitzarPaseUI() {
  const minuts = Math.floor(estat.stats.tempsEstudiatAvui);
  const el = document.getElementById('pase-temps'); if(el) el.textContent = `${minuts} min`;
  const msg = document.getElementById('stats-motivacio');
  if(msg) { if(estat.stats.paseCompletado) msg.textContent = "Pase Activo. A practicar 💪"; else { const falten = Math.max(0, 20 - minuts); msg.textContent = `Estudia ${falten} minuts més al Temari per desbloquejar`; } }
}

// ===== AUTO-MAPEO CON ID =====
function autoMapearTotesPreguntes() {
  let idCounter = 1;
  for(let cat in PREGUNTES) {
    PREGUNTES[cat] = PREGUNTES[cat].map(p => {
      let subtema = 'General'; let pag = 1;
      for(let key in MAPEO_PALABRAS_CLAVE) { if(p.q.toLowerCase().includes(key)) { subtema = MAPEO_PALABRAS_CLAVE[key].subtema; pag = MAPEO_PALABRAS_CLAVE[key].pag; break; } }
      return {...p, id: idCounter++, subtema, pag};
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
  const opcionsBarrejades = barrejarArray(pOriginal.a);
  const textCorrecte = pOriginal.a[pOriginal.ok];
  const nouIndexCorrecte = opcionsBarrejades.indexOf(textCorrecte);
  const p = {...pOriginal, a: opcionsBarrejades, ok: nouIndexCorrecte};
  s.current = p;

  // V9.5.6 NUEVO: PINTAR IMAGEN
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
  const s = estat.test[cat]; const p = s.current; const cont = document.getElementById(`test-${cat}-opciones`);
  if(cont.querySelector('.correcta') || cont.querySelector('.incorrecta')) return;
  cont.querySelectorAll('.opcio').forEach(o => o.classList.add('bloquejada'));
  const correcte = idx === p.ok;
  const preguntaId = p.id;
  if(correcte) { el.classList.add('correcta'); s.encerts++; s.ratxa++; s.puntuacio += 10 + (s.ratxa * 2); estat.coins += 5; document.getElementById(`test-${cat}-feedback`).className = 'feedback acierto'; document.getElementById(`test-${cat}-feedback`).textContent = `✅ CORRECTE! +${10+(s.ratxa*2)} pts`; mostrarEmoji(true, el); }
  else { el.classList.add('incorrecta'); cont.querySelectorAll('.opcio')[p.ok].classList.add('correcta'); document.getElementById(`test-${cat}-feedback`).className = 'feedback fallo'; document.getElementById(`test-${cat}-feedback`).textContent = '❌ FALLO'; mostrarEmoji(false, el); s.ratxa = 0; registrarFallada(cat, p.subtema, p.pag); }
  actualizarMetricasTest(cat, preguntaId, correcte);
  registrarHistorialPregunta(preguntaId, correcte);
  const btnSig = document.getElementById(`btn-sig-test-${cat}`); btnSig.disabled = false; btnSig.style.opacity = '1'; btnSig.style.cursor = 'pointer';
  actualitzarCoins(); guardar();
}

function seguentTest(e, cat) {
  e.preventDefault();
  estat.test[cat].idx++;
  carregarPregunta(cat);
}

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
  const opcionsBarrejades = barrejarArray(pOriginal.a);
  const textCorrecte = pOriginal.a[pOriginal.ok];
  const nouIndexCorrecte = opcionsBarrejades.indexOf(textCorrecte);
  const p = {...pOriginal, a: opcionsBarrejades, ok: nouIndexCorrecte};
  estat.examen.preguntes[estat.examen.index] = p;

  // V9.5.6 NUEVO: PINTAR IMAGEN EXAMEN
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

// ===== CANVIAR TABS V9.4 =====
function canviarTab_V94(e, tab) {
  if(document.getElementById('tab-temari').classList.contains('active')) {
    if(tempsIniciTemari!== null) {
      const minutsPassats = (Date.now() - tempsIniciTemari) / 1000 / 60;
      estat.stats.tempsEstudiatAvui += minutsPassats;
      tempsIniciTemari = Date.now();
      guardar();
    }
  }
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  if(e) e.target.closest('.tab-btn').classList.add('active');
  if(tab === 'garage') carregarGaratge();
  if(tab === 'tienda') carregarBotiga();
  if(tab === 'tips') carregarTips();
  if(tab === 'temari') carregarTemari();
  if(tab === 'test') carregarPregunta('general');
  if(tab === 'situaciones') carregarSituacio(sitCategoriaActiva);
  if(tab === 'estadistiques') actualitzarEstadistiques_V94();
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