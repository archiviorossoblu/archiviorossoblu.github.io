(this["webpackJsonparchiviorossoblu.com"]=this["webpackJsonparchiviorossoblu.com"]||[]).push([[0],{103:function(a,e,t){},104:function(a,e,t){},113:function(a,e,t){"use strict";t.r(e);var n=t(0),o=t.n(n),i=t(8),r=t.n(i),l=(t(103),t(15)),c=(t(104),t(85)),s=t(153),m=t(155),d=t(174),p=t(164),u=t(173),g=t(80),h=t.n(g),E=t(81),f=t.n(E),b=t(82),v=t.n(b),_=t(57),j=t(26),S=t(4),C=t(14),O=t(158),y=t(159),w=t(161),N=t(160),k=t(157),P=t(162),z=t(172),x=t(152),A=t(176),L=t(156),F=t(175),R=t(11),M=t(79),B=t.n(M),T=t(154),I=t(61),D=t.n(I),G=t(63),V=t.n(G),W=t(62),H=t.n(W),U=t(60),q=t.n(U),J=t(74),K=t.n(J),Q=t(75),$=t.n(Q),X=Object(S.a)((function(a){return{root:{"&:nth-of-type(odd)":{backgroundColor:a.palette.action.hover}}}}))(x.a),Y=Object(s.a)((function(a){return{root:{flexShrink:0,marginLeft:a.spacing(2.5)}}}));function Z(a){var e=Y(),t=Object(C.a)(),n=a.count,i=a.page,r=a.rowsPerPage,l=a.onChangePage;return o.a.createElement("div",{className:e.root},o.a.createElement(T.a,{onClick:function(a){l(a,0)},disabled:0===i,"aria-label":"first page"},"rtl"===t.direction?o.a.createElement(q.a,null):o.a.createElement(D.a,null)),o.a.createElement(T.a,{onClick:function(a){l(a,i-1)},disabled:0===i,"aria-label":"previous page"},"rtl"===t.direction?o.a.createElement(H.a,null):o.a.createElement(V.a,null)),o.a.createElement(T.a,{onClick:function(a){l(a,i+1)},disabled:i>=Math.ceil(n/r)-1,"aria-label":"next page"},"rtl"===t.direction?o.a.createElement(V.a,null):o.a.createElement(H.a,null)),o.a.createElement(T.a,{onClick:function(a){l(a,Math.max(0,Math.ceil(n/r)-1))},disabled:i>=Math.ceil(n/r)-1,"aria-label":"last page"},"rtl"===t.direction?o.a.createElement(D.a,null):o.a.createElement(q.a,null)))}var aa=Object(s.a)((function(a){return{avatar:{backgroundColor:"#CA2331",color:"#FFFFFF"},container:{maxHeight:440},header:{fontWeight:"bold"},title:Object(j.a)({flexGrow:1,display:"none"},a.breakpoints.up("sm"),{display:"block"}),search:Object(j.a)({position:"relative",borderRadius:a.shape.borderRadius,backgroundColor:Object(R.b)(a.palette.common.white,.15),"&:hover":{backgroundColor:Object(R.b)(a.palette.common.white,.25)},marginLeft:0,width:"100%"},a.breakpoints.up("sm"),{marginLeft:a.spacing(1),width:"auto"}),searchIcon:{padding:a.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:a.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(a.spacing(4),"px)"),transition:a.transitions.create("width"),width:"100%"},a.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function ea(a){var e=a.seasons,t=a.seasonSelect,i=aa(),r=Object(n.useState)(""),c=Object(l.a)(r,2),s=c[0],d=c[1],p=Object(n.useState)(0),u=Object(l.a)(p,2),g=u[0],h=u[1],E=e;if(s){var f=new RegExp(K()(s),"i");E=e.filter((function(a){return f.test(a.year)})),console.log(E,E)}E.sort($()("-year"));var b=10-Math.min(10,E.length-10*g);return o.a.createElement("div",{className:i.root},o.a.createElement(m.a,{position:"static"},o.a.createElement(L.a,null,o.a.createElement(_.a,{className:i.title,variant:"h6",noWrap:!0},"Stagioni Cagliari Calcio"),o.a.createElement("div",{className:i.search},o.a.createElement("div",{className:i.searchIcon},o.a.createElement(B.a,null)),o.a.createElement(F.a,{placeholder:"Cerca..",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"},value:s,onChange:function(a){return function(a){console.log("query",a),d(a),h(0)}(a.target.value)}})))),o.a.createElement(k.a,{className:i.container},o.a.createElement(O.a,{stickyHeader:!0,"aria-label":"sticky table"},o.a.createElement(y.a,null,o.a.createElement(x.a,null,o.a.createElement(N.a,{className:i.header},"Serie"),o.a.createElement(N.a,{className:i.header},"Anno"),o.a.createElement(N.a,{className:i.header},"Punti"),o.a.createElement(N.a,{className:i.header},"Posizione"),o.a.createElement(N.a,{className:i.header},"V"),o.a.createElement(N.a,{className:i.header},"P"),o.a.createElement(N.a,{className:i.header},"S"),o.a.createElement(N.a,{className:i.header},"GF"),o.a.createElement(N.a,{className:i.header},"GS"),o.a.createElement(N.a,{className:i.header},"DR"))),o.a.createElement(w.a,null,E.slice(10*g,10*g+10).map((function(a){return o.a.createElement(X,{key:a.id,onClick:function(){return t(a.id,a.year)}},o.a.createElement(N.a,null,o.a.createElement(A.a,{"aria-label":"recipe",className:i.avatar},a.league)),o.a.createElement(N.a,{component:"th",scope:"row"},o.a.createElement("a",{href:"#seasons",onClick:function(){return t(a.id,a.year)}},a.year)),o.a.createElement(N.a,null,a.points),o.a.createElement(N.a,null,a.position),o.a.createElement(N.a,null,a.v),o.a.createElement(N.a,null,a.d),o.a.createElement(N.a,null,a.l),o.a.createElement(N.a,null,a.gf),o.a.createElement(N.a,null,a.gs),o.a.createElement(N.a,null,a.dr))})),b>0&&o.a.createElement(x.a,{style:{height:53*b}},o.a.createElement(N.a,{colSpan:6}))),o.a.createElement(P.a,null,o.a.createElement(x.a,null,o.a.createElement(z.a,{rowsPerPageOptions:[10],colSpan:10,count:E.length,rowsPerPage:10,page:g,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(a,e){h(e)},ActionsComponent:Z}))))))}function ta(a){var e=a.seasons,t=a.onSeasonSelect;return o.a.createElement(n.Fragment,null,o.a.createElement(_.a,{variant:"subtitle1",gutterBottom:!0},o.a.createElement("b",null,"ArchivioRossoBlu.it")," nasce dalla passione per il ",o.a.createElement("b",null,"Cagliari Calcio")," e le ",o.a.createElement("b",null,"statistiche")," di un gruppo di ragazzi. Il sito contiene dati aggiornati dalla stagione ",o.a.createElement("b",null,"1947/1948")," ad oggi."),o.a.createElement(ea,{seasons:e,seasonSelect:t}))}var na=t(88),oa=t(163),ia=Object(S.a)((function(a){return{head:{backgroundColor:a.palette.common.white,color:a.palette.common.black},body:{fontSize:12}}}))(N.a),ra=Object(S.a)((function(a){return{root:{"&:nth-of-type(odd)":{backgroundColor:a.palette.action.hover}}}}))(x.a),la=Object(s.a)((function(a){return{container:{maxHeight:440},title:Object(j.a)({flexGrow:1,display:"none"},a.breakpoints.up("sm"),{display:"block"}),header:{fontWeight:"bold"}}}));function ca(a){var e=a.players,t=a.countries,n=a.seasonID,i=a.seasonLabel,r=la();return console.log("season",n),console.log("countries",t),o.a.createElement("div",{className:r.root},o.a.createElement(m.a,{position:"static"},o.a.createElement(L.a,null,o.a.createElement(_.a,{className:r.title,variant:"h6",noWrap:!0},"Rosa Stagione ",i))),o.a.createElement(na.a,{className:r.root},o.a.createElement(k.a,{className:r.container},o.a.createElement(O.a,{stickyHeader:!0,"aria-label":"sticky table"},o.a.createElement(y.a,null,o.a.createElement(x.a,null,o.a.createElement(ia,{className:r.header},"Giocatore"),o.a.createElement(ia,{className:r.header},"Ruolo"),o.a.createElement(ia,{className:r.header},"Numero"),o.a.createElement(ia,{className:r.header},"Presenze"),o.a.createElement(ia,{className:r.header},"Gol"),o.a.createElement(ia,{className:r.header},"Ammonizioni"),o.a.createElement(ia,{className:r.header},"Espulsioni"))),o.a.createElement(w.a,null,e.length>0?e.map((function(a){return o.a.createElement(ra,{key:a.id},o.a.createElement(ia,{component:"th",scope:"row"},o.a.createElement("div",{className:"place-avatar",style:{backgroundImage:"url(https://www.archiviorossoblu.it/images/nazioni/".concat((e=a.country,t.filter((function(a){return a.description===e}))[0].flag),")"),backgroundRepeat:"no-repeat",margin:0,paddingLeft:20}},a.surname," ",a.name)),o.a.createElement(ia,null,a.role),o.a.createElement(ia,null,a.number),o.a.createElement(ia,null,a.appearances),o.a.createElement(ia,null,a.goals),o.a.createElement(ia,null,a.yellowcard),o.a.createElement(ia,null,a.redcard));var e})):n.length>0?o.a.createElement(ra,{key:"none"},o.a.createElement(ia,{align:"right",colSpan:7},o.a.createElement(oa.a,null))):o.a.createElement(ra,{key:"none"},o.a.createElement(ia,{align:"right",colSpan:7},"Seleziona stagione.")))))))}var sa=Object(S.a)((function(a){return{head:{backgroundColor:a.palette.common.white,color:a.palette.common.black},body:{fontSize:12}}}))(N.a),ma=Object(S.a)((function(a){return{root:{"&:nth-of-type(odd)":{backgroundColor:a.palette.action.hover}}}}))(x.a),da=Object(s.a)((function(a){return{container:{maxHeight:440},title:Object(j.a)({flexGrow:1,display:"none"},a.breakpoints.up("sm"),{display:"block"}),header:{fontWeight:"bold"}}}));function pa(a){var e=a.matches,t=a.seasonID,n=a.seasonLabel,i=da();return o.a.createElement("div",{className:i.root},o.a.createElement(m.a,{position:"static"},o.a.createElement(L.a,null,o.a.createElement(_.a,{className:i.title,variant:"h6",noWrap:!0},"Campionago Stagione ",n))),o.a.createElement(k.a,{component:na.a},o.a.createElement(O.a,{className:i.table,"aria-label":"customized table"},o.a.createElement(y.a,null,o.a.createElement(x.a,null,o.a.createElement(sa,{className:i.header},"Giornata"),o.a.createElement(sa,{className:i.header},"Data"),o.a.createElement(sa,{className:i.header},"Partita"))),o.a.createElement(w.a,null,e.length>0?e.map((function(a){return o.a.createElement(ma,{key:a.id},o.a.createElement(sa,null,a.day),o.a.createElement(sa,null,a.date),o.a.createElement(sa,null,a.home," ",a.gh," - ",a.ga," ",a.away))})):t.length>0?o.a.createElement(ma,{key:"none"},o.a.createElement(sa,{align:"right",colSpan:4},o.a.createElement(oa.a,null))):o.a.createElement(ma,{key:"none"},o.a.createElement(sa,{align:"right",colSpan:4},"Seleziona stagione."))))))}function ua(a){var e=a.children,t=a.value,n=a.index,i=Object(c.a)(a,["children","value","index"]);return o.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"nav-tabpanel-".concat(n),"aria-labelledby":"nav-tab-".concat(n)},i),t===n&&o.a.createElement(u.a,{p:3},o.a.createElement("div",null,e)))}function ga(a){return{id:"nav-tab-".concat(a),"aria-controls":"nav-tabpanel-".concat(a)}}function ha(a){return o.a.createElement(p.a,Object.assign({component:"a",onClick:function(a){a.preventDefault()}},a))}var Ea=Object(s.a)((function(a){return{root:{flexGrow:1,backgroundColor:a.palette.background.paper}}}));function fa(a){var e=a.players,t=a.matches,i=a.seasonID,r=a.seasons,c=a.countries,s=a.onSeasonSelect,p=a.seasonLabel,u=Ea(),g=Object(n.useState)(0),E=Object(l.a)(g,2),b=E[0],_=E[1];Object(n.useEffect)((function(){i>0&&_(1)}),[i]);var j=!0;return i>0&&(j=!1),o.a.createElement("div",{className:u.root},o.a.createElement(m.a,{position:"static"},o.a.createElement(d.a,{variant:"fullWidth",value:b,onChange:function(a,e){_(e)},"aria-label":"nav tabs example"},o.a.createElement(ha,Object.assign({label:"Home",icon:o.a.createElement(h.a,null),href:"/home"},ga(0))),o.a.createElement(ha,Object.assign({label:"Rosa",icon:o.a.createElement(f.a,null),href:"/players"},ga(1),{disabled:j})),o.a.createElement(ha,Object.assign({label:"Campionato",icon:o.a.createElement(v.a,null),href:"/matches"},ga(2),{disabled:j})))),o.a.createElement(ua,{value:b,index:0},o.a.createElement(ta,{seasons:r,onSeasonSelect:s})),o.a.createElement(ua,{value:b,index:1,selected:!0},o.a.createElement(ca,{players:e,seasonID:i,seasonLabel:p,countries:c})),o.a.createElement(ua,{value:b,index:2},o.a.createElement(pa,{matches:t,seasonID:i,seasonLabel:p})))}var ba=t(165),va=t(166),_a=t(167),ja=t(168),Sa=t(83),Ca=t.n(Sa),Oa=(t(111),Object(s.a)((function(a){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:a.transitions.create("transform",{duration:a.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:"#CA2331",color:"#FFFFFF"},cardAction:{display:"flex","& > *":{margin:a.spacing(1)}}}})));function ya(a){var e=a.match,t=a.allTeams,n=Oa(),i="".concat(e.home," ").concat(e.goalshome," - ").concat(e.goalsaway," ").concat(e.away),r=t.filter((function(a){return a.name===e.home})),l=t.filter((function(a){return a.name===e.away})),c="https://www.archiviorossoblu.it/images/squadre/".concat(r[0].photo),s="https://www.archiviorossoblu.it/images/squadre/".concat(l[0].photo),m="https://www.archiviorossoblu.it/images/partite/".concat(e.photo);return o.a.createElement(ba.a,{className:n.root},o.a.createElement(va.a,{avatar:o.a.createElement(A.a,{"aria-label":"recipe",className:n.avatar},e.day),title:i,subheader:o.a.createElement(Ca.a,{locale:"it",format:"LLLL"},e.date)}),o.a.createElement(_a.a,{className:n.media,image:m,title:r.name}),o.a.createElement(ja.a,{className:n.cardAction},o.a.createElement(A.a,{alt:e.home,src:c,variant:"square"}),o.a.createElement(A.a,{alt:e.away,src:s,variant:"square"})))}var wa=Object(s.a)((function(a){return{root:{flexGrow:1},menuButton:{marginRight:a.spacing(2)},title:{flexGrow:1}}}));function Na(a){a.title,a.copyright;var e=wa();return o.a.createElement("div",{className:e.root},o.a.createElement(m.a,{position:"static"},o.a.createElement(L.a,null,o.a.createElement(_.a,{variant:"subtitle2"},o.a.createElement("p",null,"Questo sito ",o.a.createElement("b",null,"NON")," \xe8 collegato in nessun modo al Cagliari Calcio spa. I marchi e i loghi presenti sul sito sono dei rispettivi proprietari. Questo sito non \xe8 testata giornalistica e viene aggiornato senza alcuna periodicit\xe0.Non pu\xf2 essere considerato in alcun modo un prodotto editoriale ai sensi della legge n. 62 del 7 marzo 2001")))))}var ka=t(43),Pa=t.n(ka),za=t(64),xa=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ATTR_API_URL||"https://www.archiviorossoblu.it/api",Aa=localStorage.token;Aa||(Aa=localStorage.token=Math.random().toString(36).substr(-8));var La={Accept:"application/json",Authorization:Aa},Fa=function(){var a=Object(za.a)(Pa.a.mark((function a(e){return Pa.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",fetch("".concat(xa,"/").concat(e,".php"),{headers:La}).then((function(a){return a.json()})));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),Ra=function(){var a=Object(za.a)(Pa.a.mark((function a(e,t){return Pa.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",fetch("".concat(xa,"/").concat(e,".php?id=").concat(t),{headers:La}).then((function(a){return a.json()})));case 1:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),Ma=[{id:"37",description:"Bulgaria",flag:"bulgaria.jpg"},{id:"36",description:"Estonia",flag:"estonia.png"},{id:"35",description:"Olanda",flag:"olanda.gif"},{id:"34",description:"Corea Del Nord",flag:"koreanord.png"},{id:"33",description:"Moldavia",flag:"moldavia.png"},{id:"32",description:"Polonia",flag:"polonia.png"},{id:"31",description:"Ghana",flag:"ghana.gif"},{id:"30",description:"Repubblica Ceca",flag:"rep_ceca.png"},{id:"29",description:"Macedonia",flag:"macedonia.png"},{id:"28",description:"Cile",flag:"cile.png"},{id:"27",description:"Svezia",flag:"svezia.png"},{id:"26",description:"Colombia",flag:"colombia.png"},{id:"25",description:"Serbia",flag:"serbia.png"},{id:"24",description:"Marocco",flag:"marocco.png"},{id:"23",description:"Croazia",flag:"croazia.gif"},{id:"22",description:"Ungheria",flag:"ungheria.jpg"},{id:"21",description:"Bielorussia",flag:"Bielorussia.png"},{id:"20",description:"Venezuela",flag:"venezuela.gif"},{id:"19",description:"Slovenia",flag:"slovenia.jpg"},{id:"18",description:"Portogallo",flag:"portogallo.png"},{id:"17",description:"Inghilterra",flag:"gb.png"},{id:"16",description:"Spagna",flag:"es.png"},{id:"15",description:"Peru",flag:"pe.png"},{id:"14",description:"Panama",flag:"panama.png"},{id:"13",description:"Danimarca",flag:"dk.png"},{id:"12",description:"Sierra Leone",flag:"sierra_leone.png"},{id:"11",description:"Sud Africa",flag:"sud_africa.png"},{id:"10",description:"Belgio",flag:"be.png"},{id:"9",description:"Camerun",flag:"cameroon.png"},{id:"8",description:"Argentina",flag:"ar.png"},{id:"7",description:"Grecia",flag:"gr.png"},{id:"6",description:"Svizzera",flag:"ch.png"},{id:"5",description:"Brasile",flag:"br.png"},{id:"4",description:"Francia",flag:"fr.png"},{id:"3",description:"Honduras",flag:"honduras.png"},{id:"2",description:"Uruguay",flag:"uruguay.png"},{id:"1",description:"Italia",flag:"it.png"}],Ba=[{id:"105",name:"Benevento",stadium:"Vigorito",photo:"1508744428_1463671391_benevento-calcio.png"},{id:"104",name:"Spal",stadium:"Paolo Mazza",photo:"1505059974_spal.png"},{id:"103",name:"ProVercelli",stadium:"Silvio Piola",photo:"1451045101_fc_pro_vercelli.png"},{id:"102",name:"Lanciano",stadium:"Guido Biondi",photo:"1449479676_lanciano.jpeg"},{id:"101",name:"Trapani",stadium:"Polisportivo Provinciale",photo:"1445182368_trapani.png"},{id:"100",name:"Latina",stadium:"Domenico Francioni",photo:"1442958579_us_latina.png"},{id:"99",name:"VirtusEntella",stadium:"Comunale di Chiavari",photo:"1442696381_entella.png"},{id:"98",name:"Crotone",stadium:"Ezio Scida",photo:"1440574799_crotone.png"},{id:"97",name:"Sassuolo",stadium:"Mapei Stadium - Citt\xe0 del Tricolore",photo:"1385416604_sassuolo.jpeg"},{id:"96",name:"Novara",stadium:"Silvio Piola",photo:"1315753735_novara.jpg"},{id:"95",name:"Vis Pesaro",stadium:"",photo:""},{id:"94",name:"Vicenza",stadium:"Romeo Menti",photo:"1446017567_vicenza.png"},{id:"93",name:"Viareggio",stadium:"",photo:""},{id:"92",name:"Verona",stadium:"Bentegodi",photo:"1383169840_Hellas-Verona.png"},{id:"91",name:"Venezia",stadium:"",photo:""},{id:"90",name:"Varese",stadium:"",photo:""},{id:"89",name:"Udinese",stadium:"Stadio Friuli",photo:"1231697421_udinese.gif"},{id:"88",name:"Triestina",stadium:"",photo:""},{id:"87",name:"Treviso",stadium:"",photo:""},{id:"86",name:"Torres",stadium:"",photo:""},{id:"85",name:"Torino",stadium:"Stadio Comunale",photo:"1223238628_torinoax2.jpg"},{id:"84",name:"Tevere Roma",stadium:"",photo:""},{id:"83",name:"Ternana",stadium:"Libero Liberati",photo:"1441657946_logo_ternana.gif"},{id:"82",name:"Teramo",stadium:"",photo:""},{id:"81",name:"Taranto",stadium:"",photo:""},{id:"80",name:"Spezia",stadium:"Alberto Picco",photo:"1446968288_spezoa.png"},{id:"79",name:"Spal",stadium:"Paolo Mazza",photo:"1505060038_spal.png"},{id:"78",name:"Siena",stadium:"A.Franchi",photo:"1220694939_siena.jpg"},{id:"77",name:"Sampdoria",stadium:"Marassi",photo:"1227457528_Logo Sampdoria.jpg"},{id:"76",name:"Sambenedettese",stadium:"",photo:""},{id:"75",name:"Salernitana",stadium:"Arechi",photo:"1450634368_salernitana.jpeg"},{id:"74",name:"Roma",stadium:"Olimpico",photo:"1228064826_Logo Roma.jpg"},{id:"73",name:"Rimini",stadium:"",photo:""},{id:"72",name:"Reggina",stadium:"Granillo",photo:"1229291172_LogoRegginaCalcio.jpg"},{id:"71",name:"Reggiana",stadium:"",photo:""},{id:"70",name:"Ravenna",stadium:"",photo:""},{id:"69",name:"ProPatria",stadium:"",photo:""},{id:"68",name:"Prato",stadium:"",photo:""},{id:"67",name:"Potenza",stadium:"",photo:""},{id:"66",name:"Portocivitanova",stadium:"",photo:""},{id:"65",name:"Pistoiese",stadium:"",photo:""},{id:"64",name:"Pisa",stadium:"",photo:""},{id:"63",name:"Piacenza",stadium:"",photo:""},{id:"62",name:"Pescara",stadium:"Adriatico",photo:"1360572977_pescara_logo.jpeg"},{id:"61",name:"Perugia",stadium:"Renato Curi",photo:"1445780513_perugia.png"},{id:"60",name:"Parma",stadium:"Tardini",photo:"1253739069_logo_parma_calcio.gif"},{id:"59",name:"Palermo",stadium:"R.Barbera",photo:"1228064996_palermo_logo.jpg"},{id:"58",name:"Padova",stadium:"",photo:""},{id:"57",name:"Novara",stadium:"Silvio Piola",photo:"1444601767_novara-logo.png"},{id:"56",name:"Nocerina",stadium:"",photo:""},{id:"55",name:"Napoli",stadium:"San Paolo",photo:"1226851539_logoo_napoli.jpeg"},{id:"54",name:"Monza",stadium:"",photo:""},{id:"53",name:"Monopoli",stadium:"",photo:""},{id:"52",name:"Modena",stadium:"Alberto Braglia",photo:"1446499768_modena.jpg"},{id:"51",name:"Milan",stadium:"San Siro",photo:"1221989104_Logo-milan.gif"},{id:"50",name:"Messina",stadium:"",photo:""},{id:"49",name:"Marzotto",stadium:"",photo:""},{id:"48",name:"Mantova",stadium:"",photo:""},{id:"47",name:"Lucchese",stadium:"",photo:""},{id:"46",name:"Livorno",stadium:"A. Picchi",photo:"1248884769_livorno.gif"},{id:"45",name:"Licata",stadium:"",photo:""},{id:"44",name:"Lecco",stadium:"",photo:""},{id:"43",name:"Lecce",stadium:"Via del Mare",photo:"1221571234_logo_lecce_big_miniatura.gif"},{id:"42",name:"Lazio",stadium:"Olimpico",photo:"1232294369_logo_lazio.jpg"},{id:"41",name:"Juventus",stadium:"Juventus Stadium",photo:"1220698373_logo_juventus.jpg"},{id:"40",name:"Ischia",stadium:"",photo:""},{id:"39",name:"Inter",stadium:"San Siro",photo:"1221989092_logo_inter.jpg"},{id:"38",name:"Grosseto",stadium:"",photo:""},{id:"37",name:"Giarre",stadium:"",photo:""},{id:"36",name:"Genoa",stadium:"Ferraris",photo:"1225039407_logo genoa x inter.jpg"},{id:"35",name:"Frosinone",stadium:"Benito Stirpe",photo:"1543257498_frosinone-128x128.png"},{id:"34",name:"Francavilla",stadium:"",photo:""},{id:"33",name:"Forli'",stadium:"",photo:""},{id:"32",name:"Foggia",stadium:"",photo:""},{id:"31",name:"Fiorentina",stadium:"A. Franchi",photo:"1222015126_logo_fiorentina.jpg"},{id:"30",name:"Fidelis Andria",stadium:"",photo:""},{id:"29",name:"Empoli",stadium:"Castellani",photo:"1222015155_logo_empoli.jpg"},{id:"28",name:"Crotone",stadium:"Ezio Scida",photo:"1440574847_crotone.png"},{id:"27",name:"Cremonese",stadium:"",photo:""},{id:"26",name:"Cosenza",stadium:"",photo:""},{id:"25",name:"Como",stadium:"Giuseppe Sinigaglia",photo:"1448789154_como.jpeg"},{id:"24",name:"Cittadella",stadium:"",photo:""},{id:"23",name:"Chievo",stadium:"Bentegodi",photo:"1224416386_logoCHVback.gif"},{id:"22",name:"Cesena",stadium:"Dino Manuzzi",photo:"1420562032_cesena.png"},{id:"21",name:"Cavese",stadium:"",photo:""},{id:"20",name:"Catanzaro",stadium:"",photo:""},{id:"19",name:"Catania",stadium:"Stadio Massimino",photo:"1225644816_logo_catania.jpg"},{id:"18",name:"Castel di Sangro",stadium:"",photo:""},{id:"17",name:"Casertana",stadium:"",photo:""},{id:"16",name:"Casarano",stadium:"",photo:""},{id:"15",name:"Campobasso",stadium:"",photo:""},{id:"14",name:"Campania",stadium:"",photo:""},{id:"13",name:"Cagliari",stadium:"S.Elia",photo:"1472407936_cagliari.png"},{id:"12",name:"Brindisi",stadium:"",photo:""},{id:"11",name:"Brescia",stadium:"Rigamonti",photo:"1448317539_brescia.png"},{id:"10",name:"Bologna",stadium:"Dall'Ara",photo:"1225317389_100px-BolognaFootballClubLogo.png"},{id:"9",name:"Barletta",stadium:"",photo:""},{id:"8",name:"Bari",stadium:"San Nicola",photo:"1253463841_Logo_bari_new_184.jpg"},{id:"7",name:"Avellino",stadium:"Partenio-Adriano Lombardi",photo:"1442072874_avellino.jpeg"},{id:"6",name:"Atalanta",stadium:"Atl. Azz.d'Italia",photo:"1222015077_logo_atalanta.jpg"},{id:"5",name:"Ascoli",stadium:"Cino e Lillo Del Duca",photo:"1447594389_ascoli.png"},{id:"4",name:"Arezzo",stadium:"",photo:""},{id:"3",name:"Ancona",stadium:"",photo:""},{id:"2",name:"Alessandria",stadium:"",photo:""},{id:"1",name:"Albinoleffe",stadium:"",photo:""}],Ta=t(169),Ia=Object(s.a)((function(a){return{root:{flexGrow:1},paper:{padding:a.spacing(2),textAlign:"justify",color:a.palette.text.secondary}}}));function Da(){var a=Ia(),e=Object(n.useState)(0),t=Object(l.a)(e,2),i=t[0],r=t[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),m=s[0],d=s[1],p=Object(n.useState)([]),g=Object(l.a)(p,2),h=g[0],E=g[1],f=Object(n.useState)([]),b=Object(l.a)(f,2),v=b[0],_=b[1],j=Object(n.useState)([]),S=Object(l.a)(j,2),C=S[0],O=S[1],y=Object(n.useState)([]),w=Object(l.a)(y,2),N=w[0],k=w[1];Object(n.useEffect)((function(){Fa("seasons").then((function(a){E(a)})),Fa("lastMatch").then((function(a){k(a)}))}),[]);return o.a.createElement(u.a,{component:"span",m:1},o.a.createElement(Ta.a,{container:!0,spacing:1},o.a.createElement(Ta.a,{item:!0,xs:12},o.a.createElement(na.a,{className:a.paper},o.a.createElement(fa,{players:v,matches:C,seasons:h,countries:Ma,seasonID:i,seasonLabel:m,onSeasonSelect:function(a,e){Ra("players",a).then((function(a){_(a)})),Ra("matches",a).then((function(a){O(a)})),r(a),d(e)}}))),N.length>0&&o.a.createElement(Ta.a,{item:!0,xs:3},o.a.createElement(na.a,{className:a.paper},o.a.createElement(ya,{match:N[0],allTeams:Ba}))),o.a.createElement(Ta.a,{item:!0,xs:12},o.a.createElement(na.a,{className:a.paper},o.a.createElement(Na,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ga=t(84),Va=t(170),Wa=t(171),Ha=Object(Ga.a)({palette:{primary:{main:"#082D68",contrastText:"#FFFFFF"},secondary:{main:"#CA2331"},red:"#CA2331"}});r.a.render(o.a.createElement(Va.a,{theme:Ha},o.a.createElement(Wa.a,null),o.a.createElement(Da,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},98:function(a,e,t){a.exports=t(113)}},[[98,1,2]]]);
//# sourceMappingURL=main.70645ca1.chunk.js.map