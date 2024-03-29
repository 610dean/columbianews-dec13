﻿/*

Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.

For licensing, see LICENSE.html or http://ckeditor.com/license

*/



/**

 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the

 * Slovak language.

 */



/**#@+

   @type String

   @example

*/



/**

 * Contains the dictionary of language entries.

 * @namespace

 */

CKEDITOR.lang['sk'] =

{

	/**

	 * The language reading direction. Possible values are "rtl" for

	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right

	 * languages (like English).

	 * @default 'ltr'

	 */

	dir : 'ltr',



	/*

	 * Screenreader titles. Please note that screenreaders are not always capable

	 * of reading non-English words. So be careful while translating it.

	 */

	editorTitle : 'Editor formátovaného textu, %1',

	editorHelp : 'Stlačte ALT 0 pre nápovedu',



	// ARIA descriptions.

	toolbars	: 'Lišty nástrojov editora',

	editor		: 'Editor formátovaného textu',



	// Toolbar buttons without dialogs.

	source			: 'Zdroj',

	newPage			: 'Nová stránka',

	save			: 'Uložiť',

	preview			: 'Náhľad',

	cut				: 'Vystrihnúť',

	copy			: 'Kopírovať',

	paste			: 'Vložiť',

	print			: 'Tlač',

	underline		: 'Podčiarknuté',

	bold			: 'Tučné',

	italic			: 'Kurzíva',

	selectAll		: 'Vybrať všetko',

	removeFormat	: 'Odstrániť formátovanie',

	strike			: 'Prečiarknuté',

	subscript		: 'Dolný index',

	superscript		: 'Horný index',

	horizontalrule	: 'Vložiť vodorovnú čiaru',

	pagebreak		: 'Vložiť oddeľovač stránky pre tlač',

	pagebreakAlt		: 'Zalomenie strany',

	unlink			: 'Odstrániť odkaz',

	undo			: 'Späť',

	redo			: 'Znovu',



	// Common messages and labels.

	common :

	{

		browseServer	: 'Prechádzať server',

		url				: 'URL',

		protocol		: 'Protokol',

		upload			: 'Nahrať',

		uploadSubmit	: 'Odoslať to na server',

		image			: 'Obrázok',

		flash			: 'Flash',

		form			: 'Formulár',

		checkbox		: 'Zaškrtávacie políčko',

		radio			: 'Prepínač',

		textField		: 'Textové pole',

		textarea		: 'Textová oblasť',

		hiddenField		: 'Skryté pole',

		button			: 'Tlačidlo',

		select			: 'Rozbaľovací zoznam',

		imageButton		: 'Obrázkové tlačidlo',

		notSet			: '<nenastavené>',

		id				: 'Id',

		name			: 'Meno',

		langDir			: 'Orientácia jazyka',

		langDirLtr		: 'Zľava doprava (LTR)',

		langDirRtl		: 'Sprava doľava (RTL)',

		langCode		: 'Kód jazyka',

		longDescr		: 'Dlhý popis URL',

		cssClass		: 'Triedy štýlu',

		advisoryTitle	: 'Pomocný titulok',

		cssStyle		: 'Štýl',

		ok				: 'OK',

		cancel			: 'Zrušiť',

		close			: 'Zatvorit',

		preview			: 'Náhľad',

		generalTab		: 'Hlavné',

		advancedTab		: 'Rozšírené',

		validateNumberFailed : 'Hodnota nieje číslo.',

		confirmNewPage	: 'Všetky neuložené zmeny v tomto obsahu budú stratené. Ste si istý, že chcete načítať novú stránku?',

		confirmCancel	: 'Niektore možnosti boli zmenené. Naozaj chcete zavrieť okno?',

		options			: 'Možnosti',

		target			: 'Cieľ',

		targetNew		: 'Nové okno (_blank)',

		targetTop		: 'Najvrchnejšie okno (_top)',

		targetSelf		: 'To isté okno (_self)',

		targetParent	: 'Rodičovské okno (_parent)',

		langDirLTR		: 'Zľava doprava (LTR)',

		langDirRTL		: 'Sprava doľava (RTL)',

		styles			: 'Štýl',

		cssClasses		: 'Triedy štýlu',

		width			: 'Šírka',

		height			: 'Výška',

		align			: 'Zarovnanie',

		alignLeft		: 'Vľavo',

		alignRight		: 'Vpravo',

		alignCenter		: 'Na stred',

		alignTop		: 'Nahor',

		alignMiddle		: 'Na stred',

		alignBottom		: 'Dole',

		invalidValue	: 'Neplatná hodnota.',

		invalidHeight	: 'Výška musí byť číslo.',

		invalidWidth	: 'Šírka musí byť číslo.',

		invalidCssLength	: 'Špecifikovaná hodnota pre pole "%1" musí byť kladné číslo s alebo bez platnej CSS mernej jednotky (px, %, in, cm, mm, em, ex, pt alebo pc).',

		invalidHtmlLength	: 'Špecifikovaná hodnota pre pole "%1" musí byť kladné číslo s alebo bez platnej HTML mernej jednotky (px alebo %).',

		invalidInlineStyle	: 'Zadaná hodnota pre inline štýl musí pozostávať s jedného, alebo viac dvojíc formátu "názov: hodnota", oddelených bodkočiarkou.',

		cssLengthTooltip	: 'Vložte číslo pre hodnotu v pixeloch alebo číslo so správnou CSS jednotou (px, %, in, cm, mm, em, ex, pt, or pc).',



		// Put the voice-only part of the label in the span.

		unavailable		: '%1<span class="cke_accessibility">, nedostupný</span>'

	},



	contextmenu :

	{

		options : 'Možnosti kontextového menu'

	},



	// Special char dialog.

	specialChar		:

	{

		toolbar		: 'Vložiť špeciálny znak',

		title		: 'Výber špeciálneho znaku',

		options : 'Možnosti špeciálneho znaku'

	},



	// Link dialog.

	link :

	{

		toolbar		: 'Odkaz',

		other 		: '<iný>',

		menu		: 'Upraviť odkaz',

		title		: 'Odkaz',

		info		: 'Informácie o odkaze',

		target		: 'Cieľ',

		upload		: 'Nahrať',

		advanced	: 'Rozšírené',

		type		: 'Typ odkazu',

		toUrl		: 'URL',

		toAnchor	: 'Odkaz na kotvu v texte',

		toEmail		: 'E-mail',

		targetFrame		: '<rámec>',

		targetPopup		: '<vyskakovacie okno>',

		targetFrameName	: 'Názov rámu cieľa',

		targetPopupName	: 'Názov vyskakovacieho okna',

		popupFeatures	: 'Vlastnosti vyskakovacieho okna',

		popupResizable	: 'Meniteľná veľkosť (resizable)',

		popupStatusBar	: 'Stavový riadok (status bar)',

		popupLocationBar: 'Panel umiestnenia (location bar)',

		popupToolbar	: 'Panel nástrojov (toolbar)',

		popupMenuBar	: 'Panel ponuky (menu bar)',

		popupFullScreen	: 'Celá obrazovka (IE)',

		popupScrollBars	: 'Posuvníky (scroll bars)',

		popupDependent	: 'Závislosť (Netscape)',

		popupLeft		: 'Ľavý okraj',

		popupTop		: 'Horný okraj',

		id				: 'Id',

		langDir			: 'Orientácia jazyka',

		langDirLTR		: 'Zľava doprava (LTR)',

		langDirRTL		: 'Sprava doľava (RTL)',

		acccessKey		: 'Prístupový kľúč',

		name			: 'Názov',

		langCode			: 'Orientácia jazyka',

		tabIndex			: 'Poradie prvku (tab index)',

		advisoryTitle		: 'Pomocný titulok',

		advisoryContentType	: 'Pomocný typ obsahu',

		cssClasses		: 'Triedy štýlu',

		charset			: 'Priradená znaková sada',

		styles			: 'Štýl',

		rel			: 'Vzťah (rel)',

		selectAnchor		: 'Vybrať kotvu',

		anchorName		: 'Podľa mena kotvy',

		anchorId			: 'Podľa Id objektu',

		emailAddress		: 'E-Mailová adresa',

		emailSubject		: 'Predmet správy',

		emailBody		: 'Telo správy',

		noAnchors		: '(V dokumente nie sú dostupné žiadne kotvy)',

		noUrl			: 'Zadajte prosím URL odkazu',

		noEmail			: 'Zadajte prosím e-mailovú adresu'

	},



	// Anchor dialog

	anchor :

	{

		toolbar		: 'Kotva',

		menu		: 'Upraviť kotvu',

		title		: 'Vlastnosti kotvy',

		name		: 'Názov kotvy',

		errorName	: 'Zadajte prosím názov kotvy',

		remove		: 'Odstrániť kotvu'

	},



	// List style dialog

	list:

	{

		numberedTitle		: 'Vlastnosti číselného zoznamu',

		bulletedTitle		: 'Vlastnosti odrážkového zoznamu',

		type				: 'Typ',

		start				: 'Začiatok',

		validateStartNumber				:'Začiatočné číslo číselného zoznamu musí byť celé číslo.',

		circle				: 'Kruh',

		disc				: 'Disk',

		square				: 'Štvorec',

		none				: 'Nič',

		notset				: '<nenastavené>',

		armenian			: 'Arménske číslovanie',

		georgian			: 'Gregoriánske číslovanie (an, ban, gan, atď.)',

		lowerRoman			: 'Malé rímske (i, ii, iii, iv, v, atď.)',

		upperRoman			: 'Veľké rímske (I, II, III, IV, V, atď.)',

		lowerAlpha			: 'Malé latinské (a, b, c, d, e, atď.)',

		upperAlpha			: 'Veľké latinské (A, B, C, D, E, atď.)',

		lowerGreek			: 'Malé grécke (alfa, beta, gama, atď.)',

		decimal				: 'Číselné (1, 2, 3, atď.)',

		decimalLeadingZero	: 'Číselné s nulou (01, 02, 03, atď.)'

	},



	// Find And Replace Dialog

	findAndReplace :

	{

		title				: 'Nájsť a nahradiť',

		find				: 'Hľadať',

		replace				: 'Nahradiť',

		findWhat			: 'Čo hľadať:',

		replaceWith			: 'Čím nahradiť:',

		notFoundMsg			: 'Hľadaný text nebol nájdený.',

		findOptions			: 'Nájsť možnosti',

		matchCase			: 'Rozlišovať malé a veľké písmená',

		matchWord			: 'Len celé slová',

		matchCyclic			: 'Cykliť zhodu',

		replaceAll			: 'Nahradiť všetko',

		replaceSuccessMsg	: '%1 výskyt(ov) nahradených.'

	},



	// Table Dialog

	table :

	{

		toolbar		: 'Tabuľka',

		title		: 'Vlastnosti tabuľky',

		menu		: 'Vlastnosti tabuľky',

		deleteTable	: 'Vymazať tabuľku',

		rows		: 'Riadky',

		columns		: 'Stĺpce',

		border		: 'Šírka rámu (border)',

		widthPx		: 'pixelov',

		widthPc		: 'percent',

		widthUnit	: 'jednotka šírky',

		cellSpace	: 'Vzdialenosť buniek (cell spacing)',

		cellPad		: 'Odsadenie obsahu (cell padding)',

		caption		: 'Popis',

		summary		: 'Prehľad',

		headers		: 'Hlavička',

		headersNone		: 'Žiadne',

		headersColumn	: 'Prvý stĺpec',

		headersRow		: 'Prvý riadok',

		headersBoth		: 'Obe',

		invalidRows		: 'Počet riadkov musí byť číslo väčšie ako 0.',

		invalidCols		: 'Počet stĺpcov musí byť číslo väčšie ako 0.',

		invalidBorder	: 'Širka rámu musí byť číslo.',

		invalidWidth	: 'Širka tabuľky musí byť číslo.',

		invalidHeight	: 'Výška tabuľky musí byť číslo.',

		invalidCellSpacing	: 'Medzera mädzi bunkami (cell spacing) musí byť kladné číslo.',

		invalidCellPadding	: 'Odsadenie v bunkách (cell padding) musí byť kladné číslo.',



		cell :

		{

			menu			: 'Bunka',

			insertBefore	: 'Vložiť bunku pred',

			insertAfter		: 'Vložiť bunku za',

			deleteCell		: 'Vymazať bunky',

			merge			: 'Zlúčiť bunky',

			mergeRight		: 'Zlúčiť doprava',

			mergeDown		: 'Zlúčiť dole',

			splitHorizontal	: 'Rozdeliť bunky horizontálne',

			splitVertical	: 'Rozdeliť bunky vertikálne',

			title			: 'Vlastnosti bunky',

			cellType		: 'Typ bunky',

			rowSpan			: 'Rozsah riadkov',

			colSpan			: 'Rozsah stĺpcov',

			wordWrap		: 'Zalomovanie riadkov',

			hAlign			: 'Horizontálne zarovnanie',

			vAlign			: 'Vertikálne zarovnanie',

			alignBaseline	: 'Základná čiara (baseline)',

			bgColor			: 'Farba pozadia',

			borderColor		: 'Farba rámu',

			data			: 'Dáta',

			header			: 'Hlavička',

			yes				: 'Áno',

			no				: 'Nie',

			invalidWidth	: 'Šírka bunky musí byť číslo.',

			invalidHeight	: 'Výška bunky musí byť číslo.',

			invalidRowSpan	: 'Rozsah riadkov musí byť celé číslo.',

			invalidColSpan	: 'Rozsah stĺpcov musí byť celé číslo.',

			chooseColor		: 'Vybrať'

		},



		row :

		{

			menu			: 'Riadok',

			insertBefore	: 'Vložiť riadok pred',

			insertAfter		: 'Vložiť riadok po',

			deleteRow		: 'Vymazať riadky'

		},



		column :

		{

			menu			: 'Stĺpec',

			insertBefore	: 'Vložiť stĺpec pred',

			insertAfter		: 'Vložiť stĺpec po',

			deleteColumn	: 'Zmazať stĺpce'

		}

	},



	// Button Dialog.

	button :

	{

		title		: 'Vlastnosti tlačidla',

		text		: 'Text (Hodnota)',

		type		: 'Typ',

		typeBtn		: 'Tlačidlo',

		typeSbm		: 'Odoslať',

		typeRst		: 'Resetovať'

	},



	// Checkbox and Radio Button Dialogs.

	checkboxAndRadio :

	{

		checkboxTitle : 'Vlastnosti zaškrtávacieho políčka',

		radioTitle	: 'Vlastnosti prepínača (radio button)',

		value		: 'Hodnota',

		selected	: 'Vybrané (selected)'

	},



	// Form Dialog.

	form :

	{

		title		: 'Vlastnosti formulára',

		menu		: 'Vlastnosti formulára',

		action		: 'Akcia (action)',

		method		: 'Metóda (method)',

		encoding	: 'Kódovanie (encoding)'

	},



	// Select Field Dialog.

	select :

	{

		title		: 'Vlastnosti rozbaľovacieho zoznamu',

		selectInfo	: 'Informácie o výbere',

		opAvail		: 'Dostupné možnosti',

		value		: 'Hodnota',

		size		: 'Veľkosť',

		lines		: 'riadkov',

		chkMulti	: 'Povoliť viacnásobný výber',

		opText		: 'Text',

		opValue		: 'Hodnota',

		btnAdd		: 'Pridať',

		btnModify	: 'Upraviť',

		btnUp		: 'Hore',

		btnDown		: 'Dole',

		btnSetValue : 'Nastaviť ako vybranú hodnotu',

		btnDelete	: 'Vymazať'

	},



	// Textarea Dialog.

	textarea :

	{

		title		: 'Vlastnosti textovej oblasti (textarea)',

		cols		: 'Stĺpcov',

		rows		: 'Riadkov'

	},



	// Text Field Dialog.

	textfield :

	{

		title		: 'Vlastnosti textového poľa',

		name		: 'Názov (name)',

		value		: 'Hodnota',

		charWidth	: 'Šírka poľa (podľa znakov)',

		maxChars	: 'Maximálny počet znakov',

		type		: 'Typ',

		typeText	: 'Text',

		typePass	: 'Heslo'

	},



	// Hidden Field Dialog.

	hidden :

	{

		title	: 'Vlastnosti skrytého poľa',

		name	: 'Názov (name)',

		value	: 'Hodnota'

	},



	// Image Dialog.

	image :

	{

		title		: 'Vlastnosti obrázka',

		titleButton	: 'Vlastnosti obrázkového tlačidla',

		menu		: 'Vlastnosti obrázka',

		infoTab		: 'Informácie o obrázku',

		btnUpload	: 'Odoslať to na server',

		upload		: 'Nahrať',

		alt			: 'Alternatívny text',

		lockRatio	: 'Pomer zámky',

		resetSize	: 'Pôvodná veľkosť',

		border		: 'Rám (border)',

		hSpace		: 'H-medzera',

		vSpace		: 'V-medzera',

		alertUrl	: 'Zadajte prosím URL obrázka',

		linkTab		: 'Odkaz',

		button2Img	: 'Chcete zmeniť vybrané obrázkové tlačidlo na jednoduchý obrázok?',

		img2Button	: 'Chcete zmeniť vybraný obrázok na obrázkové tlačidlo?',

		urlMissing	: 'Chýba URL zdroja obrázka.',

		validateBorder	: 'Rám (border) musí byť celé číslo.',

		validateHSpace	: 'H-medzera musí byť celé číslo.',

		validateVSpace	: 'V-medzera musí byť celé číslo.'

	},



	// Flash Dialog

	flash :

	{

		properties		: 'Vlastnosti Flashu',

		propertiesTab	: 'Vlastnosti',

		title			: 'Vlastnosti Flashu',

		chkPlay			: 'Automatické prehrávanie',

		chkLoop			: 'Opakovanie',

		chkMenu			: 'Povoliť Flash Menu',

		chkFull			: 'Povoliť zobrazenie na celú obrazovku (fullscreen)',

 		scale			: 'Mierka',

		scaleAll		: 'Zobraziť všetko',

		scaleNoBorder	: 'Bez okrajov',

		scaleFit		: 'Roztiahnuť, aby sedelo presne',

		access			: 'Prístup skriptu',

		accessAlways	: 'Vždy',

		accessSameDomain: 'Rovnaká doména',

		accessNever		: 'Nikdy',

		alignAbsBottom	: 'Úplne dole',

		alignAbsMiddle	: 'Do stredu',

		alignBaseline	: 'Na základnú čiaru',

		alignTextTop	: 'Na horný okraj textu',

		quality			: 'Kvalita',

		qualityBest		: 'Najlepšia',

		qualityHigh		: 'Vysoká',

		qualityAutoHigh	: 'Automaticky vysoká',

		qualityMedium	: 'Stredná',

		qualityAutoLow	: 'Automaticky nízka',

		qualityLow		: 'Nízka',

		windowModeWindow: 'Okno',

		windowModeOpaque: 'Nepriehľadný',

		windowModeTransparent : 'Priehľadný',

		windowMode		: 'Mód okna',

		flashvars		: 'Premenné pre Flash',

		bgcolor			: 'Farba pozadia',

		hSpace			: 'H-medzera',

		vSpace			: 'V-medzera',

		validateSrc		: 'URL nesmie byť prázdne.',

		validateHSpace	: 'H-medzera musí byť číslo.',

		validateVSpace	: 'V-medzera musí byť číslo'

	},



	// Speller Pages Dialog

	spellCheck :

	{

		toolbar			: 'Kontrola pravopisu',

		title			: 'Skontrolovať pravopis',

		notAvailable	: 'Prepáčte, ale služba je momentálne nedostupná.',

		errorLoading	: 'Chyba pri načítaní slovníka z adresy: %s.',

		notInDic		: 'Nie je v slovníku',

		changeTo		: 'Zmeniť na',

		btnIgnore		: 'Ignorovať',

		btnIgnoreAll	: 'Ignorovať všetko',

		btnReplace		: 'Prepísat',

		btnReplaceAll	: 'Prepísat všetko',

		btnUndo			: 'Späť',

		noSuggestions	: '- Žiadny návrh -',

		progress		: 'Prebieha kontrola pravopisu...',

		noMispell		: 'Kontrola pravopisu dokončená: Neboli nájdené žiadne chyby pravopisu',

		noChanges		: 'Kontrola pravopisu dokončená: Neboli zmenené žiadne slová',

		oneChange		: 'Kontrola pravopisu dokončená: Bolo zmenené jedno slovo',

		manyChanges		: 'Kontrola pravopisu dokončená: Bolo zmenených %1 slov',

		ieSpellDownload	: 'Kontrola pravopisu nie je naištalovaná. Chcete ju teraz stiahnuť?'

	},



	smiley :

	{

		toolbar	: 'Smajlíky',

		title	: 'Vložiť smajlíka',

		options : 'Možnosti smajlíkov'

	},



	elementsPath :

	{

		eleLabel : 'Cesta prvkov',

		eleTitle : '%1 prvok'

	},



	numberedlist	: 'Vložiť/Odstrániť číslovaný zoznam',

	bulletedlist	: 'Vložiť/Odstrániť zoznam s odrážkami',

	indent			: 'Zväčšiť odsadenie',

	outdent			: 'Zmenšiť odsadenie',



	justify :

	{

		left	: 'Zarovnať vľavo',

		center	: 'Zarovnať na stred',

		right	: 'Zarovnať vpravo',

		block	: 'Zarovnať do bloku'

	},



	blockquote : 'Citácia',



	clipboard :

	{

		title		: 'Vložiť',

		cutError	: 'Bezpečnostné nastavenia Vášho prehliadača nedovoľujú editoru automaticky spustiť operáciu vystrihnutia. Prosím, použite na to klávesnicu (Ctrl/Cmd+X).',

		copyError	: 'Bezpečnostné nastavenia Vášho prehliadača nedovoľujú editoru automaticky spustiť operáciu kopírovania. Prosím, použite na to klávesnicu (Ctrl/Cmd+C).',

		pasteMsg	: 'Prosím, vložte nasledovný rámček použitím klávesnice (<STRONG>Ctrl/Cmd+V</STRONG>) a stlačte OK.',

		securityMsg	: 'Kvôli vašim bezpečnostným nastaveniam prehliadača editor nie je schopný pristupovať k vašej schránke na kopírovanie priamo. Vložte to preto do tohto okna.',

		pasteArea	: 'Miesto pre vloženie'

	},



	pastefromword :

	{

		confirmCleanup	: 'Vkladaný text vyzerá byť skopírovaný z Wordu. Chcete ho automaticky vyčistiť pred vkladaním?',

		toolbar			: 'Vložiť z Wordu',

		title			: 'Vložiť z Wordu',

		error			: 'Nebolo možné vyčistiť vložené dáta kvôli internej chybe'

	},



	pasteText :

	{

		button	: 'Vložiť ako čistý text',

		title	: 'Vložiť ako čistý text'

	},



	templates :

	{

		button			: 'Šablóny',

		title			: 'Šablóny obsahu',

		options : 'Možnosti šablóny',

		insertOption	: 'Nahradiť aktuálny obsah',

		selectPromptMsg	: 'Prosím vyberte šablónu na otvorenie v editore',

		emptyListMsg	: '(Žiadne šablóny nedefinované)'

	},



	showBlocks : 'Ukázať bloky',



	stylesCombo :

	{

		label		: 'Štýly',

		panelTitle	: 'Formátovanie štýlov',

		panelTitle1	: 'Štýly bloku',

		panelTitle2	: 'Vnútroriadkové (inline) štýly',

		panelTitle3	: 'Štýly objeku'

	},



	format :

	{

		label		: 'Formát',

		panelTitle	: 'Formát',



		tag_p		: 'Normálny',

		tag_pre		: 'Formátovaný',

		tag_address	: 'Adresa',

		tag_h1		: 'Nadpis 1',

		tag_h2		: 'Nadpis 2',

		tag_h3		: 'Nadpis 3',

		tag_h4		: 'Nadpis 4',

		tag_h5		: 'Nadpis 5',

		tag_h6		: 'Nadpis 6',

		tag_div		: 'Normálny (DIV)'

	},



	div :

	{

		title				: 'Vytvoriť Div kontajner',

		toolbar				: 'Vytvoriť Div kontajner',

		cssClassInputLabel	: 'Triedy štýlu',

		styleSelectLabel	: 'Štýl',

		IdInputLabel		: 'Id',

		languageCodeInputLabel	: 'Kód jazyka',

		inlineStyleInputLabel	: 'Inline štýl',

		advisoryTitleInputLabel	: 'Pomocný titulok',

		langDirLabel		: 'Smer jazyka',

		langDirLTRLabel		: 'Zľava doprava (LTR)',

		langDirRTLLabel		: 'Zprava doľava (RTL)',

		edit				: 'Upraviť Div',

		remove				: 'Odstrániť Div'

  	},



	iframe :

	{

		title		: 'Vlastnosti IFrame',

		toolbar		: 'IFrame',

		noUrl		: 'Prosím, vložte URL iframe',

		scrolling	: 'Povoliť skrolovanie',

		border		: 'Zobraziť rám frame-u'

	},



	font :

	{

		label		: 'Font',

		voiceLabel	: 'Font',

		panelTitle	: 'Názov fontu'

	},



	fontSize :

	{

		label		: 'Veľkosť',

		voiceLabel	: 'Veľkosť písma',

		panelTitle	: 'Veľkosť písma'

	},



	colorButton :

	{

		textColorTitle	: 'Farba textu',

		bgColorTitle	: 'Farba pozadia',

		panelTitle		: 'Farby',

		auto			: 'Automaticky',

		more			: 'Viac farieb...'

	},



	colors :

	{

		'000' : 'Čierna',

		'800000' : 'Maroon',

		'8B4513' : 'Sedlová hnedá',

		'2F4F4F' : 'Tmavo bridlicovo sivá',

		'008080' : 'Modrozelená',

		'000080' : 'Tmavomodrá',

		'4B0082' : 'Indigo',

		'696969' : 'Tmavá sivá',

		'B22222' : 'Ohňová tehlová',

		'A52A2A' : 'Hnedá',

		'DAA520' : 'Zlatobyľ',

		'006400' : 'Tmavá zelená',

		'40E0D0' : 'Tyrkysová',

		'0000CD' : 'Stredná modrá',

		'800080' : 'Purpurová',

		'808080' : 'Sivá',

		'F00' : 'Červená',

		'FF8C00' : 'Tmavá oranžová',

		'FFD700' : 'Zlatá',

		'008000' : 'Zelená',

		'0FF' : 'Azúrová',

		'00F' : 'Modrá',

		'EE82EE' : 'Fialová',

		'A9A9A9' : 'Tmavá sivá',

		'FFA07A' : 'Svetlo lososová',

		'FFA500' : 'Oranžová',

		'FFFF00' : 'Žltá',

		'00FF00' : 'Vápenná',

		'AFEEEE' : 'Svetlo tyrkysová',

		'ADD8E6' : 'Svetlo modrá',

		'DDA0DD' : 'Slivková',

		'D3D3D3' : 'Svetlo sivá',

		'FFF0F5' : 'Levanduľovo červená',

		'FAEBD7' : 'Antická biela',

		'FFFFE0' : 'Svetlo žltá',

		'F0FFF0' : 'Medová',

		'F0FFFF' : 'Azúrová',

		'F0F8FF' : 'Alicovo modrá',

		'E6E6FA' : 'Levanduľová',

		'FFF' : 'Biela'

	},



	scayt :

	{

		title			: 'Kontrola pravopisu počas písania',

		opera_title		: 'Nepodporované Operou',

		enable			: 'Povoliť KPPP (Kontrola pravopisu počas písania)',

		disable			: 'Zakázať  KPPP (Kontrola pravopisu počas písania)',

		about			: 'O KPPP (Kontrola pravopisu počas písania)',

		toggle			: 'Prepnúť KPPP (Kontrola pravopisu počas písania)',

		options			: 'Možnosti',

		langs			: 'Jazyky',

		moreSuggestions	: 'Viac návrhov',

		ignore			: 'Ignorovať',

		ignoreAll		: 'Ignorovať všetko',

		addWord			: 'Pridať slovo',

		emptyDic		: 'Názov slovníka by nemal byť prázdny.',

		noSuggestions	: 'No suggestions', // MISSING

		optionsTab		: 'Možnosti',

		allCaps			: 'Ignorovať slová písané veľkými písmenami',

		ignoreDomainNames : 'Iznorovať názvy domén',

		mixedCase		: 'Ignorovať slová so smiešanými veľkými a malými písmenami',

		mixedWithDigits	: 'Ignorovať slová s číslami',



		languagesTab	: 'Jazyky',



		dictionariesTab	: 'Slovníky',

		dic_field_name	: 'Názov slovníka',

		dic_create		: 'Vytvoriť',

		dic_restore		: 'Obnoviť',

		dic_delete		: 'Vymazať',

		dic_rename		: 'Premenovať',

		dic_info		: 'Spočiatku je užívateľský slovník uložený v cookie. Cookie však majú obmedzenú veľkosť. Keď užívateľský slovník narastie do bodu, kedy nemôže byť uložený v cookie, potom musí byť slovník uložený na našom serveri. Pre uloženie vášho osobného slovníka na náš server by ste mali zadať názov pre váš slovník. Ak už máte uložený slovník, prosíme, napíšte jeho názov a kliknite tlačidlo Obnoviť.',



		aboutTab		: 'O'

	},



	about :

	{

		title		: 'O CKEditor-e',

		dlgTitle	: 'O CKEditor-e',

		help	: 'Zaškrtnite $1 pre pomoc.',

		userGuide : 'Používateľská príručka KCEditor-a',

		moreInfo	: 'Pre informácie o licenciách, prosíme, navštívte našu web stránku:',

		copy		: 'Copyright &copy; $1. Všetky práva vyhradené.'

	},



	maximize : 'Maximalizovať',

	minimize : 'Minimalizovať',



	fakeobjects :

	{

		anchor		: 'Kotva',

		flash		: 'Flash animácia',

		iframe		: 'IFrame',

		hiddenfield	: 'Skryté pole',

		unknown		: 'Neznámy objekt'

	},



	resize : 'Potiahnite pre zmenu veľkosti',



	colordialog :

	{

		title		: 'Vyberte farbu',

		options	:	'Možnosti farby',

		highlight	: 'Zvýrazniť',

		selected	: 'Vybraná farba',

		clear		: 'Vyčistiť'

	},



	toolbarCollapse	: 'Zbaliť lištu nástrojov',

	toolbarExpand	: 'Rozbaliť lištu nástrojov',



	toolbarGroups :

	{

		document : 'Dokument',

		clipboard : 'Schránka pre kopírovanie/Späť',

		editing : 'Upravovanie',

		forms : 'Formuláre',

		basicstyles : 'Základné štýly',

		paragraph : 'Odstavec',

		links : 'Odkazy',

		insert : 'Vložiť',

		styles : 'Štýly',

		colors : 'Farby',

		tools : 'Nástroje'

	},



	bidi :

	{

		ltr : 'Smer textu zľava doprava',

		rtl : 'Smer textu sprava doľava'

	},



	docprops :

	{

		label : 'Vlastnosti dokumentu',

		title : 'Vlastnosti dokumentu',

		design : 'Design',

		meta : 'Meta značky',

		chooseColor : 'Vybrať',

		other : 'Iný...',

		docTitle :	'Titulok stránky',

		charset : 	'Znaková sada',

		charsetOther : 'Iná znaková sada',

		charsetASCII : 'ASCII',

		charsetCE : 'Stredoeurópska',

		charsetCT : 'Čínština tradičná (Big5)',

		charsetCR : 'Cyrillika',

		charsetGR : 'Gréčtina',

		charsetJP : 'Japončina',

		charsetKR : 'Korejčina',

		charsetTR : 'Turečtina',

		charsetUN : 'Unicode (UTF-8)',

		charsetWE : 'Západná európa',

		docType : 'Typ záhlavia dokumentu',

		docTypeOther : 'Iný typ záhlavia dokumentu',

		xhtmlDec : 'Vložiť deklarácie XHTML',

		bgColor : 'Farba pozadia',

		bgImage : 'URL obrázka na pozadí',

		bgFixed : 'Fixné pozadie',

		txtColor : 'Farba textu',

		margin : 'Okraje stránky (margins)',

		marginTop : 'Horný',

		marginLeft : 'Ľavý',

		marginRight : 'Pravý',

		marginBottom : 'Dolný',

		metaKeywords : 'Indexované kľúčové slová dokumentu (oddelené čiarkou)',

		metaDescription : 'Popis dokumentu',

		metaAuthor : 'Autor',

		metaCopyright : 'Autorské práva (copyright)',

		previewHtml : '<p>Toto je nejaký <strong>ukážkový text</strong>. Používate <a href="javascript:void(0)">CKEditor</a>.</p>'

	}

};

