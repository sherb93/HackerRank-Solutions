/*Maria plays college basketball and wants to go pro.
Each season she maintains a record of her play.
She tabulates the number of times she breaks her season record for most points and least points in a game.
Points scored in the first game establish her record for the season, and she begins counting from there.*/

function breakingRecords(scores) {
    const tally = [0, 0]
    
    const records = {
        min: scores[0],
        max: scores[0]
    }
    
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < records.min) {
            records.min = scores[i];
            tally[1] += 1;
        } else if (scores[i] > records.max) {
            records.max = scores[i];
            tally[0] += 1;
        }
    }
    
    return tally;

}