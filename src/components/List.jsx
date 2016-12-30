var React = require('react');
var ListItem = require('./ListItem.jsx');

 var cityNames = [{"id": 1, "name": "Karnal"}, {"id": 2, "name": "Amritsar"}, {"id": 3, "name": "Chandigarh"}, {"id": 4, "name": "Delhi"}, {"id": 5, "name": "Pune"}];



var List = React.createClass({

    
    render: function() {

        var items = cityNames.map(function(item){
                return <ListItem key={item.id} cityName={item.name} />
        });

        return (<ol>{items}</ol>);
    }
});

module.exports = List;