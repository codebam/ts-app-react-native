
export interface post {
	name: string,
	id: number,
	url: string,
	ap_id: string,
	language_id: number,
	creator_id: number,
	community_id: number,
	removed: boolean,
	locked: boolean,
	deleted: boolean,
	local: boolean,
	nsfw: boolean,
	featured_community: boolean,
	featured_local: boolean,
	published: string
}

export type potentialPost = Record<string, number | boolean | string>;

export class Post implements post {
	name: string = "";
	id: number = 0;
	url: string = "";
	ap_id: string = "";
	language_id: number = 0;
	creator_id: number = 0;
	community_id: number = 0;
	removed: boolean = false;
	locked: boolean = false;
	deleted: boolean = false;
	local: boolean = false;
	nsfw: boolean = false;
	featured_community: boolean = false;
	featured_local: boolean = false;
	published: string = "2023-10-21T20:18:42.619214";
	
	constructor(post: post | potentialPost){
		this.set(post);
	}

	set(post: post | potentialPost){
		for(let i in post){
			(this as Record<string, any>)[i] = (post as potentialPost)[i];
		}
		return this;
	}

	fromJson(jsonString: string){
		return this.set(JSON.parse(jsonString));
	}

	toJson(){
		return JSON.stringify(this);
	}

}