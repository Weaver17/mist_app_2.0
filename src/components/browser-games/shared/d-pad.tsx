type Direction = "up" | "down" | "left" | "right";

type DPadProps = {
    onDirection: (direction: Direction) => void;
};

const BTN =
    "flex items-center justify-center w-14 h-14 rounded-xl bg-slate-800/80 active:bg-green-400/60 text-white text-2xl select-none touch-manipulation";

export function DPad({ onDirection }: DPadProps) {
    const fire =
        (dir: Direction) => (e: React.TouchEvent | React.MouseEvent) => {
            e.preventDefault();
            onDirection(dir);
        };

    return (
        <div
            className="grid grid-cols-3 grid-rows-3 gap-1 pointer-events-auto"
            style={{ width: 180, height: 180 }}
        >
            <span />
            <button
                className={BTN}
                onTouchStart={fire("up")}
                onMouseDown={fire("up")}
                aria-label="Up"
            >
                ▲
            </button>
            <span />
            <button
                className={BTN}
                onTouchStart={fire("left")}
                onMouseDown={fire("left")}
                aria-label="Left"
            >
                ◀
            </button>
            <span />
            <button
                className={BTN}
                onTouchStart={fire("right")}
                onMouseDown={fire("right")}
                aria-label="Right"
            >
                ▶
            </button>
            <span />
            <button
                className={BTN}
                onTouchStart={fire("down")}
                onMouseDown={fire("down")}
                aria-label="Down"
            >
                ▼
            </button>
            <span />
        </div>
    );
}
