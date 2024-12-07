const styles = {
    GridFirstSection: {
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr',
        height: '85vh',
    },
    GridSecondSection: {
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        maxHeight: '85vh'
    },
    ForecastCardsContainer: {
        display: 'grid',
        width: '100%',
        height: '160px',
        placeItems: 'center',
        background: 'rgba(0, 0, 0, 0.1)'
    },
    ForecastCard: {
        p: 2,
        ml: 1.5,
        height: '140px',
        width: '120px',
        display: 'grid',
        borderRadius: '16px',
        boxSizing: 'border-box',
        border: '1px solid rgba(0, 0, 0, 0.25)',
    },
    ForecastCardsSwiperContainer: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.1)',
    }
};

export default styles;
