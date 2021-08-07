export type colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'light' | 'link';

export interface MouseClick {
    onClickHandler : (event: React.MouseEvent<HTMLButtonElement>) => void
}
