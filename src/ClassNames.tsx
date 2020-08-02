function of(...classes: (string | undefined)[]): string {
    return classes.filter(c => c !== undefined).join(' ')
}

function suffix(suffix: string, classes: (string | undefined)[]): string {
    const classesWithSuffix = classes.map(c => c ? `${c}-${suffix}` : undefined)
    return classesWithSuffix.filter(c => c !== undefined).join(' ')
}

export default {
    of,
    suffix,
} 
