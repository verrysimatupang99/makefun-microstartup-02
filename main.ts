// WiltR CLI — emit the pitch, optionally shouted.
const LINE =
  'WiltR: a subscription service that texts your houseplants passive-aggressive reminders that you are not watering them.';

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function showHelp(): void {
  process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
}

function main(): void {
  if (hasFlag('--help')) {
    showHelp();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
