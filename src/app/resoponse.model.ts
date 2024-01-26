export interface Event {
	id: string;
	titre: string;
	prix: string;
	lieu: string;
	description: string;
	affiche: string;
	image_1: string;
	image_2: string;
}

export interface Tarif {
	id: string;
	prix_ttc: string;
	intitule: string;
	position: string;
	id_calendar: string;
}

export interface Dates {
	date: string;
	id: string;
	heure: string;
	date_fin: string;
	heure_fin: string;
	id_calendar: number;
	categorie: string;
	salle: string;
	complet?: any;
	lANG?: any;
	langue: string;
	lieu?: any;
	lieu_adresse?: any;
	carte: string;
	tarifs: Tarif[];
	plan: number;
	map: string;
}

export interface DataResponse {
	event: Event;
	faqs: any[];
	fields: any[];
	intervenants: any[];
	organisateurs: any[];
	partenaires: any[];
	galerie: any[];
	videos: any[];
	dates: Dates[];
}
