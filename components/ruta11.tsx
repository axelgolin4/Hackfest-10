import { Map, GeoJson } from 'pigeon-maps';

const geoJsonSample = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [-91.49052758881469, 14.876312744553644],
          [-91.49032791679434, 14.875979062981244],
          [-91.49002557178837, 14.87543322081082],
          [-91.48937507596445, 14.87428588976509],
          [-91.48925975145406, 14.873952995195111],
          [-91.4892367257094, 14.873806405924086],
          [-91.48922007192779, 14.873663843326824],
          [-91.48927954971806, 14.872921136656743],
          [-91.48925959977886, 14.87246846399448],
          [-91.4891638364632, 14.871662460963705],
          [-91.48901763495385, 14.871183295608404],
          [-91.48894453457036, 14.870945169698999],
          [-91.48853153653747, 14.869371611049559],
          [-91.48855653854386, 14.868864152095966],
          [-91.48851232848314, 14.86826853117104],
          [-91.48869789918892, 14.867981099105805],
          [-91.48877565340707, 14.867889014044394],
          [-91.48889460899079, 14.867624576090762],
          [-91.48895131525536, 14.867503368309414],
          [-91.48896892426701, 14.867465075731772],
          [-91.48919364140113, 14.865963029800639],
          [-91.48925591236349, 14.865609760369537],
          [-91.48929381645853, 14.865010508182209],
          [-91.48932630568275, 14.86459704937188],
          [-91.48933984292992, 14.864450507481592],
          [-91.4892775719169, 14.863597418498244],
          [-91.48926907612586, 14.862375245883413],
          [-91.4892721572963, 14.862243248887822],
          [-91.48932453546321, 14.861832285536323],
          [-91.48940464324815, 14.8614332334177],
          [-91.48942621058606, 14.861320070849501],
          [-91.489715831039, 14.86060534841856],
          [-91.48999312703661, 14.859834042323314],
          [-91.4904953412263, 14.858514772912173],
          [-91.49063707051708, 14.85810677838225],
          [-91.49066171906637, 14.85805615153508],
          [-91.49076647540019, 14.857546904348808],
          [-91.49092977203469, 14.856653486731247],
          [-91.4909487635679, 14.85655921361888],
          [-91.49113670875538, 14.856172064061624],
          [-91.4913493020783, 14.855707485225338],
          [-91.4913739506276, 14.855662813981638],
          [-91.49166973321759, 14.854814058599217],
          [-91.49176832642591, 14.854650265595566],
          [-91.4918854070346, 14.854522207378963],
          [-91.49300999709064, 14.853700250509618],
          [-91.4936354548507, 14.85325353261473],
          [-91.49433793463076, 14.852812774619295],
          [-91.49514825568492, 14.852324361977708],
          [-91.49610456319067, 14.85185235610615],
          [-91.49657247604358, 14.851654013633052],
          [-91.49694867418106, 14.851482716612509],
          [-91.4976419935578, 14.851221264685492],
          [-91.49825260199879, 14.850994158813478],
          [-91.49839466747125, 14.850949265775398],
          [-91.49868426247227, 14.850856838902146],
          [-91.499056536864, 14.850748637199615],
          [-91.49967124323481, 14.850471356203698],
          [-91.50025999386216, 14.850207279370395],
          [-91.50088426233195, 14.849922075340402],
          [-91.50116027698546, 14.849760512431644],
          [-91.50121628356601, 14.849698454051463],
          [-91.50125863000471, 14.849616589777128],
          [-91.50129961042957, 14.849521521549065],
          [-91.50153536015753, 14.84892806256505],
          [-91.50175854041146, 14.848394432980342],
          [-91.50191016721192, 14.848035284955827],
          [-91.50204813464151, 14.847689339504512],
          [-91.50211370315078, 14.847528250449358],
          [-91.50211643517915, 14.847483356690574],
          [-91.50211643517915, 14.847393569145737],
          [-91.50209594496673, 14.847307742780941],
          [-91.50197710150431, 14.846930107246394],
          [-91.5018500621882, 14.846606607000027],
          [-91.501501728482, 14.846000536782185],
          [-91.50146621211387, 14.845901505719794],
          [-91.50143479471511, 14.84577474523229],
          [-91.50144845486076, 14.845640062833624],
          [-91.50148370629816, 14.845491880121088],
          [-91.5015123925957, 14.845384926319895],
          [-91.50164022231911, 14.845067523051881],
          [-91.50173815756749, 14.844905237766028],
          [-91.5018811741204, 14.844682846620287],
          [-91.50196661261043, 14.844570762947583],
          [-91.50238322604767, 14.84417406445391],
          [-91.50305011693453, 14.843573005697309],
          [-91.50344962544959, 14.84317180135308],
          [-91.50364238689076, 14.842988477468793],
          [-91.50370923158387, 14.842911842028045],
          [-91.50378851203403, 14.842811164610197],
          [-91.50396572819777, 14.842458040006932],
          [-91.50402169119678, 14.842294250101617],
          [-91.50415227121651, 14.841956151879998],
          [-91.5043154966302, 14.841726244379927],
          [-91.50462842950903, 14.8413005335577],
          [-91.50482274547798, 14.84105559867217],
          [-91.50507584200491, 14.840728145806338],
          [-91.5052779306124, 14.840480204926664],
          [-91.50545274428555, 14.840259256951612],
          [-91.5056579419486, 14.840014320886596],
          [-91.50594552872161, 14.839673214214756],
          [-91.50599993719284, 14.8395545025828],
          [-91.50612445386034, 14.83928387097636],
          [-91.506628117067, 14.83897732561752],
          [-91.5068939413124, 14.838787987438494],
          [-91.50727946419438, 14.838622692067844],
          [-91.5074582348859, 14.83865274578092],
          [-91.50762301482737, 14.838751923004736],
          [-91.50812978983139, 14.839166664627939],
          [-91.50886197418814, 14.839739186894619],
          [-91.50964091378255, 14.840385431180692],
          [-91.51048657684802, 14.84105299865945],
          [-91.51145177321317, 14.84181326763482],
          [-91.51226012853712, 14.842451899453422],
          [-91.51328642356384, 14.843129630573614],
          [-91.51365948443429, 14.843317114164009],
          [-91.5139828262065, 14.84342831046797],
          [-91.51444976342502, 14.84353037060528],
          [-91.5147670623236, 14.843552489137565],
          [-91.51529796284684, 14.843623279589167],
          [-91.51588221608412, 14.843698482535771],
          [-91.51637647013749, 14.84376336350644],
          [-91.51707833926214, 14.843854835491825],
          [-91.51738495983258, 14.843894648788009],
          [-91.51742462219494, 14.843646921490816],
          [-91.5174576525016, 14.843349832112679],
          [-91.51750711291555, 14.843060799268102],
          [-91.51752509852048, 14.842980391565916],
          [-91.51806916426236, 14.843047761214848],
          [-91.51844156468226, 14.843089997155431],
          [-91.51896388649496, 14.843165130097475],
          [-91.51928411921158, 14.843208707064619],
          [-91.51976743252293, 14.843272052604618],
          [-91.52032723558281, 14.843345940887602],
          [-91.52059027505744, 14.843372019020975],
          [-91.52097696556751, 14.843430694808006],
          [-91.5214221097953, 14.84349589034396],
          [-91.52165367446088, 14.843528487985964],
          [-91.52189648012987, 14.843567605151861],
          [-91.52211905199327, 14.843580644204465],
          [-91.52231914221288, 14.84360454970627],
          [-91.52252372847136, 14.843615415582036],
          [-91.522737307532, 14.843637147331918],
          [-91.52321167786714, 14.843693649873074],
          [-91.52349945004264, 14.843737114607094],
          [-91.52394909017077, 14.843824041547762],
          [-91.52430205767114, 14.843891409901985],
          [-91.52481464817893, 14.843952259200421],
          [-91.52512040346605, 14.843989203117687],
          [-91.52555880331991, 14.844047879075092],
          [-91.52579486438684, 14.844080476634971],
          [-91.52607813766762, 14.844117420530253],
          [-91.52645164222645, 14.844156830466758],
          [-91.52673266730653, 14.844187254840179],
          [-91.5272779583312, 14.844263314053691],
          [-91.52774783226498, 14.844339374942862],
          [-91.52803560194714, 14.844385011464027],
          [-91.52795241852343, 14.844939168446743],
          [-91.52792159811749, 14.845273302900154],
          [-91.5281873254814, 14.845302722921517],
          [-91.52870533549653, 14.845368552383391],
          [-91.52923607177492, 14.845436764231806],
          [-91.52981147134253, 14.845523235655264],
          [-91.53006691598993, 14.845566809404303],
          [-91.53024176580216, 14.8455654889881],
          [-91.53075200085311, 14.845624040490875],
          [-91.5312319507341, 14.845700698926507],
          [-91.5316759053349, 14.84576275845464],
          [-91.5322223060871, 14.845838021722358],
          [-91.53264986739985, 14.845906683185277],
          [-91.53291077610334, 14.84598722845061],
          [-91.53317578284968, 14.846117949390745],
          [-91.53341606742569, 14.846183911232004],
          [-91.53357998912443, 14.846205037834551],
          [-91.5336564859174, 14.846205037834551],
          [-91.53372068858239, 14.846205037834551],
          [-91.53384636188532, 14.846166745865716],
          [-91.53396520570435, 14.846154861663493],
          [-91.53410590516229, 14.846168065791815],
          [-91.5342220161656, 14.846132414748737],
          [-91.53463050611269, 14.84617070686275],
          [-91.53482448012349, 14.84620503759335],
          [-91.53517691179096, 14.846257854069322],
          [-91.53537225181562, 14.84628690313761],
          [-91.5357977119399, 14.84634967960507],
          [-91.53601081014794, 14.846378728661008],
          [-91.53620205223349, 14.846390612286712],
          [-91.53627581699809, 14.846374767348749],
          [-91.53642061449825, 14.846387971463685],
          [-91.53653262765935, 14.846405136812436],
          [-91.53659819633886, 14.846424942982381],
          [-91.53658726822538, 14.846542459553149],
          [-91.53659136595681, 14.846694306712877],
          [-91.53661322218377, 14.846815784363613],
          [-91.53661868623983, 14.846868600712014],
          [-91.5366446406149, 14.846914814583414],
          [-91.53665830075674, 14.846941222747134],
          [-91.53666376481347, 14.846955747235825],
          [-91.5370776671029, 14.846957067644212],
          [-91.53737087229312, 14.846943528683823],
          [-91.53758943455857, 14.846931645010713],
          [-91.53774789220057, 14.84692108174491],
          [-91.53797328465205, 14.846910518402524],
          [-91.53851149080756, 14.846897314417461],
          [-91.53885436026088, 14.846884110390164],
          [-91.53905653035612, 14.846878828756147],
          [-91.53923684422509, 14.8468709063049],
          [-91.53946353797697, 14.846857513422194],
          [-91.53967663618569, 14.846852231787537],
          [-91.53982826375712, 14.846845629744351],
          [-91.54001130955993, 14.846825823614878],
          [-91.54015200901856, 14.846809978708862],
          [-91.54027904833465, 14.846803376664369],
          [-91.54038286541065, 14.846784890937869],
          [-91.54047029031659, 14.846773007254285],
          [-91.54066630925365, 14.846737905650727],
          [-91.54077012633144, 14.84672470155678],
          [-91.5408766754358, 14.846710177052557],
          [-91.54095453850269, 14.846712817763475],
          [-91.54111782395822, 14.846677207235615],
          [-91.54133908747497, 14.846646653430057],
          [-91.54155837542454, 14.846661930333866],
          [-91.54170851852525, 14.846692484137265],
          [-91.54177173667266, 14.846707761037834],
          [-91.54185075935733, 14.846753591732053],
          [-91.54195151328017, 14.846808970474328],
          [-91.54201670699474, 14.846881535701343],
          [-91.54216882409406, 14.847005659755965],
          [-91.54227748028553, 14.847097321009358],
          [-91.54242959895338, 14.847196620654813],
          [-91.54267854994029, 14.847368458130731],
          [-91.54279115726607, 14.847435294352238],
          [-91.54286425324926, 14.847471576864109],
          [-91.5429393247996, 14.847492582525916],
          [-91.54303612758815, 14.847511678579792],
          [-91.54327319564163, 14.847528865027215],
          [-91.5434668012187, 14.847519317001272],
          [-91.54366352989945, 14.84747219713124],
          [-91.54386108661082, 14.847445462649134],
          [-91.54410408136576, 14.847414908952189],
          [-91.54424829776501, 14.84740345131435],
          [-91.54474539874803, 14.847357858397658],
          [-91.54493702875794, 14.84734831036414],
          [-91.54510890309685, 14.847338762329272],
          [-91.54525114392892, 14.84732921429486],
          [-91.54596581578593, 14.847314355879092],
          [-91.5462288426096, 14.847319492140045],
          [-91.54655031983839, 14.847329764661552],
          [-91.54677349411287, 14.847334900922121],
          [-91.54694618849221, 14.847340037182562],
          [-91.54717733327666, 14.847327196530571],
          [-91.54735534132932, 14.847324628400855],
          [-91.54771666157323, 14.84727582437722],
          [-91.54809393240213, 14.847242438666385],
          [-91.54870455911772, 14.847187168636296],
          [-91.54890647869964, 14.847169191712169],
          [-91.54909511409826, 14.847140942256488],
          [-91.54919076021591, 14.847125533460598],
          [-91.54942190500036, 14.847094715866831],
          [-91.54959991305235, 14.847053625733182],
          [-91.54969024549669, 14.84700739932481],
          [-91.54983637133364, 14.846950901208459],
          [-91.5499107627587, 14.846932924264607],
          [-91.54995592898054, 14.846940628670211],
          [-91.54999312469305, 14.84690981104879],
          [-91.55004235722463, 14.84691479025156],
          [-91.55023896313324, 14.846968721083044],
          [-91.55089074205168, 14.847204989422778],
          [-91.55115908254866, 14.847330827841006],
          [-91.5513052085621, 14.847405303604972],
          [-91.55167982252267, 14.84760304947639],
          [-91.55204400367089, 14.84779234987083],
          [-91.55224592325213, 14.847877097972543],
          [-91.55266570353513, 14.84806200267488],
          [-91.55316104138177, 14.848284635277224],
          [-91.55362997721798, 14.848488828580031],
          [-91.55416210150602, 14.848704216045164],
          [-91.55432462094423, 14.848757428809591],
          [-91.55461104727459, 14.848828001288538],
          [-91.55505580044215, 14.8490216857886],
          [-91.5555729841284, 14.84924024809304],
          [-91.55579424150848, 14.849320736094327],
          [-91.55597981221366, 14.849373628193689],
          [-91.55610590512917, 14.849412722345633],
          [-91.5561630038078, 14.849431119590307],
          [-91.55632240428537, 14.849477112696732],
          [-91.55721932517406, 14.849713977109687],
          [-91.5575143350132, 14.849794464934575],
          [-91.55774986706261, 14.849851956220249],
          [-91.55800681111639, 14.849904848188487],
          [-91.55883656274939, 14.850105777680227],
          [-91.55910896002084, 14.850198772661344],
          [-91.55928398975674, 14.850263757083482],
          [-91.55959798065616, 14.850381040900842],
          [-91.55976837384264, 14.85045162736705],
          [-91.56006419065847, 14.850569206890611],
          [-91.5602125602362, 14.850628589106009],
          [-91.56054407390691, 14.850777604892755],
          [-91.56067505642471, 14.850833625796213],
          [-91.56105409337114, 14.85102185552121],
          [-91.56118507588894, 14.851081237612206],
          [-91.56130098962151, 14.851140619685765],
          [-91.56150213610248, 14.851224650345614],
          [-91.56161740932917, 14.851276285147733],
          [-91.56180297110974, 14.851355096138349],
          [-91.56196041746848, 14.851412166147725],
          [-91.56215441387559, 14.851474671378938],
          [-91.56255838818127, 14.851629933151372],
          [-91.56285386688717, 14.85179951259299],
          [-91.56310581524811, 14.851948691389836],
          [-91.56329972314848, 14.852043043738362],
          [-91.56361172933885, 14.852230784647062],
          [-91.56399520677755, 14.852460629745451],
          [-91.56400971689251, 14.852431304076333],
          [-91.56370632357827, 14.852257900040286],
          [-91.56346756623124, 14.852125296859597],
          [-91.56324762730104, 14.85199641124656],
          [-91.56306427221118, 14.851894408682966],
          [-91.5627885803695, 14.85173885391265],
          [-91.56259467246913, 14.85163175109193],
          [-91.56247991065034, 14.851582024765236],
          [-91.56212594687125, 14.85145047966239],
          [-91.56194103877672, 14.851385948984316],
          [-91.56176164099135, 14.851319647136592],
          [-91.56158206243333, 14.851245103965312],
          [-91.56139343093854, 14.851162226599058],
          [-91.56113928345854, 14.85103684609318],
          [-91.5609625238753, 14.850947593457093],
          [-91.56060973630079, 14.85077471595821],
          [-91.56043033851476, 14.85070331376545],
          [-91.5602905137705, 14.850638286748364],
          [-91.55999038490725, 14.850510512958735],
          [-91.5597265646341, 14.850405959612075],
          [-91.55937193859111, 14.850271555799239],
          [-91.5588759562123, 14.850096873869816],
          [-91.55875723729658, 14.850061173064859],
          [-91.5584512057525, 14.8499897706579],
          [-91.55809870592391, 14.849910400648284],
          [-91.55773938379092, 14.849833132345708],
          [-91.5575481140927, 14.849778305425772],
          [-91.5573535850853, 14.84972667761268],
          [-91.55713052383105, 14.849669816091179],
          [-91.55700389010003, 14.849636664906555],
          [-91.55680470579347, 14.849583112983126],
          [-91.5566648810492, 14.849548686738657],
          [-91.55645244894279, 14.849492565053723],
          [-91.55630207138671, 14.849454313654931],
          [-91.55615960843967, 14.849416062249418],
          [-91.55582090273644, 14.849303856604763],
          [-91.55572988474202, 14.849278355651592],
          [-91.55565733416711, 14.849256679837623],
          [-91.55560457011208, 14.849236279069842],
          [-91.5555544442605, 14.849218428397094],
          [-91.55525058481294, 14.849083574468949],
          [-91.55516088592026, 14.849044047949604],
          [-91.55502897578369, 14.848991770927853],
          [-91.55477783034222, 14.84888314138692],
          [-91.55467757863201, 14.84883851463249],
          [-91.55455490220484, 14.848792612814734],
          [-91.55443750218328, 14.848767111799958],
          [-91.55431174252917, 14.84873123744039],
          [-91.55421017172428, 14.848704461368172],
          [-91.5541719177849, 14.84869171085657],
          [-91.55412838743995, 14.84867386013886],
          [-91.55397669078282, 14.84860628240692],
          [-91.55378674018631, 14.84853487949762],
          [-91.55356092145426, 14.848438351743297],
          [-91.55339207648001, 14.848368223832026],
          [-91.55327071912632, 14.84831977180906],
          [-91.55296196421202, 14.848175260854262],
          [-91.55277201361486, 14.848088557145317],
          [-91.55220793134276, 14.847839810369976],
          [-91.55203380996231, 14.847763306980553],
          [-91.5517113413144, 14.847594999828786],
          [-91.55163615253669, 14.847551647862247],
          [-91.551560963759, 14.847519771411257],
          [-91.55148973228515, 14.84747641942964],
          [-91.5511388513221, 14.847299186239468],
          [-91.55098175259623, 14.847227536848834],
          [-91.55083928964852, 14.847166333966342],
          [-91.55074431435025, 14.847130632277441],
          [-91.55065593455865, 14.847094930581349],
          [-91.55059657499764, 14.84707452961078],
          [-91.55054908734819, 14.847060503940568],
          [-91.55050555700325, 14.847046478270741],
          [-91.55042641092103, 14.847012051623523],
          [-91.55027142372258, 14.846957498006063],
          [-91.5501579810055, 14.846921796282643],
          [-91.55004717649052, 14.846897570109292],
          [-91.54999705063895, 14.846889919738743],
          [-91.5499495629895, 14.846845292568318],
          [-91.54990339444176, 14.846860593313622],
          [-91.54987569331351, 14.846889919738743],
          [-91.54986909780622, 14.846920521220625],
          [-91.54967255170308, 14.846997024908347],
          [-91.54958944831704, 14.847025076253544],
          [-91.54941928534016, 14.847076077806705],
          [-91.54928209879802, 14.847087553353859],
          [-91.54897199228188, 14.847137317793553],
          [-91.54885591136201, 14.847150068396829],
          [-91.54875829786099, 14.847158993820088],
          [-91.54866332256273, 14.84717301948264],
          [-91.54846358914173, 14.847188103412478],
          [-91.54829078686298, 14.847203404132244],
          [-91.54814304751035, 14.84722125497143],
          [-91.54805730592152, 14.847230180391747],
          [-91.54744135428774, 14.84729021700079],
          [-91.54721974441668, 14.847310617149333],
          [-91.5470086881979, 14.847319542564662],
          [-91.5468464387303, 14.847322092682774],
          [-91.54669869937702, 14.847311892207813],
          [-91.54662219149824, 14.847315717386891],
          [-91.54638352468922, 14.84730806584706],
          [-91.54621467971499, 14.847305515728834],
          [-91.54584202195664, 14.847295202415708],
          [-91.5456217320291, 14.847305402891408],
          [-91.5453952859337, 14.847307951619982],
          [-91.54517103870099, 14.8473143269173],
          [-91.54492771793873, 14.847325801373799],
          [-91.54477602128226, 14.847334726788489],
          [-91.54463355833455, 14.847348752439672],
          [-91.54452803022515, 14.847360227971024],
          [-91.5442752059546, 14.84738110499542],
          [-91.54416176323684, 14.847393855584329],
          [-91.54402193849258, 14.847397680760707],
          [-91.5439375160048, 14.847414256526008],
          [-91.54373652557894, 14.847440361016453],
          [-91.54360329634063, 14.847460761953755],
          [-91.54345239245318, 14.847499776995434],
          [-91.54336796996539, 14.8475112525188],
          [-91.54322814522112, 14.847509977460248],
          [-91.54311107004757, 14.84750531802706],
          [-91.54302664756045, 14.84749511756202],
          [-91.54294882057997, 14.847474716627985],
          [-91.5428881419166, 14.847465791219022],
          [-91.54285912168663, 14.847455590750826],
          [-91.54276216408998, 14.847398410213145],
          [-91.54269225169517, 14.847352508097018],
          [-91.54264214093946, 14.847318864052824],
          [-91.54257354766904, 14.847276787090834],
          [-91.5424354561076, 14.84718002945209],
          [-91.54233916170827, 14.847116276435727],
          [-91.54224814371386, 14.847051248338019],
          [-91.54216372122676, 14.846981119976675],
          [-91.54206394773752, 14.84690442378978],
          [-91.54200098899634, 14.846828877407205],
          [-91.54188809746064, 14.846753330999292],
          [-91.54180125781832, 14.846702966712343],
          [-91.5417013922288, 14.846669390513838],
          [-91.54153639690806, 14.846644208362562],
          [-91.54137574356899, 14.84662742025938],
          [-91.54122811617606, 14.84663791282459],
          [-91.54108917274758, 14.846656799439074],
          [-91.54091270154642, 14.846679281954053],
          [-91.54077592910905, 14.84670236558955],
          [-91.54059790784164, 14.846731744757975],
          [-91.54043074152924, 14.846752729876641],
          [-91.54027008812183, 14.846775813507918],
          [-91.5400227508295, 14.8468051928876],
          [-91.5398555845171, 14.846813586932441],
          [-91.53968841820522, 14.846830375021185],
          [-91.53954730378565, 14.846826177999105],
          [-91.53940618936606, 14.846840867575409],
          [-91.53891516437707, 14.846859834283663],
          [-91.53836304466836, 14.846878229754338],
          [-91.53769179504329, 14.84690087459343],
          [-91.53739555872748, 14.846893920531713],
          [-91.53705357798916, 14.846916606252279],
          [-91.53678703417829, 14.846916606252279],
          [-91.53670824449841, 14.846916606252279],
          [-91.53668980436018, 14.84661845088317],
          [-91.53667304059856, 14.846461270985685],
          [-91.53664454220394, 14.846391593262183],
          [-91.53654228325765, 14.84635918501128],
          [-91.53623047881638, 14.846295990087896],
          [-91.53600416803356, 14.846281406369172],
          [-91.53583150128841, 14.846250618514887],
          [-91.53563072684041, 14.846226954258128],
          [-91.53538765229597, 14.846186443913098],
          [-91.53524013119302, 14.846168619357954],
          [-91.53444083430678, 14.846056325557797],
          [-91.53423463844607, 14.846032019825486],
          [-91.53418937628942, 14.845972064457513],
          [-91.53415249601377, 14.845942896975345],
          [-91.5340670008291, 14.845936415311996],
          [-91.53402006229665, 14.845949378638608],
          [-91.5339831820206, 14.845986648197083],
          [-91.53394965449738, 14.846043362731763],
          [-91.53392283247855, 14.846088734347433],
          [-91.5338842757692, 14.846129244715343],
          [-91.53377122575755, 14.846162419550666],
          [-91.53369914158247, 14.846186725761598],
          [-91.53364382116862, 14.846186725761598],
          [-91.53352415603369, 14.846174838886782],
          [-91.53343027896841, 14.846163495988236],
          [-91.53337160580254, 14.846147291845924],
          [-91.53323246658061, 14.846114883558414],
          [-91.53317882254295, 14.846092197753691],
          [-91.53304638906562, 14.846027380551888],
          [-91.53294580649553, 14.845993351830487],
          [-91.53292736635728, 14.845975527260222],
          [-91.5328234310352, 14.84593825769906],
          [-91.53274799410732, 14.845915571876589],
          [-91.532625618647, 14.845888024802676],
          [-91.53252139060137, 14.845860980151116],
          [-91.53230346169957, 14.845831812653984],
          [-91.53207212178815, 14.84579454306801],
          [-91.53179887247248, 14.845760514310797],
          [-91.53099754993242, 14.84564697344264],
          [-91.53031042950961, 14.845545233982534],
          [-91.53004891482738, 14.84551444602333],
          [-91.52971363959342, 14.845465833448316],
          [-91.52884658387552, 14.845349781867583],
          [-91.52809850203563, 14.845250025637938],
          [-91.516966785099, 14.843780942048753],
          [-91.51543839254153, 14.843574552756891],
          [-91.51485392848707, 14.843498378387167],
          [-91.5139819511099, 14.843381534608596],
          [-91.51369169949349, 14.84325964941759],
          [-91.51348709589503, 14.843179159158183],
          [-91.51342999721643, 14.843130864989533],
          [-91.51289157201532, 14.842789421964326],
          [-91.51250853504602, 14.842550250302637],
          [-91.51204632334974, 14.842253175825164],
          [-91.51173084993947, 14.842001735215561],
          [-91.5112940535331, 14.841677331705228],
          [-91.51105864816962, 14.84149054967898],
          [-91.51085142264122, 14.841324677053677],
          [-91.51072881568075, 14.841228915573552],
          [-91.51015675697232, 14.840758895212986],
          [-91.50990169714241, 14.840560717733126],
          [-91.5093794379399, 14.840137015356888],
          [-91.50900732554564, 14.839831929038695],
          [-91.50883620945733, 14.839686806343238],
          [-91.50832536785522, 14.839294157276555],
          [-91.50780539333603, 14.838873191693295],
          [-91.50753741908406, 14.838668770616607],
          [-91.50744540532776, 14.838476831324144],
          [-91.5073598472838, 14.838373840387874],
          [-91.50723877457965, 14.838353554288673],
          [-91.50717904537895, 14.838395686954513],
          [-91.50696561094809, 14.838714359414666],
          [-91.50679288055703, 14.838837636243724],
          [-91.50642482242532, 14.839077765172831],
          [-91.50610885399789, 14.839261365315778],
          [-91.50593450618277, 14.839649919948087],
          [-91.50575280448821, 14.8398663510837],
          [-91.50547497251264, 14.840201932620488],
          [-91.50521061703161, 14.840526504818328],
          [-91.5049322751834, 14.840876573099777],
          [-91.50462675229824, 14.841270432128084],
          [-91.50441527811559, 14.841554434730327],
          [-91.50428129098982, 14.841733885962427],
          [-91.50421349027536, 14.841835314853881],
          [-91.50416183258844, 14.841897732609212],
          [-91.50412631792865, 14.841949227244697],
          [-91.50403853121814, 14.842191891653982],
          [-91.50394430990058, 14.842444082788347],
          [-91.50389232454964, 14.842556910032073],
          [-91.50376775037695, 14.84280059051099],
          [-91.50366966480875, 14.842923846957603],
          [-91.5035892346427, 14.843007282050507],
          [-91.5034078949785, 14.843180711812636],
          [-91.50332550310155, 14.843261302432325],
          [-91.50312199333345, 14.843469937328777],
          [-91.50302979289947, 14.843565697816302],
          [-91.50286690910694, 14.84371263295212],
          [-91.50271487647639, 14.843849162589507],
          [-91.50255865213772, 14.843993884825863],
          [-91.50246154742548, 14.844085852595711],
          [-91.50228981016221, 14.844238899024589],
          [-91.50220545657385, 14.844323281730311],
          [-91.50206878200505, 14.844454495457086],
          [-91.50195483658575, 14.844559130810694],
          [-91.50189402353372, 14.844625499135262],
          [-91.50180657182058, 14.84475584419964],
          [-91.50168021762896, 14.84496581778906],
          [-91.50163509826768, 14.845048303976682],
          [-91.50156453053008, 14.845194211406167],
          [-91.50152627715893, 14.845285230550147],
          [-91.50146567164316, 14.84545796820386],
          [-91.501443119276, 14.845547062721977],
          [-91.50142870914206, 14.845629767158655],
          [-91.50142478571372, 14.845680965333429],
          [-91.50141931044665, 14.845753729655684],
          [-91.50142127215805, 14.845796394773984],
          [-91.50145069821392, 14.845919134533716],
          [-91.50147423875026, 14.84597602131268],
          [-91.501489932441, 14.846018686387055],
          [-91.50152052125003, 14.846068771509678],
          [-91.5015694566364, 14.846154842097235],
          [-91.50160084401834, 14.84622879482518],
          [-91.50169746802331, 14.846394596149011],
          [-91.50182940675106, 14.846630340900717],
          [-91.50192173761371, 14.84683913372254],
          [-91.50195872043899, 14.846966667537856],
          [-91.50198270929863, 14.847024637429385],
          [-91.50204066530479, 14.847202482832571],
          [-91.50208064673737, 14.8473309825971],
          [-91.50209164163132, 14.847399580184742],
          [-91.50208964255965, 14.847507790418476],
          [-91.50207964720177, 14.847558997028742],
          [-91.50203758270892, 14.847666523809195],
          [-91.50199760128002, 14.84776410614191],
          [-91.50196217567955, 14.847862430657742],
          [-91.50190198996533, 14.847998289773301],
          [-91.50186400760391, 14.848080413389397],
          [-91.50185201317437, 14.848125822904649],
          [-91.50177780219175, 14.848297527370406],
          [-91.50175081472436, 14.848370955444238],
          [-91.50140148346021, 14.84921155341479],
          [-91.50122474018231, 14.849645768070374],
          [-91.50118729883214, 14.849712721173901],
          [-91.50111616026642, 14.849756150202936],
          [-91.50087466355647, 14.84989910402831],
          [-91.50077357191083, 14.849947961642911],
          [-91.50011576295579, 14.850249245792412],
          [-91.49926640553277, 14.850621573310505],
          [-91.49898490427918, 14.85074563212386],
          [-91.49879395339227, 14.85079448954798],
          [-91.49860300250583, 14.850866870895501],
          [-91.49840830748381, 14.850926585489091],
          [-91.49824543760978, 14.850982681002222],
          [-91.49755772738061, 14.851232640945554],
          [-91.49695648894385, 14.851457528605877],
          [-91.4965390178874, 14.851645719482647],
          [-91.49575451161822, 14.851996766001676],
          [-91.49555045625841, 14.852101718363642],
          [-91.49543064393767, 14.852145146912534],
          [-91.49514455881257, 14.852300107207668],
          [-91.4949685844661, 14.8524086784643],
          [-91.49455948395224, 14.852649362031684],
          [-91.49416483437265, 14.852895756781123],
          [-91.49403940584925, 14.852971756456384],
          [-91.49362411092545, 14.853234571907464],
          [-91.49352302151917, 14.85330152260542],
          [-91.49338636059043, 14.853411902870448],
          [-91.49332458224664, 14.853458950254094],
          [-91.49286566982293, 14.853780776714558],
          [-91.49279078712213, 14.853822395416799],
          [-91.49269718374623, 14.853907442306564],
          [-91.49240652194739, 14.854123427532215],
          [-91.49205522772864, 14.854380861163605],
          [-91.49187293197801, 14.854509605870646],
          [-91.49182295518706, 14.854563709214503],
          [-91.49178097468281, 14.854612015759486],
          [-91.49176198350212, 14.854633270636015],
          [-91.49171382715153, 14.854713065065496],
          [-91.49167884339742, 14.854771999009188],
          [-91.49165685360946, 14.854808711949573],
          [-91.49156645226581, 14.855054780122032],
          [-91.49150540520799, 14.855215204559386],
          [-91.49146814434448, 14.85531958360528],
          [-91.49139988582802, 14.855515116323375],
          [-91.49135359455525, 14.855651810920705],
          [-91.49131929791973, 14.855738511594666],
          [-91.4912823630814, 14.855811187132872],
          [-91.49124542824309, 14.855886412663637],
          [-91.49115510358354, 14.856088179934105],
          [-91.49102158299291, 14.856377520920887],
          [-91.490933643673, 14.856559189856057],
          [-91.49090330431379, 14.856684140305632],
          [-91.49088087959043, 14.856814190681945],
          [-91.49083692569437, 14.857013609828002],
          [-91.49079721016166, 14.857222128310866],
          [-91.49076423262785, 14.857409553360043],
          [-91.49073753465788, 14.857569602309823],
          [-91.49070587622514, 14.857714952128347],
          [-91.49063154744354, 14.858056647375932],
          [-91.49060010860275, 14.858146846518352],
          [-91.49053547263551, 14.858336820753124],
          [-91.4905143670139, 14.858381445549952],
          [-91.49049458049336, 14.858431170311448],
          [-91.49032381361289, 14.858901270856691],
          [-91.49015712430864, 14.859348551329617],
          [-91.49001561461918, 14.85971831940067],
          [-91.48991045522348, 14.860004302693753],
          [-91.48981358851262, 14.860271326128583],
          [-91.48969848969503, 14.860598063440108],
          [-91.48965265396774, 14.860720141804364],
          [-91.48952707420348, 14.86101780668298],
          [-91.4894048401335, 14.861324371203352],
          [-91.48937428298197, 14.861507488107847],
          [-91.48929371962733, 14.861871418190148],
          [-91.48927945962353, 14.86199940281513],
          [-91.48925093969484, 14.862300096113373],
          [-91.48924584683643, 14.86241035957589],
          [-91.48925830492513, 14.86319627237259],
          [-91.48926359728429, 14.863332955637546],
          [-91.48926499531319, 14.863452766838193],
          [-91.48926443998946, 14.863592680990791],
          [-91.48929873914959, 14.864146947906661],
          [-91.48930586412465, 14.86427205353668],
          [-91.48931425524141, 14.864476536585414],
          [-91.48930475527466, 14.864646404502665],
          [-91.48929881779571, 14.864725599634255],
          [-91.48925683719989, 14.865195324196904],
          [-91.48923226741529, 14.865581371409348],
          [-91.48919034528325, 14.865847184169212],
          [-91.48912823763136, 14.866272475602145],
          [-91.48908618628168, 14.86656906597075],
          [-91.4890308337167, 14.866935564966354],
          [-91.48895456182161, 14.867434194484318],
          [-91.48894710593993, 14.867477883158713],
          [-91.48886635622422, 14.867654635152121],
          [-91.48880460644146, 14.867774000053302],
          [-91.48876304408776, 14.86784286438946],
          [-91.48873691917974, 14.867900251318687],
          [-91.4886004945006, 14.868091411383645],
          [-91.4885482446846, 14.868184378095151],
          [-91.48851261980981, 14.868219957937526],
          [-91.48848954142854, 14.868253791389975],
          [-91.48850379137866, 14.868440872368822],
          [-91.48853229192213, 14.868862024373072],
          [-91.48853704242707, 14.868923672137214],
          [-91.48852397995874, 14.86910271842936],
          [-91.4885132924953, 14.869208079726505],
          [-91.4885100212982, 14.869366417176991],
          [-91.488573245918, 14.869600529983046],
          [-91.48867294063025, 14.86996404446333],
          [-91.48878500235547, 14.870388237769802],
          [-91.48884304889508, 14.870598781091545],
          [-91.48894173999041, 14.871005885426129],
          [-91.4890641637544, 14.87139876382247],
          [-91.4891445227771, 14.87167661325256],
          [-91.4891878776258, 14.872040742248473],
          [-91.4892383456416, 14.872470623263311],
          [-91.48925612595305, 14.872835791785732],
          [-91.48926079752843, 14.872945934586923],
          [-91.48923183073157, 14.873256603354605],
          [-91.48920104002866, 14.873640757107054],
          [-91.48920062507713, 14.873664331111982],
          [-91.48923426393787, 14.873920812644599],
          [-91.48924921403152, 14.873987504710556],
          [-91.48930527880005, 14.87414645081003],
          [-91.48936777436498, 14.87431862473727],
          [-91.48943318326127, 14.874433318633947],
          [-91.48967472366877, 14.874855279866821],
          [-91.48986543753188, 14.875192226539312],
          [-91.4900443342422, 14.87551390141519],
          [-91.49027412912018, 14.87591817359079],
          [-91.4904457346669, 14.876221372658918],
          [-91.49049807742692, 14.876311714334634],
          [-91.49052984746248, 14.876314423614772],
        ],
        type: 'LineString',
      },
    },
  ],
};

export function Ruta11() {
  return (
    <Map
      height={500}
      defaultCenter={[14.844623950713178, -91.52317425152974]}
      defaultZoom={14}
    >
      <GeoJson
        data={geoJsonSample}
        styleCallback={(feature: any, hover: any) => {
          if (feature.geometry.type === 'LineString') {
            return { strokeWidth: '3', stroke: '#36728C' };
          }
          return {
            fill: '#d4e6ec99',
            strokeWidth: '1',
            stroke: 'white',
            r: '20',
          };
        }}
      />
    </Map>
  );
}

export default Ruta11;