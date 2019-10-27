export class DepthPaddingCalculator {
    static calculatePx(depth: number): number {
        const threadWidthPx = 16;
        const threadMarginLeftPx = 5;
        const singleThreadWidthPx = threadWidthPx + threadMarginLeftPx;

        const paddingLeftFromRootThread = singleThreadWidthPx + 15;

        if (depth === 0) {
            return paddingLeftFromRootThread;
        }

        const paddingLeftFromThreadGroup = singleThreadWidthPx * depth

        // potentially add a 'type' to add an adjustment

        return paddingLeftFromRootThread + paddingLeftFromThreadGroup;
    }
}
