/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";
  import Tenants from "./Tenants";
 



class NavBar extends Component {

    constructor(props) {
        super(props);
        this.dsiplayPage = this.dsiplayPage.bind(this);
        this.displayServers = this.displayServers.bind(this);
        this.displayTables = this.displayTables.bind(this);
        this.displayBrokers = this.displayBrokers.bind(this);
        this.displayControllers = this.displayControllers.bind(this);
        this.dsiplayCluster = this.dsiplayCluster.bind(this);
    }


    dsiplayPage() {
        this.props.mutateState('post1');
    };

    dsiplayCluster() {
        this.props.mutateState('cluster');
    };

    displayServers() {
        this.props.mutateState('servers');
    };

    displayBrokers() {
        this.props.mutateState('brokers');
    };

    displayControllers() {
        this.props.mutateState('controllers');
    };

    displayTables() {
        this.props.mutateState('tables');
    };
   

    render() {
        return (
            <Router>
            <List component="nav">
                <ListItem component="div" >
                    <ListItemText inset onClick={this.dsiplayCluster}>
                        <TypoGraphy color="inherit" variant="title" >
                        <NavLink
                         strict to="/cluster" 
                         activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                        }}>
                            Cluster
                            </NavLink>

                        </TypoGraphy>
                    </ListItemText>
                    <ListItemText inset onClick={this.dsiplayPage}>
                        <TypoGraphy color="inherit" variant="title">
                        <NavLink
                         strict to="/tenants" 
                         activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                        }}>
                            Tenants
                            </NavLink>  
                            
                        </TypoGraphy>
                    </ListItemText>

                    <ListItemText inset onClick={this.displayTables}>
                        <TypoGraphy color="inherit" variant="title">
                        <NavLink
                         strict to="/tables" 
                         activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                        }}>
                            Tables
                            </NavLink> 
                            
                        </TypoGraphy>
                    </ListItemText>

                    <ListItemText inset onClick={this.displayControllers}>
                        <TypoGraphy color="inherit" variant="title">
                        <NavLink
                         strict to="/controllers" 
                         activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                        }}>
                            Controllers
                            </NavLink>
                            
                        </TypoGraphy>
                    </ListItemText>

                    <ListItemText inset onClick={this.displayServers}>
                        <TypoGraphy color="inherit" variant="title">
                        <NavLink
                         strict to="/servers" 
                         activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                        }}>
                            Servers
                            </NavLink>
                            
                        </TypoGraphy>
                    </ListItemText>

                    <ListItemText inset onClick={this.displayBrokers}>
                        <TypoGraphy color="inherit" variant="title">
                        <NavLink
                         strict to="/brokers" 
                         activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                        }}>
                            Brokers
                            </NavLink>
                            
                        </TypoGraphy>
                    </ListItemText>
                </ListItem>

            </List>
            <Switch>
        <Route path="/cluster"> 
            
          </Route>
          <Route path="/tenants" >
          <Tenants></Tenants>
          
          </Route>
          <Route path="/tables">
          </Route>
          <Route path="/controllers">
          </Route>
          <Route path="/servers">
          </Route>
          <Route path="/brokers">
          </Route>
          
        </Switch>
            </Router>)
    }

    
}


export default NavBar;