export interface Photo {
    id: number;
    src: {
        large: string;
        original: string;
    };
    photographer: string;
    photographer_url: string;
    height: number;
    width: number;
}