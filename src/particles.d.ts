declare module 'particles.js' {
    export function particlesJS(tag_id: string, params: any): void;
}

declare global {
    interface Window {
        particlesJS: (tag_id: string, params: any) => void;
    }
}
