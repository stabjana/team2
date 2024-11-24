function placeAlienOnGrid(fieldId, alienImage) {
    // Remove any existing figure
    const currentAlien = document.querySelector('.alien');
    if (currentAlien) {
        currentAlien.remove();
    }

    // Find the cell by ID
    const targetField = document.getElementById(fieldId);
    if (!targetField) {
        console.error(`Field with ID "${fieldId}" not found. Placing alien at default cell.`);
        return;
    }

    // Create the figure element
    const alien = document.createElement('img');
    alien.src = alienImage; // Use the imported PNG
    alien.id = 'alien'; // Ensure the ID is unique
    alien.alt = 'Alien Figure';
    alien.classList.add('alien');

    // Place the figure in the target cell
    targetField.appendChild(alien);
}

export default placeAlienOnGrid;