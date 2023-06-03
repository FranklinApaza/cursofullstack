module.exports = (sequelize, DataTypes) => {
    const VentaDetalle = sequelize.define('VentaDetalle', {
        producto_id: DataTypes.INTEGER,
        venta_id: DataTypes.INTEGER,
        precio: DataTypes.DOUBLE,
        cantidad: DataTypes.INTEGER
    },
        {
            timestamps: false,
            tableName: 'venta_detalle'
        });
    return VentaDetalle;
};