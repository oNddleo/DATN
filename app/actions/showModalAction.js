export function showModal(index) {
    return {type: 'SHOW_MODAL', index};
}

export function closeModal() {
    return {type: 'CLOSE_MODAL'};
}